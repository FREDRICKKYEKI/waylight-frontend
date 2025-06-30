
export function Header9(props: any) {
  return (
    <section id="section__header" className="relative md:py-24 lg:py-28 text-white" >
      <div className="relative z-10 container px-[5%] mx-auto">
        <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
          <p className="mb-3 font-semibold md:mb-4">
            {props.label}
          </p>

          <h1 className="text-3xl md:text-6xl">
            {props.title}
          </h1>
          <div>
            <p className="text-base mb-12 md:text-md md:mb-3">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={props.image}
          loading="lazy"
          className="w-full h-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-01/80 to-dark-01" />
        <div className="absolute bottom-0 w-full shape-1 bottom h-10 lg:h-10" style={{ overflow: "hidden" }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
