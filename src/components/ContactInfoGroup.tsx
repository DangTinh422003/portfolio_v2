import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactInfoGroup = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">DON&apos;T BE SHY !</h3>
      <p className="mt-4 leading-[1.5]">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <ul className="mt-6">
        <li className="mb-3 flex gap-4 xl:mb-5 xl:gap-7">
          <div className="icon flex-center text-2xl text-[var(--primary)] xl:text-4xl">
            <FaLocationDot />
          </div>
          <div>
            <p className="text-md uppercase">address</p>
            <p className="xl:text-lg">District 7, Ho Chi Minh City</p>
          </div>
        </li>
        <li className="mb-3 flex gap-4 xl:mb-5 xl:gap-7">
          <div className="icon flex-center text-2xl text-[var(--primary)] xl:text-4xl">
            <IoMdMail />
          </div>
          <div>
            <p className="text-md uppercase">EMAIL</p>
            <p className="xl:text-lg">caodangtinhxxx03@gmail.com</p>
          </div>
        </li>
        <li className="mb-3 flex gap-4 xl:mb-5 xl:gap-7">
          <div className="icon flex-center text-2xl text-[var(--primary)] xl:text-4xl">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-md uppercase">PHONE</p>
            <p className="xl:text-lg">0862040xxx</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfoGroup;
