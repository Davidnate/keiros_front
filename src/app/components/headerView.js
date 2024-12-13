"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/userSlice";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch;

    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <header className="flex p-4 bg-gray-300 text-white w-full h-16 dark:bg-secondBgDark">
        {loggedIn && (
            <div className="relative flex items-center space-x-2 ml-auto">
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center space-x-2 px-5 py-1 bg-lightGreen rounded-full hover:bg-darkGreen transition-colors mr-2
                    dark:bg-purple_new">
                    <img src={user.photo} alt="" className="w-6 h-6 rounded-full" />
                    <span>{user.name}</span>
                </button>

                {menuOpen && (
                    <div className="absolute right-0 w-30 bg-white text-black rounded-md shadow-lg mt-20">
                        <button onClick={handleLogout}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                            Cerrar Sesion
                        </button>
                    </div>
                )}
            </div>
        )}
    </header>
    )
}


export default Header;