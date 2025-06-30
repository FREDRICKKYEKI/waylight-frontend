import RenderReadingTime from "./RenderReadingTime";

export function BlogPostHeader5(props: any) {
  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-lg text-center">
        <p className="text-text-alternative mb-3 text-sm font-semibold md:mb-4">
          Insights
        </p>
        <h1 className="text-text-alternative mb-5 text-5xl">
          {props.title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <div className="rb-4 flex items-center">
            <div className="rb-4 flex flex-col items-center sm:mb-0">
              <div className="mb-3 shrink-0 md:mb-4">
                <img
                  src={props.author.profileImage}
                  alt="Relume placeholder avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="text-text-alternative">
                <h6 className="font-semibold">
                  {props.author.name}
                </h6>
                <div className="mt-1 flex">
                  <p className="text-sm">
                    {props.author.publishedAt}
                  </p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">
                    <RenderReadingTime {...props} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={props.mainImage}
          className="h-full w-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="from-dark-01/80 to-dark-01 absolute inset-0 bg-gradient-to-b" />
        <div
          className="shape-1 bottom absolute bottom-0 h-10 w-full lg:h-10"
          style={{ overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
