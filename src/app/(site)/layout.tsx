import Link from "next/link";
import "../globals.css";
import Header from "./components/Header";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martin Kobus Home",
  description: "Martin Kobus's Interior Designs",
  icons: {
    icon: "/Logo-Grey-fill.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo-Grey-fill.jpg" />
      <body>
        <Header />
        <main id="bodyPage">{children}</main>
      </body>
    </html>
  );
}
