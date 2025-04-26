// src/app/layout.tsx
"use client";

import "./globals.css";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationMenuItem /> {/* panggil di sini */}
        <Header />
        <Hero />
        <main>{children}</main>
      </body>
    </html>
  );
}
