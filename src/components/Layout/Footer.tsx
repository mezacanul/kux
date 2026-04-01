import { cn } from "@/utils/cn";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full flex flex-col items-center gap-[2rem] lg:gap-0 lg:items-start lg:grid lg:grid-cols-3",
        "px-container py-[3rem] pb-[5rem] lg:py-[5rem] bg-neutral-900 text-white"
      )}
    >
      <Logo />

      <div className="flex flex-col items-center lg:items-start gap-2">
        {/* <p>{cdn.location}</p>
        <p>{cdn.country}</p>
        <p>{cdn.phone}</p> */}
      </div>

      <div className="flex flex-col items-center lg:items-start gap-2">
        {/* <p>{cdn.times.title}</p>
        <p>{cdn.times.weekly}</p>
        <p>{cdn.times.weekend}</p> */}
      </div>
    </footer>
  );
}
