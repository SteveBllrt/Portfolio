import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { DarkMode } from "../types/darkMode";

const Footer: React.FC<DarkMode> = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-28 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail}
            alt=""
            className="w-6"
          />
          stevenballaret@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> @ 2025 Steven B. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/SteveBllrt"
              className="underline flex items-center"
            >
              <Image src={assets.github} alt="" className="w-4 mr-1" />
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/steven.ballaret"
              className="underline flex items-center"
            >
              <Image src={assets.facebook} alt="" className="w-4 mr-1" />
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/steven-ballaret-839373264/"
              className="underline flex items-center"
            >
              <Image src={assets.linkedin} alt="" className="w-4 mr-1" />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
