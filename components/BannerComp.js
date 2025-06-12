import React from 'react'
import Image from 'next/image'
import {
    FaStar,

} from "react-icons/fa";
export default function BannerComp({ imgsrc, desc1, desc2, clr }) {
    return (
        <div
            className="relative flex justify-center items-center w-full sm:w-10/12 md:w-6/12 lg:w-5/12 h-[500px] md:h-[700px]"
            style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}
        >
            <Image
                src={imgsrc}
                alt="BannerComp"
                fill
                objectFit="cover"
                className="object-cover rounded-xl"
            />
            <div className="absolute top-9 left-3 flex flex-col justify-center space-y-6">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-white px-5 py-2 gap-2 rounded-2xl shadow-md">
                        <FaStar className="text-yellow-300" />
                        <span className="text-black text-lg font-medium">5.0</span>
                    </div>
                    <p className="text-white text-xl">Score from 10.000 ratings</p>
                </div>
                <div className={`max-w-8/12 text-${clr} text-3xl font-bold`}>
                    {desc1}
                </div>
                <div className={`max-w-8/12 text-${clr} text-lg font-normal`}>
                    {desc2}
                </div>
                <span className="inline-block self-start text-white bg-red-600 px-4 py-2 rounded-xl">
                    View Recipes
                </span>
            </div>
        </div>
    )
}
