import Image from "next/image";
import Navbar from "./components/homepage/Navbar";
import Slider from "./components/homepage/Slider";

export default function Home() {
    return (
        <>
            <Navbar />
            <Slider />
        </>
    );
}
