import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const warGate = localFont({ src: "../public/Wargate-Normal.otf" });

export const metadata: Metadata = {
  title: "Kompeni Hang Nadim",
  description: "Tangkas Berani!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={warGate.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
