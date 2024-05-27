import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar/Navbar";
import Themes from "@/src/components/themes/Themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atif Razzaq Portfolio",
  description: "Brief introduction of my career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Themes />
        {children}
      </body>
    </html>
  );
}
