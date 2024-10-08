import Link from "next/link";
import React, { type FC, type HTMLAttributes } from "react";

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
    <button className={`
      inline-block

      ${className}
    `} {...rest}>
      <Link href={href}>
        <div className="transition-fade group relative h-[50px] rounded-full">
          <div className={`
            flex-center transition-fade absolute -left-px -top-px size-[52px]
            rounded-full bg-[var(--primary)]

            group-hover:left-[calc(100%-50px)]
          `}>
            <Icon className="text-xl text-white" />
          </div>
          <p className={`
            flex-center transition-fade h-full rounded-full pl-16 pr-6 text-lg
            font-semibold uppercase shadow-2xl outline outline-2
            outline-[var(--primary)]

            group-hover:bg-[var(--primary)] group-hover:pl-6 group-hover:pr-16
            group-hover:text-white
          `}>
            {title}
          </p>
        </div>
      </Link>
    </button>
  );
};

export default LinkButton;
