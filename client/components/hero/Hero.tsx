import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center h-screen gap-5 min-h-screen">
        <h1 className="text-[80px] font-extrabold bg-gradient-to-r  from-[#F6FF00] to-[#EA0000] bg-clip-text text-transparent">
          Play & Win Now
        </h1>
        <p className="text-white text-[30px] max-w-[800px] text-center">
          Join thousands of players. Spin, bet, and win anytime, anywhere.
        </p>

        <span className="flex gap-5 ">
          <Link
            href={"/support"}
            className="text-[#191919] bg-gradient-to-r from-[#FFF600] to-[#EB1619] w-[180px] h-[57px] rounded-md text-[20px] font-semibold cursor-pointer flex justify-center items-center"
          >
            Start Playing
          </Link>
          <Link
            href={"/games"}
            className="text-[#9E9E9E] border border-slate-400 rounded-md w-[180px] h-[57px] text-[20px] font-semibold bg-[#17102D] cursor-pointer flex justify-center items-center"
          >
            View Games
          </Link>
        </span>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
