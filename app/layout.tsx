import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ShopCute - Discover Products You'll Love",
  description: "Curated collection of delightful products to bring joy, style, and functionality to your everyday life. Beauty, fashion, home, tech, and gifts.",
  keywords: ["shopping", "products", "beauty", "fashion", "home", "tech", "gifts", "affiliate"],
  openGraph: {
    title: "ShopCute - Discover Products You'll Love",
    description: "Curated collection of delightful products to bring joy to your everyday life",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
