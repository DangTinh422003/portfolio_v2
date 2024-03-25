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
      className={`${className} container mx-auto md:px-10 xl:px-0 px-4`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
