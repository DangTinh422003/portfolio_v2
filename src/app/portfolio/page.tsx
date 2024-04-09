"use client";
import { Project } from "@/common/@types";
import { PROJECTS } from "@/common/constants/constants";
import ContentWrapper from "@/components/ContentWrapper";
import ProjectModalDetail from "@/components/ProjectModalDetail";
import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [projectActive, setProjectActive] = React.useState<Project>();

  const handleActiveProject = (project: Project) => {
    setIsShowModal(true);
    setProjectActive(project);
  };

  return (
    <ContentWrapper>
      <ProjectModalDetail
        show={isShowModal}
        setIsShowModal={setIsShowModal}
        project={projectActive!}
      />
      <div className="grid grid-cols-3 gap-6">
        {PROJECTS.map((pr) => (
          <div
            className="relative group cursor-pointer rounded-md overflow-hidden"
            key={pr.name}
            onClick={() => handleActiveProject(pr)}
          >
            <div className="relative w-full h-72 ">
              <Image src={pr.thumbnail} alt="" sizes="auto" fill priority />
            </div>
            <div className="flex-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-fade">
              <p className="text-center uppercase text-2xl font-semibold text-white">
                {pr.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default PortfolioPage;
