import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

interface LinkButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  href: string;
  icon: FC<any>;
}

const LinkButton = ({
  href,
  title,
  icon: Icon,
  className,
  ...rest
}: LinkButtonProps) => {
  return (
    <button className={`inline-block ${className}`} {...rest}>
      <Link href={href}>
        <div className="group h-[50px] rounded-full relative transition-fade">
          <div className="absolute h-[52px] w-[52px] bg-[var(--primary)] flex-center rounded-full -top-[1px] -left-[1px] group-hover:left-[calc(100%-50px)] transition-fade">
            <Icon className="text-white text-xl" />
          </div>
          <p className="h-full rounded-full shadow-2xl flex-center pl-16 pr-6 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:pl-6 group-hover:pr-16 uppercase font-semibold text-lg transition-fade outline outline-[2px] outline-[var(--primary)]">
            {title}
          </p>
        </div>
      </Link>
    </button>
  );
};

export default LinkButton;
