import React from 'react'
import BannerComp from './BannerComp'

export default function BannerComponent() {
    const data = [
        {
            imgsrc: "/images/bannercomp.webp",
            desc1: "Learn from the best and create culinary magic at home.",
            desc2: "Get inspired by expert tips and techniques to perfect your skills. Explore recipes that help you master new dishes, adding confidence and creativity to your home cooking experience.",
            clr: "white"
        },
        {
            imgsrc: "/images/bannercomp4.jpg",
            desc1: "Add flavor, flair, and a touch of creativity to your meals.",
            desc2: "Elevate your dishes with bold flavors and creative twists. From vibrant ingredients to expert techniques, discover recipes that transform your everyday cooking into something extraordinary.",
            clr: "white"
        }
    ]
    return (

        <div className="flex flex-wrap gap-6 justify-center items-stretch w-10/12 max-w-screen-xl mx-auto my-10">
            {data.map((info) => (
                <BannerComp key={info.imgsrc} {...info} />
            ))}
        </div>

    )
}
