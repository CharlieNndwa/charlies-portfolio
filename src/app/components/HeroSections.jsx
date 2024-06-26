/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSections = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-lrft">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
              Hello, I'm {'"'} {/* Escape with single quotes */}
            </span>

            <br />
            <TypeAnimation
              sequence={[
                "Charlie",
                1000,
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a full-stack web and mobile app developer, based in
            Johannesburg, South Africa.{" "}
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="/images/C.V .pdf" download="My_CV.pdf">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#242020] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/projects/animation.png"
              alt=""
              className="absolute transform -translate -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
