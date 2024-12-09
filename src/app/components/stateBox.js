'use client'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Statebox = ({ title, Numstate, icon: Icon }) => {
    return (
        <div className="flex flex-col 2xl:flex-row items-center py-4 space-y-4 lg:w-[25%] border border-gray-300 rounded-md shadow-slate-300 shadow-xl justify-between">
            <div className="flex flex-col mx-5 text-center sm:text-left">
                <h1 className="text-xl text-black font-semibold">{Numstate}</h1>
                <h2 className="text-xl text-black">{title}</h2>
            </div>
            <div className="mt-3 sm:mt-0">
                {Icon && <Icon className="w-12 h-12 text-lightGreen mx-3 flex-shrink-0" />}
            </div>
        </div>
    )
}

export default Statebox;
