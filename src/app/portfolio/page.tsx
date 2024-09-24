"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Project } from "@/common/@types";
import { PROJECTS } from "@/common/constants/constants";
import ContentWrapper from "@/components/ContentWrapper";
import ProjectModalDetail from "@/components/ProjectModalDetail";
import { motion } from "framer-motion";

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
        {PROJECTS.map((pr, i) => {
          return (
            <motion.div
              animate={{
                x: [-50, 10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.5 + i * 0.1,
                  duration: 0.5,
                },
              }}
              whileInView={{
                x: [-50, 10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.5 + i * 0.1,
                  duration: 0.5,
                },
              }}
              className="group relative h-56 w-full cursor-pointer overflow-hidden rounded-md bg-white/10 md:h-64"
              key={pr.id}
            >
              <LazyLoadImage
                alt=""
                src={pr.thumbnail}
                effect="blur"
                wrapperClassName="relative h-full w-full"
                className="size-full bg-white/10 object-cover"
              />
              <button
                className="flex-center transition-fade invisible absolute left-0 top-0 size-full bg-black/80 opacity-0 group-hover:visible group-hover:opacity-100"
                onClick={() => handleActiveProject(pr)}
              >
                <p className="text-center text-3xl font-bold uppercase text-white">
                  {pr.name}
                </p>
              </button>
            </motion.div>
          );
        })}
      </div>
    </ContentWrapper>
  );
};

export default PortfolioPage;
