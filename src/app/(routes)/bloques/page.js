'use client'

import Header from "@/app/components/headerView";
import Sidebar from "@/app/components/sidebarView";
import TotalBox from "@/app/components/stateBox";
import Tableblocks from "@/app/components/tableInfo";
import { CgCheckO } from "react-icons/cg";
import { FcHighPriority } from "react-icons/fc";
import { LuBoxes } from "react-icons/lu";
import Addregister from "@/app/components/addRegister";
import { useEffect, useState } from "react";
import { fetchBlocks } from "@/features/blocksSlice";
import { useDispatch, useSelector } from "react-redux";




const columns = [
  {
    header: "id",
    accessorKey: "id"
  },
  {
    header: "Jornada",
    accessorKey: "jornada"
  },
  {
    header: "Hora Inicio",
    accessorKey: "hora_inicio"
  },
  {
    header: "Hora Fin",
    accessorKey: "hora_fin"
  }
]

export default function Bloques() {
  const [blocks, setBlocks] = useState([]);
  const dispatch = useDispatch();
  const { data, metrics, loading, error} = useSelector(state => state.blocks);
   

  

  useEffect(() => {
    dispatch(fetchBlocks());
    
}, [dispatch]);





const [theme, setTheme] = useState("light")

useEffect(() => {
  if (theme ==  "dark"){
    document.querySelector('html').classList.add('dark')
  }else {
    document.querySelector("html").classList.remove('dark')
  }
}, [theme])

const handleToggle = () => {
  setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
}

console.log(data);

  return (
    <div className="flex dark:bg-BGbody">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">

        <Header />
        <div className="flex justify-center items-center mt-5">
          <h1 className="text-black text-6xl sm:text-base md:text-lg lg:text-3xl xl:text-6xl dark:text-white">
            BLOQUES
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row sm:justify-between w-4/5 mt-10 justify-between items-center">
            <TotalBox numstate={metrics.total} title="Bloques" icon={LuBoxes} />
            <TotalBox numstate={metrics.enabled} title="Habilitados" icon={CgCheckO } />
            <TotalBox numstate={metrics.disabled} title="Deshabilitados" icon={FcHighPriority} />
          </div>
        </div>
        <div>
          <div className="w-[90%] my-6">
            <div className="flex justify-end">
              <Addregister />
            </div>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="w-[80%]">
              <Tableblocks data={data} columns={columns}
                className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
