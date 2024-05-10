import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/shared/Header";
import { Footer } from "@/components/ui/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "San Brandon",
  description: "Página web de San Brandon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
