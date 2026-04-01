import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const images = [
    "/images/homepage/salmon-mobile@2x.jpg",
    "/images/homepage/beef-mobile@2x.jpg",
    "/images/homepage/chocolate-mobile@2x.jpg",
];

export default function Highlights() {
    const cdn = useSelector(
        (state: RootState) => state.content.home
    );
    return (
        <div className="px-container relative flex flex-col lg:grid lg:grid-cols-2 gap-[5rem] bg-neutral-900 text-white pt-[5rem] sm:pt-[8rem] lg:pt-[15rem] pb-[7rem] sm:pb-[10rem]">
            <div className="flex flex-col items-center w-[90%] mx-auto lg:mx-0 lg:w-full lg:items-start gap-[2rem] pe-0 lg:pe-[4rem] relative">
                <img
                    className="lg:absolute relative lg:-top-20 left-0 w-[100px] object-cover"
                    src="/images/patterns/pattern-divide.svg"
                />
                <h2 className="text-2-bold text-center lg:text-left">
                    {cdn.highlights.title}
                </h2>
                <p className="text-[18px] sm:text-[23px] font-light text-center lg:text-left">
                    {cdn.highlights.description}
                </p>
            </div>

            <div className="flex flex-col">
                {cdn.highlights.items.map((item, index) => (
                    <div
                        key={item.title}
                        className={`flex flex-col sm:flex-row gap-[5rem] items-center relative ${
                            index < 2
                                ? "border-b-2 border-neutral-700 pb-[2rem]"
                                : ""
                        } ${index > 0 ? "mt-[2rem]" : ""}`}
                    >
                        {/* Divider  */}
                        <img
                            className="hidden sm:block absolute top-5 left-22 w-[100px] object-cover z-0"
                            src="/images/patterns/pattern-divide.svg"
                        />
                        {/* Image  */}
                        <img
                            className="w-full sm:w-[150px] object-cover z-10"
                            src={images[index]}
                        />
                        <div className="flex flex-col gap-[1rem] w-[80%] sm:w-full">
                            <h3 className="text-4-bold text-center sm:text-left">
                                {item.title}
                            </h3>
                            <p className="text-6 text-center sm:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
