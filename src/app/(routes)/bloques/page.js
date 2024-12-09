'use client'

import Header from "@/app/components/headerView";
import Sidebar from "@/app/components/sidebarView";
import Statebox from "@/app/components/stateBox";
import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { LuBoxes } from "react-icons/lu";

export default function Bloques() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex justify-center items-center mt-5 ">
          <h1 className="text-black text-6xl">
            BLOQUES
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col sm:flex-row sm:justify-between w-4/5 mt-10 justify-between">
            <Statebox Numstate="3" title="Bloques" icon={LuBoxes} />
            <Statebox Numstate="3" title="Habilitados" icon={FcOk} />
            <Statebox Numstate="0" title="Deshabilitados" icon={FcHighPriority} />
          </div>
        </div>
      </div>
    </div>
  );
}
