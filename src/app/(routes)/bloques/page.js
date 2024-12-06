'use client'

import Header from "@/app/components/headerView";
import Sidebar from "@/app/components/sidebarView";
import Totalbox from "@/app/components/totalBox";
import Disablebox from "@/app/components/disableBox";
import Enablebox from "@/app/components/enableBox";



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

            <div className="flex flex-row mt-10 justify-between w-4/5">
              <Totalbox />
              <Enablebox />
              <Disablebox />
            </div>
          </div>
        </div>
    </div>

  );
}