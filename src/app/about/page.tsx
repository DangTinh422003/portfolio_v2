import React from "react";

import AboutInfoSection from "@/components/porfolio/AboutInfoSection";
import ContentWrapper from "@/components/ContentWrapper";
import Experiens from "@/components/porfolio/Experiens";
import Skills from "@/components/porfolio/Skills";

const About = () => {
  return (
    <ContentWrapper>
      <AboutInfoSection />
      <Skills />
      <Experiens />
    </ContentWrapper>
  );
};

export default About;
