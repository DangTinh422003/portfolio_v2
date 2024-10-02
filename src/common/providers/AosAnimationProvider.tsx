"use client";
import "aos/dist/aos.css";

import AOS from "aos";
import React, { type PropsWithChildren, useEffect } from "react";

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
