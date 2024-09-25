import React, { PropsWithChildren } from "react";

import PageHeader from "@/components/porfolio/PageHeader";

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
