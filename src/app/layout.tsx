import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Ovo } from "next/font/google"; 

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OutfitFont.className} ${OvoFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}