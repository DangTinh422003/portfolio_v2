interface PageHeaderProps {
  subTitle: string;
  mainTitle: {
    strong: string;
    normal: string;
  };
}

const PageHeader = ({ mainTitle, subTitle, ...rest }: PageHeaderProps) => {
  return (
    <div className="flex-center" data-aos="zoom-out-up">
      <div className="mx-auto text-center inline-block uppercase font-[900] relative">
        <h1 className="text-4xl md:text-6xl py-10 md:py-24 z-10 relative">
          {mainTitle.normal}{" "}
          <span className="text-[var(--primary)]">{mainTitle.strong}</span>
        </h1>
        <p className="absolute-center text-6xl md:text-9xl opacity-10 z-0">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
