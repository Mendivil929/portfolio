import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import Navbar from "@/components/navbar";

import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mendivil Portfolio 💻",
  description: "Welcome to my personal portfolio website!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-darkBg text-white overflow-x-hidden`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
