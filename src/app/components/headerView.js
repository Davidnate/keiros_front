"use client";

import { seTitle } from "@/features/headerSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {

    const dispatch = useDispatch
    const title = useSelector ((state) => state.pageTitle)
    const router = useRouter();

    useEffect(() => {
        const getTitle = (path) => {
        switch (path) {
            case "/":
                return "Home";
            default:
                 "Pagina Desconocida";    
        }
    
    };

    const pageTitle = getTitle (router.pathname);
    dispatch(seTitle(pageTitle));
}, [router.pathname, dispatch]);

    return (
        <div className="flex">
            <div className="w-60 bg-lightGreen pt-8 relative min-">

            </div>
        </div>
    )
}

export default Header;