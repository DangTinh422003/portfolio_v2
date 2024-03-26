import PageHeader from "@/components/PageHeader";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PageHeader
        subTitle="resume"
        mainTitle={{
          normal: "about",
          strong: "me",
        }}
      />
      {children}
    </div>
  );
};

export default layout;
