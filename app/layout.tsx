import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { cn } from "@/lib/utils";

import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Aifia Med Amine - Software Engineer",
  description: "My Portfolio",
  icons: "9496034.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}><Providers>
        <NavbarComponent />
        {children}
        <Footer />
      </Providers></body>
    </html>
  );
}
