import { IoMdPeople, IoMdSettings } from "react-icons/io";
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
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/features/sidebarSlice";
import { useState } from "react";
import "../globals.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const Menus = [
    { title: "Personas", link: "/personas", icon: IoMdPeople },
    { title: "Programas", link: "/programas", icon: FaBook },
    { title: "Ambientes", link: "/ambientes", icon: FaSchool },
    { title: "Fichas", link: "/fichas", icon: FaGraduationCap },
    { title: "Horarios", link: "/horarios", icon: FaCalendarDays },
    { title: "Graficas", link: "/graficas", icon: IoBarChart },
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
        { title: "Trimestres del Año", link: "/trimestres-anio", icon: FaCalendarAlt },
        { title: "Condiciones Horas", link: "/condicionesHoras", icon: FaBusinessTime },
      ],
    },
  ];

  return (

    <div className="grid grid-flow-row">
      <div className="flex relative">
        <div
          className={`${isOpen ? "w-screen md:w-60" : "w-20"
            } duration-300 min-h-screen p-5 pt-8 bg-lightGreen flex flex-col justify-between `}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-darkBlue bg-letters ${!isOpen && "rotate-180"
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
              <Link href="/">
                <img
                  src="/img/logosena_negro.png"
                  alt="logoSena"
                  className="cursor-pointer w-10 h-10 invert-item"
                />
              </Link>
              {isOpen && (
                <h1 className="text-white origin-left font-bold text-3xl font-inter duration-500">
                  Horarios
                </h1>
              )}
            </div>

            <ul className="pt-6">
              {Menus.map((menu, index) => (
                <li
                  key={menu.title}
                  className={`text-white text-sm flex flex-col items-start gap-x-4 cursor-pointer my-2 rounded-md h-full ${menu.hasSubmenu ? "relative" : ""
                    }`}
                >
                  <Link href={menu.link || "#"}>
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
                        className={`${!isOpen && "hidden"
                          } origin-left duration-300 group-hover:font-bold`}
                      >
                        {menu.title}
                      </span>
                    </div>
                  </Link>

                  {menu.hasSubmenu && isToolsOpen && isOpen && (
                    <div className="mt-2 rounded-md">
                      <ul className="pl-3 pt-1">
                        {menu.submenus.map((submenu, subIndex) => (
                          <li
                            key={submenu.title}
                            className="text-white text-sm flex items-center gap-x-2 p-1 font-inter m-2 transition-colors rounded-md hover:bg-darkGreen group"
                          >
                            {submenu.link ? (
                              <Link
                                href={submenu.link}
                                className="flex items-center gap-x-2 w-full"
                              >
                                <submenu.icon className="text-sm transition-colors group-hover:text-black" />
                                <span className="transition-colors group-hover:font-bold">
                                  {submenu.title}
                                </span>
                              </Link>
                            ) : (
                              <span>{submenu.title}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer p-2 rounded-md hover:bg-darkGreen group">
            <IoMdSettings size={24} className="transition-colors group-hover:text-black" />
            <h3 className={`text-white font-inter ${!isOpen && "hidden"} origin-left duration-300 group-hover:font-bold`}>
              Configuración
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
