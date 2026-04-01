import { useSelector } from "react-redux";
import { useResponsive } from "../../hooks/useResponsive";
import type { RootState } from "../../store";
interface DatePickerProps {
    date: { month: string; day: string };
    setDate: (date: { month: string; day: string }) => void;
    isValid: boolean;
}

function Title({ isValid }: { isValid: boolean }) {
    const cdn = useSelector(
        (state: RootState) => state.content.booking
    );
    return (
        <div>
            <p className="w-full ">{cdn.form.date.title}</p>
            {!isValid && (
                <p className="text-red-500 text-sm">
                    {cdn.form.date.invalid}
                </p>
            )}
        </div>
    );
}

export default function DatePicker({
    date,
    setDate,
    isValid,
}: DatePickerProps) {
    function handleDayChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setDate({
            ...date,
            day: e.target.value,
        });
    }
    function handleMonthChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setDate({
            ...date,
            month: e.target.value,
        });
    }

    const inputClass =
        "p-2 border-b-2 border-black  focus:outline-none text-center";
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
                    placeholder="MM"
                    value={date.month}
                    onChange={handleMonthChange}
                    className={inputClass}
                />
                <input
                    type="text"
                    placeholder="DD"
                    value={date.day}
                    onChange={handleDayChange}
                    className={inputClass}
                />
                <input
                    type="text"
                    // placeholder="YYYY"
                    readOnly
                    value={"2026"}
                    className={inputClass}
                />
            </div>
        </div>
    );
}
