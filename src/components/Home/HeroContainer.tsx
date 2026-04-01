"use client";
import { useResponsive } from "@/hooks/useResponsive";
import { getImageBaseURL } from "@/lib/cms";
import { cn } from "@/utils/cn";

export default function HeroContainer({
  bgImages,
  children,
}: {
  bgImages: any;
  children: React.ReactNode;
}) {
  const { desktop, tablet, mobile } = bgImages;
  const imageURL = useResponsive<string>([
    mobile,
    tablet,
    desktop,
  ]);
  const bgURL = `${getImageBaseURL()}/${imageURL}`;

  return (
    <div
      className={cn(
        "px-container relative justify-center lg:justify-start",
        "bg-cover bg-center",
        "h-screen w-full flex items-center text-white"
      )}
      style={{
        backgroundImage: `url(${bgURL})`,
      }}
    >
      {children}
    </div>
  );
}
