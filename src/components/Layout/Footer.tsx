import { cn } from "@/utils/cn";
import Logo from "@/components/Logo";

export default function Footer({ cms }: { cms: any }) {
  const { title, footer } = cms;
  return (
    <footer
      className={cn(
        "w-full flex flex-col items-center gap-[2rem] lg:gap-0 lg:items-start lg:grid lg:grid-cols-3",
        "px-container py-[3rem] pb-[5rem] lg:py-[5rem] bg-neutral-900 text-white"
      )}
    >
      <Logo title={title} />

      <div className="flex flex-col items-center lg:items-start gap-2">
        <p>{footer.location}</p>
        <p>{footer.country}</p>
        <p>{footer.phone}</p>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-2">
        <p>{footer.times.title}</p>
        <p>{footer.times.weekly}</p>
        <p>{footer.times.weekend}</p>
      </div>
    </footer>
  );
}
