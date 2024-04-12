import React, { HTMLAttributes } from "react";

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
      className={`${className} container mx-auto px-2 md:px-10 xl:px-10 2xl:px-0`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
