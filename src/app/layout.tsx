import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nath Dev - Creative Developer & Designer",
  description:
    "Portfolio of Nathaniel Ree Manzano, a creative developer crafting immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
