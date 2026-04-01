import { fetchCMSData } from "@/lib/cms";
import Hero from "@/components/Home/Hero";
import Presentation from "@/components/Home/Presentation";
import Highlights from "@/components/Home/Highlights";
import Booking from "@/components/Home/Booking";
import Reservations from "@/components/Home/Reservations";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const mainData = await fetchCMSData({
    region: lang,
    resource: "main",
  });
  const homeData = await fetchCMSData({
    region: lang,
    resource: "home",
  });
  return (
    <>
      <Hero data={homeData} title={mainData.title} />
      <Presentation data={homeData.presentation} />
      <Highlights data={homeData.highlights} />
      <Booking data={homeData.booking} />
      <Reservations data={homeData.reservations} />
    </>
  );
}
