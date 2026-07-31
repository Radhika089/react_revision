import React from "react";
import { FaUsers, FaUserCheck, FaBuilding, FaUserClock } from "react-icons/fa";

const statsCards = [
  {
    title: "Total Employees",
    value: "1,248",
    change: "+12%",
    period: "this month",
    icon: FaUsers,
    cardColor: "bg-[#efdae9]",
    iconBg: "bg-[#9e90dd]",
  },
  {
    title: "Present Today",
    value: "1,182",
    change: "+5%",
    period: "today",
    icon: FaUserCheck,
    cardColor: "bg-[#fcd8d0]",
    iconBg: "bg-[#f87a73]",
  },
  {
    title: "Departments",
    value: "18",
    change: "+2",
    period: "this year",
    icon: FaBuilding,
    cardColor: "bg-[#fde9d1]",
    iconBg: "bg-[#fec363]",
  },
  {
    title: "On Leave",
    value: "24",
    change: "-3%",
    period: "today",
    icon: FaUserClock,
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
