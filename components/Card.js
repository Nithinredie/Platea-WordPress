
import React from 'react'

export default function Card({ icon, title, count }) {
  return (
    <div className="w-35 flex flex-col items-center rounded-xl border-1 border-gray-300 p-8 space-y-2  text-center transition hover:bg-gray-100"  style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-md text-gray-500">{count} Recipes</p>
    </div>
  )
}

