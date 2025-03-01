import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="max-w-2xl h-screen flex flex-col-reverse md:flex-row items-center gap-4 justify-between md:mx-[160px]">
      <div className="flex flex-col gap-4 justify-center">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 md:text-[20px] 2xl:text-[22px] font-Ovo font-medium uppercase"
        >
          Hello I am Steven Ballaret
          <Image src={assets.hand} alt="Hand waving" className="w-5" />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-Ovo mt-5 text-[70px]  2xl:text-[75px] text-[#15546b] dark:text-white"
        >
          Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-Ovo mt-5 md:text-[20px] 2xl:text-[22px] md:max-w-[600px] 2xl:max-w-[800px] text-[#242424] dark:text-white"
        >
          I’m from Mandurriao, Iloilo, with years of experience working with
          multiple technologies, including React, Next.js, and React Native
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 mr-2">
          <motion.a
            initial={{ y: 23, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
            href="#contact"
            className="md:px-8 px-8 py-4 border border-white rounded-3xl bg-[#484848] hover:bg-[#646464] text-white flex items-center gap-2 dark:bg-transparent"
          >
            <p className="text-sm md:text-base"> connect with me </p>
            <Image src={assets.right_arrow_up} alt="" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 23, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
            href="./ballaret-resume.pdf"
            download
            className="md:px-10 px-8 py-4 border rounded-3xl border-gray-500 hover:bg-[#F0F0F0] flex items-center gap-2 bg-white dark:text-black"
          >
            <p className="text-sm md:text-base"> my resume</p>
            <Image src={assets.download} alt="" className="w-4" />
          </motion.a>
        </div>
      </div>

      <div className="">
        <Image
          src={assets.hero_image}
          alt="Profile"
          className="h-20 w-20 md:w-[471px] md:h-[666px] 2xl:w-[520px] 2xl:h-[740px] md:absolute md:bottom-0 md:right-10 z-10"
        />

        <Image
          src={assets.circle_bg}
          alt="Profile"
          className="h-20 w-20 md:w-[620px] md:h-[600px] 2xl:h-[665px] 2xl:w-[690px] md:absolute md:bottom-0 md:right-0 z-0"
        />
      </div>
    </div>
  );
};

export default Header;
