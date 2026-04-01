import { useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../../hooks/useResponsive";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const images = [
    "/images/homepage/family-gathering-desktop@2x.jpg",
    "/images/homepage/special-events-desktop@2x.jpg",
    "/images/homepage/social-events-desktop@2x.jpg",
];

export default function Booking() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cdn = useSelector(
        (state: RootState) => state.content.home
    );
    const navigate = useNavigate();
    return (
        <div className="px-container relative flex flex-col gap-[2rem] sm:gap-[3rem] lg:gap-0 lg:grid lg:grid-cols-2 py-[5rem] lg:py-[10rem] bg-neutral-50">
            <Patterns />
            {/* Content  */}
            <img
                className="w-full h-[400px] lg:h-full object-top lg:object-center object-cover shadow-xl/40 z-10"
                src={images[currentIndex]}
            />
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-[85%] lg:w-full mx-auto lg:mx-0 items-center lg:items-start gap-[2rem] sm:gap-[3rem] lg:gap-[3.5rem] ps-0 lg:ps-[7rem]">
                    {useResponsive([
                        <BookingMenu
                            options={cdn.booking.options}
                            activeIndex={currentIndex}
                            setActiveIndex={setCurrentIndex}
                        />,
                        <BookingMenu
                            options={cdn.booking.options}
                            activeIndex={currentIndex}
                            setActiveIndex={setCurrentIndex}
                        />,
                        null,
                    ])}
                    <div className="flex flex-col items-center lg:items-start gap-[1rem]">
                        <h3 className="text-2-bold">
                            {
                                cdn.booking.options[
                                    currentIndex
                                ].title
                            }
                        </h3>
                        <p className="text-4-regular text-neutral-600 text-center lg:text-left">
                            {
                                cdn.booking.options[
                                    currentIndex
                                ].description
                            }
                        </p>
                    </div>

                    <Button
                        type="solid"
                        label={cdn.booking.btn}
                        onClick={() => navigate("/booking")}
                    />

                    {useResponsive([
                        null,
                        null,
                        <BookingMenu
                            options={cdn.booking.options}
                            activeIndex={currentIndex}
                            setActiveIndex={setCurrentIndex}
                        />,
                    ])}
                </div>
            </div>
        </div>
    );
}

function Patterns() {
    return (
        <>
            {/* Patterns  */}
            <img
                src="/images/patterns/pattern-curve-top-right.svg"
                alt="Booking Background"
                className="hidden sm:block absolute top-0 left-0 h-[30%] lg:h-auto w-[50%] lg:w-[35%] object-fill object-cover"
            />
            <img
                src="/images/patterns/pattern-lines.svg"
                alt="Booking Background"
                className="hidden sm:block absolute top-[5%] lg:top-[12%] left-[7%] w-[20%] lg:w-[10%] object-cover z-20"
            />
        </>
    );
}

function BookingMenu({
    options,
    activeIndex,
    setActiveIndex,
}: {
    options: any;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}) {
    return (
        <div className="flex flex-col items-center lg:items-start sm:flex-row sm:justify-between w-full lg:flex-col gap-[2rem] sm:gap-[1rem] relative">
            {options.map((option: any, index: number) => (
                <div
                    className="relative"
                    key={option.title}
                >
                    <img
                        src="/images/patterns/pattern-divide.svg"
                        className={`${
                            activeIndex === index
                                ? "opacity-100"
                                : "opacity-0"
                        } hidden lg:block absolute top-[0.4rem] -left-[10rem] w-[100px] object-cover transition-all duration-300`}
                    />
                    <p
                        onClick={() =>
                            setActiveIndex(index)
                        }
                        className={`text-6 ${
                            activeIndex === index
                                ? useResponsive([
                                      "border-short",
                                      "border-short",
                                      null,
                                  ])
                                : ""
                        } uppercase transition-all duration-300 cursor-pointer ${
                            activeIndex === index
                                ? "text-neutral-950"
                                : "text-neutral-400"
                        }`}
                    >
                        {option.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
