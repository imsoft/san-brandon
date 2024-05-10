import { FolderIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export const getFileIcon = (filename: string) => {
  const extension = filename.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "pdf":
      return { icon: DocumentTextIcon, color: "text-red-500" };
    case "doc":
    case "docx":
      return { icon: DocumentTextIcon, color: "text-blue-500" };
    case "xls":
    case "xlsx":
      return { icon: DocumentTextIcon, color: "text-green-500" };
    case "ppt":
    case "pptx":
      return { icon: DocumentTextIcon, color: "text-orange-500" };
    default:
      return { icon: DocumentTextIcon, color: "text-gray-500" };
  }
};

export const folderIcon = { icon: FolderIcon, color: "text-yellow-500" };
