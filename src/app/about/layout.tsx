import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evan Miocevich - About",
  description: "About Page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}