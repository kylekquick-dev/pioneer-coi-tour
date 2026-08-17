import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pioneer Century of Innovation Crop Tour",
  description: "A mobile virtual crop tour for Pioneer Seeds."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
