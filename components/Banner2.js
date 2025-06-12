import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function HeroBanner() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <section className="relative w-full max-w-10/12 h-[600px] md:h-[700px]">
                <Image
                    src="/images/banner2.jpg"
                    alt="Banner Background"
                    fill
                    priority
                    className="object-cover w-full h-full rounded-xl"
                />

                <div className="absolute inset-0 bg-white/70 md:bg-white/10 rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-20">
                        <div className="max-w-3xl text-white text-center md:text-left space-y-5">
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <span className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    5.0
                                </span>
                                <span className="text-xl text-black">score from 10,000 rating</span>
                            </div>
                            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight">
                                Discover fresh and easy recipes to inspire your meals every day.
                            </h1>

                            <p className="text-base md:text-xl text-black">
                                Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!
                            </p>

                            <button className="bg-white text-black text-xl font-semibold px-5 py-3 rounded-lg shadow hover:bg-red-500">
                                View Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}