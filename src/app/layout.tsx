import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Wright Angle Carpentry',
    default: 'Wright Angle Carpentry - Professional Carpentry & Building Services',
  },
  description: "Professional carpentry, renovation & maintenance services in Sussex, Kent and London. Specialists in kitchens, fitted furniture, and property refurbishments.",
  icons: {
    icon: [
      {
        url: "/wa-favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/wa-favicon/icon.svg",
        type: "image/svg+xml",
      }
    ],
    apple: {
      url: "/wa-favicon/apple-touch-icon.png",
    },
  },
  manifest: "/wa-favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
