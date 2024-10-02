import React, { type PropsWithChildren } from "react";

import PageHeader from "@/components/PageHeader";

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
