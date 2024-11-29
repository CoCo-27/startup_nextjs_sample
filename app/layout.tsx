import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuEx",
  description: "Crypto Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "flex min-h-screen flex-col overflow-x-hidden bg-[#000]",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
