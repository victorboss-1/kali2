"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../assets/logo.svg";
import { FaCamera, FaMicrophone } from "react-icons/fa";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import SendIcon from "@/icons/SendIcon";

const ChatBox = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSendClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Auto hide after 2s
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative">
        <section className="w-full flex justify-center py-20 px-4">
          <div className="w-full max-w-xl bg-[#0e1b4d] rounded-lg shadow-lg h-auto">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#1b2a7a] rounded-t-lg">
              <Image
                src={avatar}
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <h2 className="text-white font-semibold">Kali Gaming</h2>
            </div>

            <div className="px-4 py-6 flex flex-col gap-5 text-white">
              <div className="self-start bg-[#2a3c91] px-4 py-2 rounded-full text-sm">
                Wanna Play Now
              </div>
              <div className="self-end bg-[#2a3c91] px-4 py-2 rounded-full text-sm">
                Yes
              </div>
              <div className="self-start bg-[#2a3c91] px-4 py-2 rounded-full text-sm">
                which Game
              </div>
              <div className="self-end bg-[#2a3c91] px-4 py-2 rounded-full text-sm">
                Milkyway
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 bg-[#1b2a7a] rounded-b-lg">
              <FaCamera className="text-white" />
              <FaMicrophone className="text-white" />
              <input
                type="text"
                placeholder="Type here..."
                className="flex-1 bg-[#2a3c91] px-4 py-2 rounded-full outline-none text-white placeholder:text-gray-300 text-sm"
              />
              <button onClick={handleSendClick} className="cursor-pointer">
                <SendIcon />
              </button>
            </div>
          </div>
        </section>

        {showPopup && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#1b2a7a] text-white px-6 py-3 rounded-lg shadow-lg border border-white/20 transition-all duration-300">
            Message section is under development...
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ChatBox;
