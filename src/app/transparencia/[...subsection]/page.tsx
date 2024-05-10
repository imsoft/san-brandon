"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { folderIcon, getFileIcon } from "@/app/utils";
import { Breadcrumb } from "@/components/ui/transparency";

interface Item {
  Key: string;
  LastModified?: string;
}

const SubsectionPage = () => {
  const subsection = useParams().subsection;
  const [data, setData] = useState<{ objects: Item[], folders: string[] } | null>(null);

  useEffect(() => {
    if (subsection) {
      const pathString = Array.isArray(subsection) ? subsection.join('/') : subsection;
      fetch(`/api/transparency-documents?prefix=${pathString}/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [subsection]);

  const buildLink = (name: string) => {
    const basePath = Array.isArray(subsection) ? subsection.join('/') : subsection;
    return `/transparencia/${basePath}/${name}`;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true,
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const currentPage = subsection ? (Array.isArray(subsection) ? decodeURIComponent(subsection[subsection.length - 1]) : decodeURIComponent(subsection)) : "Raíz";

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Breadcrumb />
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-neutral-600">
            San Brandon, Jalisco
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Navegando en {currentPage}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Aquí va el contenido del directorio donde se explica el tema de transparencia.
          </p>
        </div>
      </div>
      <ul role="list" className="divide-y divide-gray-100 bg-white">  {/* Asegúrate de que el fondo sea blanco */}
        {data ? (
          <>
            {data.folders.map((folder, index) => (
              <li key={index} className="relative py-5 hover:bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto flex max-w-6xl justify-between gap-x-6">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                        <folderIcon.icon className={`${folderIcon.color} h-6 w-6`} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          <Link href={buildLink(folder)}>
                            <span className="absolute inset-x-0 -top-px bottom-0" />
                            {folder}
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                      <ChevronRightIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {data.objects.map((item, index) => {
              const { icon: FileIcon, color } = getFileIcon(item.Key);
              return (
                <li key={index} className="relative py-5 hover:bg-gray-50">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-6xl justify-between gap-x-6">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                          <FileIcon className={`${color} h-6 w-6`} aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            <a
                              href={`https://${process.env.NEXT_PUBLIC_BUCKET}.sfo3.cdn.digitaloceanspaces.com/${item.Key}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {item.Key.split('/').pop()} {/* Mostrar solo el nombre del archivo */}
                            </a>
                          </p>
                          {item.LastModified && (
                            <p className="mt-1 flex text-xs leading-5 text-gray-500">
                              Última actualización: {formatDate(item.LastModified)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <ChevronRightIcon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
      </ul>
    </div>
  );
};

export default SubsectionPage;
