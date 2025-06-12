import React from 'react'

export default function Headings() {

  return (
    <div className='flex flex-wrap m-2 md:m-5 gap-5 md:gap-10  items-center justify-center font-semibold text-xl md:text-3xl text-gray-500' style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
      <button className="cursor-pointer hover:text-black ">Latest Recipes</button>
      <button className="cursor-pointer hover:text-black ">Most Popular Recipes</button>
      <button className="cursor-pointer hover:text-black ">Fastest Recipes</button>
      <button className="cursor-pointer hover:text-black ">Editor's Choice</button>
    </div>
  )
}
