"use client";

import localFont from "next/font/local";
import "./globals.css";
import { store } from "./store";
import { Provider } from "react-redux";

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
      <Provider store={store}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-300 `}
      >
          { }
          <div>
            {children}
          </div>
      </body>
      </Provider>
    </html>
  );
}

