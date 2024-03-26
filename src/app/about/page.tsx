import AboutInfoSection from "@/components/AboutInfoSection";
import ContentWrapper from "@/components/ContentWrapper";
import Experiens from "@/components/Experiens";
import Skills from "@/components/Skills";
import React from "react";

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
