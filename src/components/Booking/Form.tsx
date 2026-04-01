import { useState } from "react";
import Button from "../common/Button";
import { cn } from "../../utils/cn";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import GuestsPicker from "./GuestsPicker";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Form() {
    const cdn = useSelector(
        (state: RootState) => state.content.booking
    );
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: 1,
    });
    const [date, setDate] = useState({
        month: "",
        day: "",
    });
    const [time, setTime] = useState({
        hour: "",
        minute: "",
        period: "AM",
    });
    const [isValid, setIsValid] = useState({
        name: true,
        email: true,
        date: true,
        time: true,
    });

    function handleSubmit() {
        setIsLoading(true);
        const { passes, newErrorObj } = isValidForm();
        setTimeout(() => {
            setIsLoading(false);
            if (!passes) {
                setIsValid(newErrorObj);
                return;
            } else {
                setSuccess(true);
            }
        }, 1000);
    }
    function isValidForm() {
        let passes = true;
        const newErrorObj = {
            name: true,
            email: true,
            date: true,
            time: true,
        };
        const { name, email } = formData;
        const nameLength = name.length;
        if (nameLength < 3) {
            passes = false;
            newErrorObj.name = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid =
            email.match(emailRegex) !== null;
        if (!isEmailValid) {
            passes = false;
            newErrorObj.email = false;
        }
        const isValidDate = checkIsValidDate(
            date.day,
            date.month,
            "2026"
        );
        if (!isValidDate) {
            passes = false;
            newErrorObj.date = false;
        }
        const isValidTime = checkIsValidTime(
            time.hour,
            time.minute
        );
        if (!isValidTime) {
            passes = false;
            newErrorObj.time = false;
        }
        return { passes, newErrorObj };
    }
    return (
        <div
            className={cn(
                "w-full lg:w-[50%] mt-0 lg:mt-[30vh] flex flex-col gap-[1.5rem]",
                "bg-neutral-50 z-10 shadow-2xl/50 px-8 py-8 text-6 text-black",
                success ? "py-[20vh] lg:py-8 h-[50vh]" : ""
            )}
        >
            {!success && (
                <>
                    <div className="flex flex-col gap-2">
                        <Input
                            placeholder={
                                cdn.form.name.placeholder
                            }
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                        {!isValid.name && (
                            <p className="text-red-500 text-sm">
                                {cdn.form.name.invalid}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            placeholder={
                                cdn.form.email.placeholder
                            }
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        {!isValid.email && (
                            <p className="text-red-500 text-sm">
                                {cdn.form.email.invalid}
                            </p>
                        )}
                    </div>
                    <DatePicker
                        date={date}
                        setDate={setDate}
                        isValid={isValid.date}
                    />
                    <TimePicker
                        time={time}
                        setTime={setTime}
                        isValid={isValid.time}
                    />
                    <GuestsPicker
                        guests={formData.guests}
                        setFormData={setFormData}
                    />
                </>
            )}

            {!isLoading && !success && (
                <Button
                    label={cdn.btn}
                    type="solid"
                    onClick={handleSubmit}
                    // disabled={true}
                />
            )}
            {isLoading && !success && (
                <div className="flex items-center justify-center py-2">
                    <span className="text-xl">
                        <ImSpinner8 className="animate-spin" />
                    </span>
                </div>
            )}
            {success && (
                <div className="flex flex-col items-center gap-3 justify-center pt-2 h-full">
                    <p className="text-green-600 text-2-light text-center">
                        {cdn.success.title}
                    </p>
                    <p className="text-center w-[70%]">
                        {cdn.success.description}
                    </p>
                </div>
            )}
        </div>
    );
}

function Input({
    placeholder,
    value,
    onChange,
}: {
    placeholder: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 border-b-2 border-black  focus:outline-none"
        />
    );
}

function checkIsValidDate(
    d: string,
    m: string,
    y: string
): boolean {
    const day = Number(d);
    const month = Number(m) - 1;
    const year = Number(y);
    const dt = new Date(year, month, day);

    return (
        dt.getFullYear() === year &&
        dt.getMonth() === month &&
        dt.getDate() === day
    );
}

function checkIsValidTime(h: string, m: string): boolean {
    const hour = Number(h);
    const minute = Number(m);
    return (
        hour >= 1 &&
        hour <= 12 &&
        minute >= 0 &&
        minute <= 59
    );
}
