import React from "react";
import { CgSpinner } from "react-icons/cg";

const loading = () => {
  return (
    <div className="flex-center h-screen w-screen">
      <div className="spin animate-spin">
        <CgSpinner className="text-4xl" />
      </div>
    </div>
  );
};

export default loading;
