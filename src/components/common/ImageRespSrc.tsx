"use client";
import {
  useResponsive,
  ResponsiveValues,
} from "@/hooks/useResponsive";
import Image from "next/image";

export default function ImageRespSrc({
  className,
  srcArray,
}: {
  className: string;
  srcArray: ResponsiveValues<string>;
}) {
  return (
    <Image
      src={useResponsive<string>(srcArray)}
      alt="Image"
      className={className}
      width={1000}
      height={1000}
      loading="eager"
    />
  );
}
