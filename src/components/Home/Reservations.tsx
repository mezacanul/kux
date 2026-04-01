import Button from "../common/Button";
import { cn } from "../../utils/cn";

export default function Reservations({
  data,
}: {
  data: any;
}) {
  const bgClass =
    "bg-[url('/images/homepage/ready-bg-desktop@2x.jpg')]";
  return (
    <div
      className={cn(
        bgClass,
        "px-container bg-cover bg-center text-white py-[5rem] flex flex-col gap-[2rem] lg:gap-0 lg:flex-row items-center justify-between"
      )}
    >
      <h2 className="text-2-bold text-center lg:text-left">
        {data.title}
      </h2>
      <Button label={data.btn} to="/booking" />
    </div>
  );
}
