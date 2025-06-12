'use client'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FoodVideoCard from './FoodVideoCard'
export default function AllRecipeV() {
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
    <div className=" relative w-10/12  mx-auto flex flex-wrap md:mt-6  items-center justify-center   ">
      {info.map((item, index) => (
        <FoodVideoCard
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

