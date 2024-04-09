import React from "react";
import { CgSpinner } from "react-icons/cg";

const loading = () => {
  return (
    <div className="flex-center w-screen h-screen">
      <div className="animate-spin spin">
        <CgSpinner className="text-4xl"/>
      </div>
    </div>
  );
};

export default loading;
