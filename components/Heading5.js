import React from 'react'

export default function Heading5() {
    return (
        <div className='w-10/12 flex flex-row mx-auto my-10 md:my-12 items-center justify-center gap-x-6   ' style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
            <div className="flex-1 h-px bg-gray-300" />
            <button className="cursor-pointer border-1 border-gray-300 px-8 py-3 text-2xl font-semibold rounded-xl hover:text-white  hover:bg-red-500 ">Explore all Videos</button>
            <div className="flex-1 h-px bg-gray-300" />
        </div>
    )
}
