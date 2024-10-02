import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
import React, { type PropsWithChildren } from "react";
import { Bounce, ToastContainer, type ToastContainerProps } from "react-toastify";

const toastConfig: ToastContainerProps = {
  position: "top-left",
  autoClose: 1000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnHover: false,
  transition: Bounce,
};

const NextThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <ToastContainer {...toastConfig} />
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
