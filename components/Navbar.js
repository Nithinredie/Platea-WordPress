'use client';

import { useState, useEffect } from 'react';
import {
  FiMenu,
  FiX,
  FiBookmark,
  FiUser,
  FiSearch,
  FiChevronDown,
} from 'react-icons/fi';

import {
  FaUtensils,
  FaBreadSlice,
  FaCocktail,
  FaEgg,
  FaIceCream,
  FaHeartbeat,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';

const topCategories = [
  { name: 'Appetizers', icon: <FaUtensils /> },
  { name: 'Breads', icon: <FaBreadSlice /> },
  { name: 'Juices', icon: <FaCocktail /> },
  { name: 'Breakfasts', icon: <FaEgg /> },
  { name: 'Desserts', icon: <FaIceCream /> },
  { name: 'Healthy', icon: <FaHeartbeat /> },
];


const mainNav = ['Home', 'Recipes', 'Cuisines', 'Categories', 'Blog', 'Features'];

const dropdownOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
];

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <header className="text-lg" style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
      <div className=" hidden md:flex  bg-white text-base ">
        <div className="w-10/12 mx-auto border-b border-gray-400 py-5 px-6 flex items-center gap-110 justify-between">
          <div className="relative flex flex-row items-center gap-5 ">
            <div className='flex flex-row gap-4'>
              <div className="relative " onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                <button className="flex items-center gap-2 font-normal hover:text-red-500">
                  <FiMenu className="text-xl" />
                  Recipe Categories
                </button>
                {showCategories &&
                  <div className="absolute left-0 top-6 mt-2 bg-white shadow-md p-4 flex flex-col gap-3 z-50 text-base rounded-lg border-0">
                    {topCategories.map((cat) => (
                      <div key={cat.name} className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
                        {cat.icon}
                        <span>{cat.name}</span>
                      </div>
                    ))}
                  </div>
                }
              </div>
              <span className='border-1 border-gray-300 rounded-lg pl-2 pr-2'>1.6k</span>
            </div>
            <button className="hover:text-red-500 text-gray-400">Video Recipes</button>
            <button className="hover:text-red-500 text-gray-400">A-Z Recipes</button>
            <button className="hover:text-red-500 text-gray-400">This Week’s Recipes</button>
            <button className="hover:text-red-500 text-gray-400">Contact Us</button>
          </div>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaTwitter className="cursor-pointer hover:text-red-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
            <FaPinterest className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
