"use client";

import { IoMdPeople,IoMdSettings } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import {
  FaBook,
  FaSchool,
  FaGraduationCap,
  FaTools,
  FaUserEdit,
  FaBookReader,
  FaStopwatch,
  FaCalendarTimes,
  FaCheckSquare,
  FaFileSignature,
  FaMicrochip,
  FaPencilRuler,
  FaScroll,
  FaCalendarAlt,
  FaBusinessTime,
} from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import Link from "next/link";
import tailwindConfig from "../../../tailwind.config";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/features/sidebarSlice";
import { useState } from "react";
import "../globals.css";
import DarkModeToggle from './DarkModeToggle';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const Menus = [
    { title: "Personas", icon: IoMdPeople },
    { title: "Programas", icon: FaBook },
    { title: "Ambientes", icon: FaSchool },
    { title: "Fichas", icon: FaGraduationCap },
    { title: "Horarios", icon: FaCalendarDays },
    { title: "Graficas", icon: IoBarChart },
    {
      title: "Herramientas",
      icon: FaTools,
      hasSubmenu: true,
      submenus: [
        { title: "Roles", link: "/roles", icon: FaUserEdit },
        { title: "Bloques", link: "/bloques", icon: LuBoxes },
        { title: "Tipo de Contrato", link: "/contrato", icon: FaBookReader },
        { title: "Jornadas", link: "/jornadas", icon: FaStopwatch },
        { title: "Festivos", link: "/festivos", icon: FaCalendarTimes },
        { title: "Condiciones", link: "/condiciones", icon: FaCheckSquare },
        { title: "Ofertas", link: "/ofertas", icon: FaFileSignature },
        { title: "Coordinaciones", link: "/coordinaciones", icon: FaSchool },
        { title: "Tipo de Componente", link: "/componente", icon: FaMicrochip },
        { title: "Tipo de Programas", link: "/programas", icon: FaPencilRuler },
        { title: "Trimestres", link: "/trimestres", icon: FaScroll },
        {
          title: "Trimestres del Año",
          link: "/trimestres-ano",
          icon: FaCalendarAlt,
        },
        {
          title: "Condiciones Horas",
          link: "/condiciones-horas",
          icon: FaBusinessTime,
        },
      ],
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        } duration-300 min-h-screen p-5 pt-8  bg-lightGreen relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-darkBlue bg-letters ${
            !isOpen && "rotate-180"
          }`}
          onClick={() => dispatch(toggleSidebar())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <img
            src="/img/logosena_negro.png"
            alt="logoSena"
            className={`cursor-pointer duration-500 w-10 h-10`}
          />
          <h1
            className={`text-white origin-left font-bold text-3xl font-inter 
            duration-300 ${!isOpen && "scale-0"}`}
          >
            Horarios
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-sm flex flex-col items-start gap-x-4 cursor-pointer my-2 rounded-md h-full ${
                menu.hasSubmenu ? "relative" : ""
              }`}
            >
              <div
                className="flex items-center gap-x-4 p-2 rounded-md hover:bg-darkGreen group"
                onClick={() => {
                  if (menu.hasSubmenu) {
                    setIsToolsOpen(!isToolsOpen);
                  }
                }}
              >
                <menu.icon className="text-xl transition-colors group-hover:text-black" />
                <span
                  className={`${
                    !isOpen && "hidden"
                  } origin-left duration-300 group-hover:font-bold`}
                >
                  {menu.title}
                </span>
              </div>
              {menu.hasSubmenu && isToolsOpen && isOpen && (
                <div className="mt-2 rounded-md">
                  <ul className="pl-3 pt-1">
                    {menu.submenus.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-white text-sm flex items-center gap-x-2 p-1 font-inter m-2 transition-colors rounded-md hover:bg-darkGreen group"
                      >
                        <Link
                          href={submenu.link}
                          className="flex items-center gap-x-2 w-full"
                        >
                          <submenu.icon className="text-sm transition-colors group-hover:text-black" />
                          <span className="transition-colors  group-hover:font-bold">
                            {submenu.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex align-bottom mt-auto cursor-pointer">
          <IoMdSettings size={28}/>
          <h3 className="ml-3 font-inter">Configuración</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
