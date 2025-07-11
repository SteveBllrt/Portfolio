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
    <html lang="en" className="scroll-smooth">
        <head>
        <link rel="icon" href="/fav-icon.png" /> 
      </head>
      <body className={`${OutfitFont.className} ${OvoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}