import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

const NextThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemeProvider;
