'use client'

import Header from "@/app/components/headerView";
import Sidebar from "@/app/components/sidebarView";
import Statebox from "@/app/components/stateBox";
import Tableblocks from "@/app/components/tableInfo";
import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { LuBoxes } from "react-icons/lu";
import data from '@/utils/MOCK_DATA'
import Addregister from "@/app/components/addRegister";
import { useEffect, useState } from "react";
import { getBlocks } from "@/service/bloqueService";

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

  useEffect(() => {
    const fetchBlocks = async () => {
        try {
            const blocksRes = await getBlocks();
            console.log(blocksRes); 
            if (blocksRes.success) {
                setBlocks(blocksRes.data);
            } else {
                console.error("Error al obtener los bloques:", blocksRes.message);
            }
        } catch (error) {
            console.error("Error en la petición:", error);
        }
    };

    fetchBlocks();
}, []);

  return (
    <div className="flex">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">

        <Header />
        <div className="flex justify-center items-center mt-5">
          <h1 className="text-black text-6xl sm:text-base md:text-lg lg:text-3xl xl:text-6xl">
            BLOQUES
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row sm:justify-between w-4/5 mt-10 justify-between items-center">
            <Statebox Numstate="3" title="Bloques" icon={LuBoxes} />
            <Statebox Numstate="3" title="Habilitados" icon={FcOk} />
            <Statebox Numstate="0" title="Deshabilitados" icon={FcHighPriority} />
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
              <Tableblocks data={blocks} columns={columns}
                className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
