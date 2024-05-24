import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactInfoGroup = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl">DON&apos;T BE SHY !</h3>
      <p className="mt-4 leading-[1.5]">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <ul className="mt-6">
        <li className="flex gap-4 xl:gap-7 mb-3 xl:mb-5">
          <div className="icon text-[var(--primary)] text-2xl xl:text-4xl flex-center">
            <FaLocationDot />
          </div>
          <div>
            <p className="uppercase text-md">address</p>
            <p className="xl:text-lg">District 7, Ho Chi Minh City</p>
          </div>
        </li>
        <li className="flex gap-4 xl:gap-7 mb-3 xl:mb-5">
          <div className="icon text-[var(--primary)] text-2xl xl:text-4xl flex-center">
            <IoMdMail />
          </div>
          <div>
            <p className="uppercase text-md">EMAIL</p>
            <p className="xl:text-lg">caodangtinhxxx03@gmail.com</p>
          </div>
        </li>
        <li className="flex gap-4 xl:gap-7 mb-3 xl:mb-5">
          <div className="icon text-[var(--primary)] text-2xl xl:text-4xl flex-center">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="uppercase text-md">PHONE</p>
            <p className="xl:text-lg">0862040xxx</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfoGroup;
