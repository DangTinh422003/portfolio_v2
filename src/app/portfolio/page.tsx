"use client";
import React from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Project } from "@/common/@types";
import { PROJECTS } from "@/common/constants/constants";
import ContentWrapper from "@/components/ContentWrapper";
import ProjectModalDetail from "@/components/ProjectModalDetail";

const PortfolioPage = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [projectActive, setProjectActive] = React.useState<Project>();

  const handleActiveProject = (project: Project) => {
    setIsShowModal(true);
    setProjectActive(project);
  };

  return (
    <ContentWrapper>
      {isShowModal && projectActive ? (
        <ProjectModalDetail
          setIsShowModal={setIsShowModal}
          project={projectActive}
        />
      ) : (
        <></>
      )}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-24 lg:pb-10">
        {PROJECTS.map((pr) => (
          <div
            className="relative group cursor-pointer rounded-md overflow-hidden"
            key={pr.id}
          >
            <LazyLoadImage
              alt=""
              src={pr.thumbnail}
              effect="blur"
              wrapperClassName="relative w-full lg:h-72"
              className="w-full h-full object-cover"
            />
            <div
              className="flex-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-fade"
              onClick={() => handleActiveProject(pr)}
            >
              <p className="text-center uppercase text-3xl font-bold text-white">
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
