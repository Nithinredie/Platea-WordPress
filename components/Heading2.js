import React from 'react'

export default function Heading2(props) {
  return (
    <div className='w-full text-center  sm:px-6 lg:px-8 flex flex-col items-center justify-center my-8 space-y-4'style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
        <div className="text-5xl font-semi-bold text-black ">{props.tag}</div>
        <div className="text-normal text-gray-700">{props.content}</div>
    </div>
  )
}
