import "@styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youssef Ahmed's Portfolio",
  description:
    "Discover Digital Excellence with Youssef - A seasoned front-end web developer, turning your vision into impactful, seamless, and scalable web solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
