"use client";
import { motion,type Variants  } from "framer-motion";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const variants: Variants = {
  visible: {
    y: [50, -10, 0],
    opacity: [0, 1],
  },
};

const ContactInfoGroup = () => {
  return (
    <div>
      <motion.h3
        className="text-3xl font-bold"
        variants={variants}
        whileInView={"visible"}
        animate={"visible"}
        transition={{ delay: 0.1 }}
      >
        DON&apos;T BE SHY !
      </motion.h3>
      <motion.p
        className="mt-4 leading-normal"
        variants={variants}
        whileInView={"visible"}
        animate={"visible"}
        transition={{ delay: 0.2 }}
      >
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </motion.p>
      <ul className="mt-6">
        <motion.li
          className={`
            mb-3 flex gap-4

            xl:mb-5 xl:gap-7
          `}
          variants={variants}
          whileInView={"visible"}
          animate={"visible"}
          transition={{ delay: 0.3 }}
        >
          <div className={`
            icon flex-center text-2xl text-primary

            xl:text-4xl
          `}>
            <FaLocationDot />
          </div>
          <div>
            <p className="text-md uppercase">address</p>
            <p className="xl:text-lg">District 7, Ho Chi Minh City</p>
          </div>
        </motion.li>
        <motion.li
          className={`
            mb-3 flex gap-4

            xl:mb-5 xl:gap-7
          `}
          variants={variants}
          whileInView={"visible"}
          animate={"visible"}
          transition={{ delay: 0.35 }}
        >
          <div className={`
            icon flex-center text-2xl text-primary

            xl:text-4xl
          `}>
            <IoMdMail />
          </div>
          <div>
            <p className="text-md uppercase">EMAIL</p>
            <p className="xl:text-lg">caodangtinhxxx03@gmail.com</p>
          </div>
        </motion.li>
        <motion.li
          className={`
            mb-3 flex gap-4

            xl:mb-5 xl:gap-7
          `}
          variants={variants}
          whileInView={"visible"}
          animate={"visible"}
          transition={{ delay: 0.4 }}
        >
          <div className={`
            icon flex-center text-2xl text-primary

            xl:text-4xl
          `}>
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-md uppercase">PHONE</p>
            <p className="xl:text-lg">0862040xxx</p>
          </div>
        </motion.li>
      </ul>
    </div>
  );
};

export default ContactInfoGroup;
