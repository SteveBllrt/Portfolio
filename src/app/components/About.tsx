import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";
import { DarkMode } from "../types/darkMode";
import { motion } from "framer-motion";

const About: React.FC<DarkMode> = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-3 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex w-full flex-col lg:flex-row lg:justify-center gap-20 mb-20 mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl mt-2 mx-auto lg:mx-0"
        >
          <Image
            src={assets.profile}
            alt="profile"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 max-w-3xl lg:text-left text-center"
        >
          <p className="font-Ovo mb-10">
            I am a fourth-year Software Engineering student at Central
            Philippine University with a strong passion for front-end
            development, creating engaging and user-friendly interfaces, and
            turning designs into reality. I am a collaborative and approachable
            individual, eager to learn and contribute to the success of the
            company.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/70">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            viewport={{ once: true }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-normal gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileInView={{ opacity: 1.1 }}
                viewport={{ once: true }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
