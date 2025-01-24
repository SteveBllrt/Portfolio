import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-3 text-lg font-Ovo"> Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row gap-20 mb-20 mt-12">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none mt-2 mx-auto">
          <Image
            src={assets.profile}
            alt="profile"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="font-Ovo mb-10 max-w-2xl">
            I am a fourth-year Software Engineering student at Central
            Philippine University with a strong passion for front-end
            development, creating engaging and user-friendly interfaces, and
            turning designs into reality. I am a collaborative and approachable
            individual, eager to learn and contribute to the success of the
            company.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 front-Ovo"> Tools i use </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
