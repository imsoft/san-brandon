"use client";

import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path: string) => path);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <Link href="/" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isCurrentPage = index === pathNames.length - 1;
          return (
            <li key={path}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  href={href}
                  className={`ml-4 text-sm font-medium ${
                    isCurrentPage
                      ? "text-gray-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  aria-current={isCurrentPage ? "page" : undefined}
                >
                  {decodeURIComponent(capitalize(path.replace(/-/g, " ")))}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
