// src/app/layout.tsx
"use client";

import "./globals.css";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationMenuItem /> {/* panggil di sini */}
        <main>{children}</main>
      </body>
    </html>
  );
}
