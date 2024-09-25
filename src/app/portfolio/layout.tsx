import PageHeader from "@/components/porfolio/PageHeader";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PageHeader
        subTitle="works"
        mainTitle={{
          normal: "my",
          strong: "portfolio",
        }}
      />
      {children}
    </div>
  );
};

export default layout;
