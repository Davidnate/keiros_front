'use client'

import Header from "@/app/components/headerView";
import Sidebar from "@/app/components/sidebarView";
import Totalbox from "@/app/components/totalBox";
import Disablebox from "@/app/components/stateBox";
import Enablebox from "@/app/components/enableBox";



export default function Ambientes() {
  return (

    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
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