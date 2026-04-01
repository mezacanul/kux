import { cn } from "@/utils/cn";
import Button from "@/components/common/Button";
import Logo from "@/components/Logo";
import HeroContainer from "./HeroContainer";

export default function Hero({
  data,
  title,
}: {
  data: any;
  title: string;
}) {
  console.log(data);

  const cns = {
    backdrop: cn(
      "",
      "w-full h-[50%] top-[30%] sm:top-[33%] left-0 h-full",
      "absolute lg:inset-0 bg-neutral-950 lg:w-[530px] lg:h-full"
    ),
    content: cn(
      "items-center relative",
      "w-[80%] sm:w-[70%] lg:w-[500px] mt-15 lg:mt-0 flex flex-col gap-[1.5rem] lg:items-start z-10"
    ),
    title: cn("text-1 text-center lg:text-left"),
    description: cn(
      "text-4-regular text-center lg:text-left"
    ),
  };
  return (
    <HeroContainer bgImages={data.hero.bg_images}>
      <div className={cns.backdrop} />
      <div className={cns.content}>
        <header className="block lg:hidden">
          <Logo title={title} />
        </header>

        <h1 className={cns.title}>{data.hero.title}</h1>
        <p className={cns.description}>
          {data.hero.description}
        </p>
        <Button label={data.hero.btn} to="/booking" />
      </div>
    </HeroContainer>
  );
}
