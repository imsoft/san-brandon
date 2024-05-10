import { s3Client } from "@/lib/s3Client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const prefix = searchParams.get('prefix') || '';

  const command = new ListObjectsV2Command({
    Bucket: process.env.BUCKET || "",
    Prefix: prefix,
    Delimiter: "/",  // Este parámetro indica que solo queremos los objetos en el nivel especificado y las carpetas
  });

  try {
    const result = await s3Client.send(command);

    // Filtramos los objetos que están en el nivel especificado
    const objectsInRoot = result.Contents?.filter(item => item.Key !== prefix).map(item => {
      return {
        ...item,
        Key: item.Key  // Retornar la ruta completa del archivo sin modificar
      };
    }) || [];

    // Identificamos las carpetas (CommonPrefixes contiene las "carpetas" en el nivel especificado)
    const foldersInRoot = result.CommonPrefixes?.map(prefixObj => prefixObj.Prefix?.replace(prefix, '').replace('/', '')) || [];

    return new NextResponse(JSON.stringify({ objects: objectsInRoot, folders: foldersInRoot }), { status: 200 });
  } catch (error) {
    console.error("Error fetching objects from S3:", error);
    return new NextResponse("Failed to fetch objects", { status: 500 });
  }
}
