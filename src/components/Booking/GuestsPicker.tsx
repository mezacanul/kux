import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function GuestsPicker({
    guests,
    setFormData,
}: {
    guests: number;
    setFormData: (data: any) => void;
}) {
    const cdn = useSelector(
        (state: RootState) => state.content.booking
    );
    const handleDecrement = () => {
        if (guests > 1) {
            setFormData((prev: any) => ({
                ...prev,
                guests: prev.guests - 1,
            }));
        }
    };
    const handleIncrement = () => {
        if (guests < 25) {
            setFormData((prev: any) => ({
                ...prev,
                guests: prev.guests + 1,
            }));
        }
    };
    return (
        <div>
            <p className="w-full mb-2">{cdn.form.guests}</p>
            <div className="w-full flex items-center justify-between pb-3 border-b-2 border-black px-6">
                <span
                    className="cursor-pointer text-xl"
                    onClick={handleDecrement}
                >
                    {"-"}
                </span>
                <span className="font-bold">{guests}</span>
                <span
                    className="cursor-pointer text-xl"
                    onClick={handleIncrement}
                >
                    {"+"}
                </span>
            </div>
        </div>
    );
}
