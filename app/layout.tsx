"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import Head from "./head";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pathname = usePathname(); // Navbar conditional rendering for posts layout

  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className="dark:bg-stone-900">
        {/* ThemeProvider creates an error when toggling day/night mode - using suppressHydrationWarning in html element can bypass */}
        <ThemeProvider enableSystem={true} attribute="class">
          {pathname === "/" && <Navbar />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
