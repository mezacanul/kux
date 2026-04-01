import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "@/app/globals.css";
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const mainData = await fetchCMSData({
    region: lang,
    resource: "main",
  });
  return (
    <html
      lang={lang}
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
