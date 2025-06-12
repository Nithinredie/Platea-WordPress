
import React from 'react';
import {
    FaUtensils,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPinterest,
} from 'react-icons/fa';
import { FaRegCopyright } from "react-icons/fa6";

const tagOpt = [
    'COMFORT FOOD', 'DAILY FREE', 'DESSERTS', 'GLUTEN-FREE', 'HEALTHY',
    'HIGH-PROTEIN', 'HOLIDAY', 'KID-FRIENDLY', 'LOW-CARB', 'MEAL PREP',
    'MEAT', 'ONE-POT', 'QUICK-MEALS', 'SPICY', 'VEGETERIAN', 'VIDEO-RECIPE'
];

export default function Footer() {
    return (
        <div
            className="w-full text-center px-4 sm:px-6 lg:px-8 pt-10 pb-6 space-y-10"
            style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}
        >
            <div className="bg-gray-200 py-10 px-4 sm:px-6 lg:px-8 space-y-6 rounded-md">
                <h2 className="text-2xl sm:text-3xl font-semibold">Explore Popular Tags</h2>
                <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
                    From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {tagOpt.map((item) => (
                        <button
                            key={item}
                            className="bg-white text-sm sm:text-base px-5 py-2 rounded-full shadow hover:shadow-md hover:bg-red-500 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium">
                {[FaInstagram, FaTwitter, FaYoutube, FaPinterest].map((Icon, i) => (
                    <Icon key={i} className="text-2xl cursor-pointer hover:text-red-500 transition" />
                ))}
                {[
                    'All Recipes', 'Video Recipes', 'A-Z Recipes',
                    'Refund Policy', 'Terms and Conditions', 'Contact Us'
                ].map((text, i) => (
                    <button key={i} className="hover:text-red-500 transition">
                        {text}
                    </button>
                ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto px-2">
                Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavours, master techniques, and bring your passion for cooking to life.
            </p>

            <div className="flex justify-center items-center gap-2 text-xs sm:text-sm text-gray-500">
                <FaRegCopyright />
                <span>2025 Platea. All rights reserved. Designed by Gloria Themes.</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-2xl sm:text-4xl font-bold text-red-600">
                <FaUtensils />
                <span>Platea</span>
            </div>
        </div>
    );
}
