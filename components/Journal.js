import React from 'react'
import JournalCard from './JournalCard'

export default function Journal() {
    const JourData=[
        {imglink:"/images/journal1.jpg",imgbut:"HEALTH",title:"Power Up Your Mornings: 5 Quick and Healthy Breakfast Ideas"},
        {imglink:"/images/journal2.jpg",imgbut:"SPOTLIGHTS",title:"Master Knife Skills for Effortless Cooking Prep"},
        {imglink:"/images/journal3.jpg",imgbut:"COLLECTIONS",title:" Savor Every Bite: A Celebration of Pizza Moments"},
    ]
  return (
<div className="flex flex-wrap justify-between gap-5 w-9/12 mx-auto">        {
            JourData.map((info)=>(
                <JournalCard key={info.imgbut} {...info}/>

        ))
        }
    </div>
  )
}
