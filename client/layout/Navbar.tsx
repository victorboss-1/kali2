"use client";

import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Navlinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-2 sm:px-[50px] py-3 bg-transparent backdrop-blur-2xl top-0 sticky z-50">
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2 z-50">
        <Image src={logo} alt="Logo" width={60} height={60} />
        <h1 className="text-[#F36E0F] text-xl font-bold">
          Kali <br className="hidden sm:block" /> Gaming
        </h1>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex justify-center items-center gap-20 text-[20px]">
        {Navlinks.map((value, index) => {
          const isActive = pathname === value.href;
          return (
            <Link
              href={value.href}
              key={index}
              className={`${
                isActive ? "text-orange-600" : "text-white"
              } hover:text-orange-600 transition`}
            >
              {value.label}
            </Link>
          );
        })}
      </ul>

      {/* Desktop Buttons */}
      <span className="hidden md:flex gap-10 items-center text-white text-[20px]">
        <Link href={"/login"}>Log In</Link>
        <Link
          href={"/signup"}
          className="w-[100px] h-[40px] justify-center flex items-center bg-[#F36E0F] text-black rounded-sm"
        >
          Sign Up
        </Link>
      </span>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <HiMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0e1b4d] backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-40">
          {Navlinks.map((value, index) => {
            const isActive = pathname === value.href;
            return (
              <Link
                href={value.href}
                key={index}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl ${
                  isActive ? "text-orange-600" : "text-white"
                } hover:text-orange-600`}
              >
                {value.label}
              </Link>
            );
          })}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-[#F36E0F] px-6 py-2 rounded text-black font-semibold text-xl"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
