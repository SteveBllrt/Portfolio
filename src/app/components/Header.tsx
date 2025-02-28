import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl h-screen flex items-center justify-center gap-4 mx-auto">
      <div className="flex flex-col gap-2">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xl md:text-[72px] mb-4 font-Ovo"
        >
          Hi! I’m Steven Ballaret
          <Image src={assets.hand} alt="Hand waving" className="w-10" />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto font-Ovo mt-4"
        >
          I am a frontend developer from Mandurriao, Iloilo, with years of
          experience in various technologies, including React, Next.js, and
          React Native.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 mr-2">
          <motion.a
            initial={{ y: 23, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="md:px-10 px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          >
            <p className="text-sm md:text-base"> contact me </p>
            <Image src={assets.right_arrow_up} alt="" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 23, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            viewport={{ once: true }}
            href="./ballaret-resume.pdf"
            download
            className="md:px-10 px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          >
            <p className="text-sm md:text-base"> my resume</p>
            <Image src={assets.download} alt="" className="w-4" />
          </motion.a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={assets.hero_image}
            alt="Profile"
            className="rounded-full w-[740px] h-[740px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
