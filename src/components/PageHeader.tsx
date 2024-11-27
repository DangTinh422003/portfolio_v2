"use client";
import { motion, type Variants } from "framer-motion";

interface PageHeaderProps {
  subTitle: string;
  mainTitle: {
    strong: string;
    normal: string;
  };
}

const headerVariants: Variants = {
  visible: {
    y: [50, -10, 0],
    opacity: [0, 0.5, 1],
    scale: [0.5, 1],
  },
};

const PageHeader = ({ mainTitle, subTitle, ...rest }: PageHeaderProps) => {
  return (
    <div className="flex-center">
      <motion.div
        variants={headerVariants}
        whileInView={"visible"}
        animate={"visible"}
        className={`
          relative mx-auto inline-block text-center font-[900] uppercase
        `}
      >
        <motion.h1 className={`
          relative z-10 py-10 text-4xl

          md:py-24 md:text-6xl
        `}>
          {mainTitle.normal}{" "}
          <span className="text-primary">{mainTitle.strong}</span>
        </motion.h1>
        <motion.p className={`
          absolute-center z-0 text-6xl opacity-10

          md:text-9xl
        `}>
          {subTitle}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PageHeader;
