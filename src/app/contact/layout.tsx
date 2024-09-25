import PageHeader from "@/components/porfolio/PageHeader";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PageHeader
        subTitle="contact"
        mainTitle={{
          normal: "get in",
          strong: "touch",
        }}
      />
      {children}
    </div>
  );
};

export default layout;
