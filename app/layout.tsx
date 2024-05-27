import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar/Navbar";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/src/components/themes/Themes"), {
  ssr: false,
});

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
        <DynamicHeader />
        {children}
      </body>
    </html>
  );
}
