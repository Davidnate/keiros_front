'use client'
import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/features/themeSlice';

const DarkModeToggle = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleTheme());
    };
    
    return (
        <button onClick={handleToggle}
        className='p-2 rounded-md'>
      {isDarkMode ? <MdLightMode size={32}/> : <MdDarkMode size={32}/>}
        </button>
    );
};

export default DarkModeToggle;