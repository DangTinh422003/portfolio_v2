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
        <div className="group hover:bg-yellow outline outline-[2px] outline-yellow h-[50px] relative rounded-full transition-fade">
          <div className="absolute h-[50px] w-[50px] bg-yellow flex-center rounded-full top-0 left-0 group-hover:left-[calc(100%-50px)] transition-fade">
            <Icon className="text-white text-xl" />
          </div>
          <p className="h-full rounded-full shadow-2xl flex-center pl-16 pr-6 group-hover:text-white group-hover:pl-6 group-hover:pr-16 transition-fade uppercase font-bold text-lg">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
