import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import FloatingActions from "@/components/ui/floatmessage";
import Footer from "@/components/ui/footer";
import favicon from "./favicon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackNova IN",
  description:
    "Pioneering the future of digital solutions with AI-driven development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
