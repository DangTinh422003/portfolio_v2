import React from "react";

import { DeviceMinSize } from "../constants/constants";

type TDevice = "mobile" | "tablet" | "desktop";
export const useGetDevice = () => {
  const getDevice = (size: number): TDevice => {
    if (size >= DeviceMinSize.DESKTOP) {
      return "desktop";
    }
    if (size > DeviceMinSize.TABLET && size < DeviceMinSize.DESKTOP) {
      return "tablet";
    }
    return "mobile";
  };
  const [currentDevice, setCurrentDevice] = React.useState<TDevice>("desktop");
  React.useEffect(() => {
    const handleResize = () => {
      setCurrentDevice(getDevice(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentDevice]);
  return {
    currentDevice,
    isDesktop: currentDevice === "desktop",
    isTablet: currentDevice === "tablet",
    isMobile: currentDevice === "mobile",
  };
};
