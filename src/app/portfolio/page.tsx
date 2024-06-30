"use client";
import React from "react";
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
      <div className="grid gap-3 pb-24 lg:grid-cols-2 lg:pb-10 xl:grid-cols-3">
        {PROJECTS.map((pr) => (
          <div
            className="group relative cursor-pointer overflow-hidden rounded-md"
            key={pr.id}
          >
            <LazyLoadImage
              alt=""
              src={pr.thumbnail}
              effect="blur"
              wrapperClassName="relative w-full lg:h-64"
              className="h-full w-full bg-white/10 object-cover"
            />
            <div
              className="flex-center transition-fade invisible absolute left-0 top-0 h-full w-full bg-black bg-opacity-80 opacity-0 group-hover:visible group-hover:opacity-100"
              onClick={() => handleActiveProject(pr)}
            >
              <p className="text-center text-3xl font-bold uppercase text-white">
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
