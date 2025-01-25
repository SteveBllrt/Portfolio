import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={assets.profile}
              alt="Profile"
              className="rounded-full w-32"
            />
          </motion.div>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xl md:text-2xl mb-4 font-Ovo"
          >
            Hi! I’m Steven Ballaret
            <Image src={assets.hand} alt="Hand waving" className="w-6" />
          </motion.h3>
        </div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-6xl lg:text-[58px] font-Ovo lowercase max-w-[500px] mx-auto"
        >
          frontend developer based in iloilo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto font-Ovo mt-4"
        >
          I am a frontend developer from Mandurriao, Iloilo, with years of
          experience in various technologies, including React, Next.js, and
          React Native.
        </motion.p>

        <div className="flex items-center justify-center">
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
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <motion.a
              initial={{ y: 23, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              viewport={{ once: true }}
              href="/sample-resume.pdf"
              download
              className="md:px-10 px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
            >
              <p className="text-sm md:text-base"> my resume</p>
              <Image src={assets.download} alt="" className="w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
