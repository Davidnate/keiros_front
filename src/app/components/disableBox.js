'use client'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const Disablebox = () => {
    return (
        <div className="flex flex-col items-center py-4 space-y-4 w-[25%] border border-gray-300 rounded-md">
            <h1 className="text-xl text-center font-semibold text-black">
                Bloques Deshabilitados
            </h1>
            <img src="#"/>
        </div>
    )
}

export default Disablebox;