import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

interface LinkButtonProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
  icon: FC<any>;
}

const LinkButton = ({ href, title, icon: Icon, ...rest }: LinkButtonProps) => {
  return (
    <div {...rest}>
      <Link href={href}>
        <div className="group border-2 border-solid border-yellow rounded-full h-[50px] flex-center relative">
          <div className="absolute left-0 group-hover:left-[calc(100%-49px)] flex-center h-[50px] w-[50px] rounded-full border-2 border-solid bg-yellow border-yellow duration-300 ease-linear">
            {<Icon className="text-lg" />}
          </div>
          <div>
            <p className="uppercase font-bold text-lg pr-7 pl-16 group-hover:pr-16 group-hover:pl-7 duration-300 ease-linear">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
