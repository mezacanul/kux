import { cn } from "../../utils/cn";

type ButtonType = "outline" | "solid";

type ButtonProps = {
    label: string;
    type?: ButtonType;
    onClick: () => void;
    disabled?: boolean;
};

export default function Button({
    label,
    type = "outline",
    onClick,
    disabled = false,
}: ButtonProps) {
    const classes = cn(
        "text-4-regular py-[1rem] px-[3rem] cursor-pointer transition-all duration-300",
        type === "outline"
            ? "border border-white hover:bg-white hover:text-neutral-950"
            : "bg-neutral-950 text-white border-2 border-transparent hover:bg-white hover:text-neutral-950 hover:border-neutral-950 hover:border-2",
        disabled ? "opacity-50 cursor-not-allowed" : ""
    );
    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}
