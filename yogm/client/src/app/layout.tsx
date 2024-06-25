"use-client";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/nav";
import { Footer } from "@/components/Footer/Footer";
// import { TailwindNavbar } from "../components/navbar/Navbar.tailwind";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogm Hospital",
  description: "Created by kamal kishor rajput",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        {/* <TailwindNavbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
