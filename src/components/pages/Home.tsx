import Hero from "../components/Home/Hero";
import Presentation from "../components/Home/Presentation";
import Booking from "../components/Home/Booking";
import Highlights from "../components/Home/Highlights";
import Reservations from "../components/Home/Reservations";

export default function Home() {
    return (
        <>
            <Hero />
            <Presentation />
            <Highlights />
            <Booking />
            <Reservations />
        </>
    );
}
