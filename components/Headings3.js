import React from 'react'

export default function Headings3() {
    return (
        <div
            className="w-10/12 mx-auto flex flex-wrap justify-center items-center mt-12 md:gap-10 gap-4 text-lg font-semibold"
            style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}
        >
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500 ">All Recipes</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500 ">Appetizers</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500 ">Main Dishes</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500  ">Desserts</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500  ">Drinks</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500  ">Healthy</button>
            <button className="cursor-pointer border-1 border-gray-200 px-6 py-4 rounded-full hover:text-white  hover:bg-red-500  ">Other Recipes</button>
        </div>
    )
}
