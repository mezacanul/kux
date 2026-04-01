import Hero from "@/components/Home/Hero";
import Presentation from "@/components/Home/Presentation";
import { fetchCMSData } from "@/lib/cms";

export default async function Home() {
  const mainData = await fetchCMSData({
    region: "es",
    resource: "main",
  });
  const homeData = await fetchCMSData({
    region: "es",
    resource: "home",
  });
  return (
    <>
      <Hero data={homeData} title={mainData.title} />
      <Presentation data={homeData} />
      {/* <Highlights /> */}
      {/* <Booking /> */}
      {/* <Reservations /> */}
    </>
  );
}
