
import React from "react";
import Image from "next/image";
import { FaUser, FaRegClock, FaRegCommentDots } from "react-icons/fa";

export default function JournalCard({ imglink, imgbut, title }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-[32%]">
            <div className="relative w-full h-72">
                <Image
                    src={imglink}
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                <div className="absolute top-5 left-3">
                    <span className="bg-red-600 text-white text-lg font-semibold px-4 py-2 rounded-full">
                        {imgbut}
                    </span>
                </div>
            </div>

            <div className="p-5 space-y-3">
                <h2 className="font-bold text-xl leading-snug">
                    {title}
                </h2>

                <div className="flex flex-wrap items-center text-gray-500 text-md gap-8">
                    <div className="flex items-center gap-1">
                        <span className="text-gray-700">by</span>
                        <span className="font-semibold text-black">Olivia Thompson</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegClock className="w-4 h-4" />
                        <span>6 months ago</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegCommentDots className="w-4 h-4" />
                        <span>4</span>
                    </div>
                </div>
                <div className="text-sm text-gray-400">5 Min Read</div>
            </div>
        </div>

    );
}
