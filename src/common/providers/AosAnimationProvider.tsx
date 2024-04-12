"use client";
import React, { PropsWithChildren, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useGetDevice } from "../hooks/useGetDevice";

const AosAnimationProvider = ({ children }: PropsWithChildren) => {
  const { isDesktop } = useGetDevice();

  useEffect(() => {
    if (isDesktop) {
      AOS.init({
        easing: "ease-in-out",
      });
    } else {
      AOS.refreshHard();
    }
  }, [isDesktop]);

  return <>{children}</>;
};

export default AosAnimationProvider;
