import { FaChevronDown } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

interface TimePickerProps {
    time: { hour: string; minute: string; period: string };
    setTime: (time: {
        hour: string;
        minute: string;
        period: string;
    }) => void;
    isValid: boolean;
}

function Title({ isValid }: { isValid: boolean }) {
    const cdn = useSelector(
        (state: RootState) => state.content.booking
    );
    return (
        <div>
            <p className="w-full">{cdn.form.time.title}</p>
            {!isValid && (
                <p className="text-red-500 text-sm">
                    {cdn.form.time.invalid}
                </p>
            )}
        </div>
    );
}

export default function TimePicker({
    time,
    setTime,
    isValid,
}: TimePickerProps) {
    const inputClass =
        "p-2 border-b-2 border-black focus:outline-none text-center";
    return (
        <div>
            {useResponsive([
                <Title isValid={isValid} />,
                null,
                null,
            ])}
            <div className="w-full grid gap-4 items-center grid-cols-3 sm:grid-cols-4">
                {useResponsive([
                    null,
                    <Title isValid={isValid} />,
                    <Title isValid={isValid} />,
                ])}
                <input
                    type="text"
                    placeholder="HH"
                    value={time.hour}
                    className={inputClass}
                    onChange={(e) =>
                        setTime({
                            ...time,
                            hour: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="MM"
                    value={time.minute}
                    className={inputClass}
                    onChange={(e) =>
                        setTime({
                            ...time,
                            minute: e.target.value,
                        })
                    }
                />
                <PeriodPicker
                    period={time.period}
                    setTime={setTime}
                />
                {/* <input
                    type="text"
                    // placeholder="YYYY"
                    value={"AM"}
                    className={inputClass}
                    onChange={(e) =>
                        setTime({
                            ...time,
                            period: e.target.value,
                        })
                    }
                /> */}
            </div>
        </div>
    );
}

interface PeriodPickerProps {
    period: string;
    setTime: (time: {
        hour: string;
        minute: string;
        period: string;
    }) => void;
}
function PeriodPicker({
    period,
    setTime,
}: PeriodPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const options = ["AM", "PM"];
    const cns = {
        container:
            "p-2 border-b-2 cursor-pointer flex items-center justify-center gap-4 border-black text-center",
    };
    return (
        <div className="relative">
            <div
                className={cns.container}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{period}</span>
                <span>
                    <FaChevronDown />
                </span>
            </div>
            {isOpen && (
                <Options
                    options={options}
                    setIsOpen={setIsOpen}
                    setTime={setTime}
                />
            )}
        </div>
    );
}

function Options({
    options,
    setIsOpen,
    setTime,
}: {
    options: string[];
    setIsOpen: (isOpen: boolean) => void;
    setTime: (prev: any) => void;
}) {
    const handleClick = (option: string) => {
        setTime((prev: any) => {
            return {
                ...prev,
                period: option,
            };
        });
        setIsOpen(false);
    };
    return (
        <div className="absolute flex items-center justify-center flex-col gap-2 shadow-xl top-[120%] left-0 w-full bg-white">
            {options.map((option) => (
                <span
                    className="cursor-pointer w-full text-center hover:bg-neutral-100 p-2 transition-all duration-300"
                    key={option}
                    onClick={() => handleClick(option)}
                >
                    {option}
                </span>
            ))}
        </div>
    );
}
