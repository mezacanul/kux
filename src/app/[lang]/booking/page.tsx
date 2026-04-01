import Logo from "@/components/Logo";
import { cn } from "@/utils/cn";
import { fetchCMSData } from "@/lib/cms";
import Form from "@/components/Booking/Form";

export default async function BookingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const mainData = await fetchCMSData({
    region: lang,
    resource: "main",
  });
  const bookingData = await fetchCMSData({
    region: lang,
    resource: "booking",
  });
  const bgClass =
    "bg-[url('/images/booking/hero-bg-desktop@2x.jpg')]";
  return (
    <div
      className={cn(
        // bgClass,
        "h-[100vh] sm:h-[100vh] lg:h-screen w-full bg-cover bg-center"
      )}
    >
      <div
        className={cn(
          "flex lg:flex-row flex-col justify-between items-center",
          "w-full h-[60vh] bg-cover bg-center px-container text-white",
          bgClass,
          "gap-[3rem] sm:gap-[4rem] lg:gap-0 py-[5rem] lg:py-0"
        )}
      >
        <div className="w-full lg:w-[45%] flex flex-col gap-5 items-center lg:items-start">
          <header className="block lg:hidden">
            <Logo link={true} title={mainData.title} />
          </header>

          <h1 className="text-1 text-center lg:text-left">
            {bookingData.title}
          </h1>
          <p className="text-4-regular text-light text-center lg:text-left">
            {bookingData.description}
          </p>
        </div>

        <Form data={bookingData} />
      </div>
      <div className="bg-neutral-50 relative h-[40vh]">
        <img
          src="/images/patterns/pattern-lines.svg"
          alt="Booking Table"
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="/images/patterns/pattern-curve-bottom-right.svg"
          alt="Booking Background"
          className="hidden lg:block absolute top-0 left-0 h-full w-[65%] object-fill"
        />
      </div>
    </div>
  );
}
