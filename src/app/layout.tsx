import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import AnimBackground from "../components/animBackground";

export const metadata: Metadata = {
  title: "Evan Miocevich - Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimBackground/>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
