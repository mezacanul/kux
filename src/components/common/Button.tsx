"use client";
import { useRouter } from "next/navigation";
import { cn } from "../../utils/cn";

type ButtonType = "outline" | "solid";

type ButtonProps = {
  label: string;
  type?: ButtonType;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  label,
  type = "outline",
  to = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const router = useRouter();
  const classes = cn(
    "text-4-regular py-[1rem] px-[3rem] cursor-pointer transition-all duration-300",
    type === "outline"
      ? "border border-white hover:bg-white hover:text-neutral-950"
      : "bg-neutral-950 text-white border-2 border-transparent hover:bg-white hover:text-neutral-950 hover:border-neutral-950 hover:border-2",
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  function handleClick() {
    if (to) {
      router.push(to);
    } else if (onClick) {
      onClick();
    }
  }
  return (
    <button
      className={classes}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
