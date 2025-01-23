import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src={assets.profile}
            alt="Profile"
            className="rounded-full w-32"
          />
          <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-4 font-Ovo">
            Hi! I’m Steven Ballaret
            <Image src={assets.hand} alt="Hand waving" className="w-6" />
          </h3>
        </div>

        <h1 className="text-3xl sm:text-6xl lg:text-[58px] font-Ovo lowercase max-w-[500px] mx-auto">
          frontend developer based in iloilo
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo mt-4">
          I am a frontend developer from Manduriao, Iloilo, with years of
          experience in various technologies, including React, Next.js, and
          React Native.
        </p>

        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 mr-4">
            <a
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
            >
              contact me
              <Image src={assets.right_arrow_up} alt="" className="w-4" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="/sample-resume.pdf"
              download
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
              my resume
              <Image src={assets.download} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
