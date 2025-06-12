'use client'
import React from 'react'
const mainNav = ['Home', 'Recipes', 'Cuisines', 'Categories', 'Blog', 'Features'];

const dropdownOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
];

import { useState } from 'react';
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
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
export default function navbar2() {
      const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="sticky top-0 z-30 text-lg" style={{ fontFamily: '"Fira Sans", ui-sans-serif, system-ui' }}>
            <div className="flex  py-8 bg-white text-2xl shadow">
                <div className="w-10/12 mx-auto md:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <button onClick={() => setMobileMenu(true)} className="md:hidden ">
                            <FiMenu size={24} />
                        </button>
                        <div className="text-red-600 flex font-bold text-4xl  items-center gap-2">
                            <FaUtensils />
                            <span>Platea</span>
                        </div>
                        <div className="hidden md:flex gap-8">
                            {mainNav.map((item) => (
                                <div key={item} className="group relative cursor-pointer font-medium">
                                    <span className="hover:text-red-600 flex items-center gap-1">
                                        {item}
                                        <FiChevronDown className="text-base" />
                                    </span>
                                    <div className="absolute top-full left-0 mt-3 hidden group-hover:block bg-white shadow-lg p-4 z-50 w-52 rounded-lg border-0">
                                        {dropdownOptions.map((option) => (
                                            <div key={option} className="whitespace-nowrap hover:text-red-600 px-2 py-1 cursor-pointer font-normal">
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-5 text-2xl">
                        <FiBookmark className="cursor-pointer hover:text-red-500" />
                        <FiUser className="cursor-pointer hover:text-red-500" />
                        <FiSearch className="cursor-pointer hover:text-red-500" />
                        <button className="ml-4 px-5 py-2 bg-gray-200 hover:bg-red-500 hover:text-white  rounded-lg text-lg font-medium">
                            Add Recipe
                        </button>
                    </div>
                </div>
                {mobileMenu && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white z-30 px-6 py-6 flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="text-red-600 font-bold text-4xl flex items-center gap-2">
                                <FaUtensils />
                                <span>Platea</span>
                            </div>
                            <button onClick={() => setMobileMenu(false)}>
                                <FiX size={28} />
                            </button>
                        </div>
                        <div className="mt-10 px-6 space-y-6 text-3xl font-bold">
                            {mainNav.map((item) => (
                                <div key={item} className="flex gap-5 items-center">
                                    {item} <span>→</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto mb-6 text-sm text-gray-500">
                            © 2025 Platea. All rights reserved.
                        </div>
                        <div className="flex gap-4 text-xl">
                            <FaInstagram className="cursor-pointer hover:text-red-500" />
                            <FaTwitter className="cursor-pointer hover:text-red-500" />
                            <FaYoutube className="cursor-pointer hover:text-red-500" />
                            <FaPinterest className="cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
