import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youssef Ahmed",
  description:
    "Discover Digital Excellence with Youssef - A seasoned front-end web developer, turning your vision into impactful, seamless and scalable web solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
