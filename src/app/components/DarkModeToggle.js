'use client';

import React, { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/features/themeSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button 
      onClick={handleToggle}
      className="p-2 rounded-md"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <MdLightMode size={32} /> : <MdDarkMode size={32} />}
    </button>
  );
};

export default DarkModeToggle;
