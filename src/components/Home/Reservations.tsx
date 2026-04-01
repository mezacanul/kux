import Button from "@/components/common/Button";
import { cn } from "@/utils/cn";
import { getImageBaseURL } from "@/lib/cms";

export default function Reservations({
  data,
}: {
  data: any;
}) {
  const baseURL = getImageBaseURL();
  return (
    <div
      className={cn(
        "px-container bg-cover bg-center text-white py-[5rem] flex flex-col gap-[2rem] lg:gap-0 lg:flex-row items-center justify-between"
      )}
      style={{
        backgroundImage: `url(${baseURL}/${data.bg_image})`,
      }}
    >
      <h2 className="text-2-bold text-center lg:text-left">
        {data.title}
      </h2>
      <Button label={data.btn} to="/booking" />
    </div>
  );
}
