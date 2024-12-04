"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/sidebarView";
import store from "./store";
import { Provider } from "react-redux";
import DarkModeToggle from './components/DarkModeToggle';
import Header from "./components/headerView";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          {}
          <div style={{ display: "flex" }}>
            <Sidebar />
            {/* <Header/> */}
          <div>
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}

