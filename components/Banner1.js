

import { FaSearch, FaUtensils } from 'react-icons/fa';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div
      className="relative w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[80vh] flex items-center justify-center bg-white overflow-hidden font-sans"
    >
      <Image
        src="/images/hero.jpg"
        alt="Delicious food banner"
        fill
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-4xl"
        priority
      />
      <div className="absolute inset-0 sm:bg-white/50 md:bg-white/10 z-10"></div>
      <div className="relative z-10 w-full max-w-7xl">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900">
            You don't know how to make the dish you have in mind?
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700">
            Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.
          </p>

          <div className="space-y-2">
            <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3 h-16 sm:h-20 w-full max-w-4xl">
              <FaUtensils className="text-red-600 text-xl sm:text-2xl mr-3" />
              <input
                type="text"
                placeholder="Find what you want to cook today"
                className="flex-grow bg-transparent outline-none text-gray-800 text-sm sm:text-base placeholder-gray-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl transition-colors duration-200">
                <FaSearch />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-500">
              Type a keyword and discover recipes that turn your cravings into delicious reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

