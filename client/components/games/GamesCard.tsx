import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Games } from "@/lib/data";
import Link from "next/link";
import React from "react";

const GamesCard = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-[50px]">
        <h1 className="text-center text-white text-[50px] py-15 ">
          The Games we have
        </h1>
        <div
          className="flex justify-center flex-wrap gap-10
        "
        >
          {Games.map((game, index) => (
            <div
              className="w-[250px] h-[300px] border-6 border-white rounded-lg overflow-hidden"
              key={index}
            >
              <div
                className="h-[200px] bg-center bg-cover "
                style={{
                  backgroundImage: `url(${game.image})`,
                }}
              ></div>
              <h1 className="p-3 text-white text-xl font-semibold">
                {game.name}
              </h1>
              <Link href={game.href} className="mx-3 text-white">
                Play
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GamesCard;
