import { useResponsive } from "../../hooks/useResponsive";
import { cn } from "../../utils/cn";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Hero() {
    const cdn = useSelector(
        (state: RootState) => state.content.home
    );
    const navigate = useNavigate();
    const cns = {
        container: cn(
            "bg-[url('/images/homepage/hero-bg-mobile@2x.jpg')]",
            "sm:bg-[url('/images/homepage/hero-bg-tablet@2x.jpg')]",
            "lg:bg-[url('/images/homepage/hero-bg-desktop@2x.jpg')]",
            "px-container relative justify-center lg:justify-start",
            "bg-cover bg-center",
            "h-screen w-full flex items-center text-white"
        ),
        backdrop: cn(
            "",
            "w-full h-[50%] top-[30%] sm:top-[33%] left-0 h-full",
            "absolute lg:inset-0 bg-neutral-950 lg:w-[530px] lg:h-full"
        ),
        content: cn(
            "items-center",
            "w-[80%] sm:w-[70%] lg:w-[500px] mt-15 lg:mt-0 flex flex-col gap-[1.5rem] lg:items-start z-10"
        ),
        title: cn("text-1 text-center lg:text-left"),
        description: cn(
            "text-4-regular text-center lg:text-left"
        ),
    };
    return (
        <div className={cns.container}>
            <div className={cns.backdrop} />
            <div className={cns.content}>
                {useResponsive([<Logo />, <Logo />, null])}
                <h1 className={cns.title}>
                    {cdn.hero.title}
                </h1>
                <p className={cns.description}>
                    {cdn.hero.description}
                </p>
                <Button
                    label={cdn.hero.btn}
                    onClick={() => navigate("/booking")}
                />
            </div>
        </div>
    );
}
