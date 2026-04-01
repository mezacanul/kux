import Button from "../common/Button";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Reservations() {
    const cdn = useSelector(
        (state: RootState) => state.content.home
    );
    const bgClass =
        "bg-[url('/images/homepage/ready-bg-desktop@2x.jpg')]";
    const navigate = useNavigate();
    return (
        <div
            className={cn(
                bgClass,
                "px-container bg-cover bg-center text-white py-[5rem] flex flex-col gap-[2rem] lg:gap-0 lg:flex-row items-center justify-between"
            )}
        >
            <h2 className="text-2-bold text-center lg:text-left">
                {cdn.reservations.title}
            </h2>
            <Button
                label={cdn.reservations.btn}
                onClick={() => navigate("/booking")}
            />
        </div>
    );
}
