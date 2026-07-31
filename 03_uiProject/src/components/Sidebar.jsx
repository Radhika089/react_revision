import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaBuilding,
  FaChartLine,
  FaMoneyCheckAlt,
  FaHome,
  FaCog,
  FaTachometerAlt,
} from "react-icons/fa";

const navLinks = [
  {
    title: "Employees",
    icon: FaUsers,
    link: "/employees",
  },
  {
    title: "Attendance",
    icon: FaCalendarCheck,
    link: "/attendance",
  },
  {
    title: "Departments",
    icon: FaBuilding,
    link: "/departments",
  },
  {
    title: "Performance",
    icon: FaChartLine,
    link: "/performance",
  },
  {
    title: "Payroll Manage",
    icon: FaMoneyCheckAlt,
    link: "/payroll",
  },
  {
    title: " System Settings",
    icon: FaCog,
    link: "/settings",
  },
];
const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 h-full bg-[#9e90dd] rounded-r-4xl p-5 text-center text-white">
        <img
          src="./logo.png"
          alt=""
          className="rounded-full mb-2 object-cover h-52 w-52 p-2"
        />
        <h1 className="text-white font-semibold text-lg">Hi,Mia!👋</h1>

        <div className="mt-5">
          <a
            href="/"
            className="py-3 rounded-3xl flex items-center justify-center font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] gap-5 bg-white text-[#9e90dd] text-lg">
            <FaHome className="text-[#9e90dd] w-6 h-6" />
            Dashboard
          </a>

          {navLinks.map((val) => (
            <a
              href={val.link}
              className="[text-shadow:0_2px_8px_rgba(0,0,0,0.3)] flex items-center justify-center p-4 text-lg gap-4">
              <val.icon className="w-6 h-6" /> {val.title}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
