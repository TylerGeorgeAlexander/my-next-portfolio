import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/app/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../_components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: clean up duplicate layout semantic html
    // <html lang="en">
    //   <body className={inter.className}>
    //     <div className="min-h-screen">{children}</div>
    //     <Footer />
    //   </body>
    // </html>
    <div lang="en">
      <div className={inter.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}
