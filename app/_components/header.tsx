"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-between items-center my-8 mx-2">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight m-4">
        <Link href="/" className="hover:underline">
          TylerGeorgeAlexander.com
        </Link>
      </h2>
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="bg-slate-100 p-2 rounded-xl m-4"
      >
        {currentTheme === "dark" ? (
          <RiSunLine size={25} color="black" />
        ) : (
          <RiMoonFill size={25} />
        )}
      </button>
    </div>
  );
};

export default Header;

