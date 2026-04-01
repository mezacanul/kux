import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { fetchCMSData } from "@/lib/cms";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K'UX",
  description:
    "Comida tradicional yucateca, con un toque moderno e innovador",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainData = await fetchCMSData({
    region: "es",
    resource: "main",
  });
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="relative">
        <Header cms={mainData} />
        {children}
        <Footer cms={mainData} />
      </body>
    </html>
  );
}
