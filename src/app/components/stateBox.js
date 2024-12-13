'use client'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Statebox = ({ title, Numstate, icon: Icon }) => {
    return (
        <div className="flex flex-col my-3 2xl:flex-row items-center py-4 space-y-4  w-[80%] lg:w-[25%] border border-gray-300 rounded-md shadow-slate-300 shadow-xl justify-between
        dark:bg-secondBgDark dark:shadow-shadowDark">
            <div className="flex flex-col mx-5 items-center">
                <h2 className="text-xl text-black dark:text-textCol">{title}</h2>
                <h1 className="text-xl text-black font-semibold dark:text-white">{Numstate}</h1>

            </div>
            <div className="mt-3 sm:mt-0">
                {Icon && <Icon className="w-12 h-12 text-lightGreen mx-3 flex-shrink-0 dark:text-iconDark" />}
            </div>
        </div>
    )
}

export default Statebox;
