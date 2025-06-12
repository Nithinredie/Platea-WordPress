'use client'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
export default function AllRecipe() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
  const fetchData = async () => {
    console.log("Fetching data...");

    try {
      const res = await axios.get('http://localhost:3001/carddata');
      console.log("Fetched:", res.data); 

      setInfo(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


    console.log("INFO:", info);

    return (
        <div className="flex flex-wrap justify-center">
            {info.slice(0, 5).map((item, index) => (
        <FoodCard
          key={index}
          img={item.img}
          rating={item.rating}
          tag={item.tag}
          title={item.title}
          time={item.time}
          countryImg={item.countryImg}
          country={item.country}
          pro={item.pro}
        />
      ))}
    
        </div>
    )
}
