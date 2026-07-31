import React from "react";
import { FaClock, FaFire, FaHeart, FaMusic } from "react-icons/fa";

const statsCards = [
  {
    title: "Songs Played",
    value: "1248",
    change: "+18%",
    period: "this week",
    icon: FaMusic,
    cardColor: "bg-[#efdae9]",
    iconBg: "bg-[#9e90dd]",
  },
  {
    title: "Favorites",
    value: "1248",
    change: "+18%",
    period: "this week",
    icon: FaHeart,
    cardColor: "bg-[#fcd8d0]",
    iconBg: "bg-[#f87a73]",
  },
  {
    title: "Hours Listed",
    value: "1248",
    change: "+18%",
    period: "this week",
    icon: FaClock,
    cardColor: "bg-[#fde9d1]",
    iconBg: "bg-[#fec363]",
  },
  {
    title: "Current Streak",
    value: "1248",
    change: "+18%",
    period: "this week",
    icon: FaFire,
    cardColor: "bg-[#dbdeed]",
    iconBg: "bg-[#88ace6]",
  },
];

const Banner = () => {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-4xl">
        <img src="./banner.png" alt="banner" className="w-full object-cover" />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5">
        {statsCards.map((val) => (
          <div
            className={`${val.cardColor} rounded-3xl flex flex-col items-start p-6`}>
            <span className={`${val.iconBg} p-4 rounded-3xl `}>
              <val.icon className="text-2xl text-white" />
            </span>
            <h2 className="mt-2"> {val.title} </h2>
            <p className="text-2xl mt-3 font-bold">{val.value} </p>
            <p className="text-green-700">
              {val.change} <span className="text-black">{val.period}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
