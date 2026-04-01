import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import { useResponsive } from "../hooks/useResponsive";
import { cn } from "../utils/cn";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Layout() {
    return (
        <div className="relative">
            {useResponsive([null, null, <Header />])}
            <Outlet />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className="absolute top-0 left-0 w-full px-container py-[3rem] z-10">
            <Logo link={true} />
        </div>
    );
}

function Footer() {
    const cdn = useSelector(
        (state: RootState) => state.content.footer
    );
    return (
        <div
            className={cn(
                "w-full flex flex-col items-center gap-[2rem] lg:gap-0 lg:items-start lg:grid lg:grid-cols-3",
                "px-container py-[3rem] pb-[5rem] lg:py-[5rem] bg-neutral-900 text-white"
            )}
        >
            <Logo />

            <div className="flex flex-col items-center lg:items-start gap-2">
                <p>{cdn.location}</p>
                <p>{cdn.country}</p>
                <p>{cdn.phone}</p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
                <p>{cdn.times.title}</p>
                <p>{cdn.times.weekly}</p>
                <p>{cdn.times.weekend}</p>
            </div>
        </div>
    );
}
