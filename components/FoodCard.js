import Image from "next/image";
import {
  FaStar,
  FaHeart,
  FaBookmark,
  FaClock,
  FaUser,
} from "react-icons/fa";

export default function FoodCard({ img, rating, tag, title, time, countryImg, country, pro }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-white m-6  rounded-xl shadow-md overflow-hidden max-w-xs ">
        <div className="relative w-full h-100">
          <Image
            src={img}
            alt="img"
            width={500}
            height={700}
            className=" rounded-xl w-full "
          />

          <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">{rating}</span>
          </div>

          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-white rounded-full p-2 shadow hover:bg-red-100">
              <FaHeart className="text-red-500" />
            </button>
            <button className="bg-white rounded-full p-2 shadow hover:bg-blue-100">
              <FaBookmark className="text-blue-500" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-red-500 text-lg font-semibold">{tag}</p>
          <h2 className="font-bold text-2xl leading-snug mb-2">
            {title}
          </h2>

          <div className="flex items-center text-gray-500 text-md gap-4 mt-2">
            <div className="flex items-center gap-1">
              <FaClock className="w-4 h-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={countryImg}
                alt="countryimg"
                width={16}
                height={16}
              />
              <span>{country}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUser className="w-4 h-4" />
              <span>{pro}</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
