import Link from "next/link";
import React, { FC } from "react";

interface LinkButtonProps {
  title: string;
  href: string;
  icon: FC<any>;
}

const LinkButton = ({ href, title, icon: Icon }: LinkButtonProps) => {
  return (
    <div className="inline-block">
      <Link href={href}>
        <div className="group h-[50px] rounded-full relative transition-fade">
          <div className="absolute h-[52px] w-[52px] bg-yellow flex-center rounded-full -top-[1px] -left-[1px] group-hover:left-[calc(100%-50px)] transition-fade">
            <Icon className="text-white text-xl" />
          </div>
          <p className="h-full rounded-full shadow-2xl flex-center pl-16 pr-6 group-hover:bg-yellow group-hover:text-white group-hover:pl-6 group-hover:pr-16 transition-fade uppercase font-semibold text-lg outline outline-[2px] outline-yellow">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
