import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import { Helvetica } from "@/libs/fonts/Helvetica";

const inter = Inter({ subsets: ["latin"] });

// const helvetica = Helvetica({
  // subsets: ["latin"],
  // weight: ['300', '400', '500', '600', '700'],
  // variable: "--helvetica"
// })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Footer />
      </body>
    </html>
  );
}
