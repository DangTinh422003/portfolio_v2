import type React from "react";
import {type HTMLAttributes} from "react";

interface ContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ContentWrapper = ({
  children,
  className,
  ...rest
}: ContentWrapperProps) => {
  return (
    <div
      className={`
        ${className}

        container mx-auto px-2

        2xl:px-36

        md:px-10

        xl:px-10
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
