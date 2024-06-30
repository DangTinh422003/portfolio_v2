interface PageHeaderProps {
  subTitle: string;
  mainTitle: {
    strong: string;
    normal: string;
  };
}

const PageHeader = ({ mainTitle, subTitle, ...rest }: PageHeaderProps) => {
  return (
    <div className="flex-center">
      <div className="relative mx-auto inline-block text-center font-[900] uppercase">
        <h1 className="relative z-10 py-10 text-4xl md:py-24 md:text-6xl">
          {mainTitle.normal}{" "}
          <span className="text-[var(--primary)]">{mainTitle.strong}</span>
        </h1>
        <p className="absolute-center z-0 text-6xl opacity-10 md:text-9xl">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
