import React from "react";

const EcosystemSection = () => {
  const features = [
    {
      title: "Collaborative by Nature",
      description:
        "We bring together diverse creative and technical talents to build stronger, more thoughtful products through shared expertise.",
    },
    {
      title: "Product-Focused Thinking",
      description:
        "We approach every project with a product mindset, prioritizing usability, scalability, clarity, and long-term value.",
    },
    {
      title: "Built with Intention",
      description:
        "Every design decision, system, and experience is created with purpose, strategy, and attention to detail.",
    },
  ];

  return (
    <section
      id="collaborate"
      className="bg-[#07070a] text-white px-6 py-24 md:px-16 md:py-32 font-sans"
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl txtx text-[#E8E4DC] line-clamp-2">
          More than a creative team, we are a collaborative ecosystem focused on
          building meaningful digital experiences.
        </h2>
      </div>

      {/* Divider Line with Green Markers */}
      <div className="max-w-6xl mx-auto mb-20 md:mb-28 flex items-center">
        <div className="w-3 h-3 bg-green-400 rounded-sm flex-shrink-0" />
        <div className="flex-1 h-[1px] bg-gray-700" />
        <div className="w-3 h-3 bg-green-400 rounded-sm flex-shrink-0" />
      </div>

      {/* Top Row — 3 Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((feature) => (
          <div key={feature.title}>
            <h3 className="text-[#E8E4DC] text-xl md:text-2xl font-seif font-semibold mb-5 txtx">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-[1.2rem] leading-[1.7] txt">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Card — Centered under middle column */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-20 flex justify-center md:justify-start md:pl-[calc(33.333%+1.5rem)]">
        <div className="max-w-sm">
          <h3 className="text-[#E8E4DC] text-xl md:text-2xl font-semibold mb-5 txtx">
            Growing Through Execution
          </h3>
          <p className="text-gray-400 text-[1.2rem] leading-[1.7] txt">
            We believe consistency, experimentation, and real execution are what
            transform ideas into sustainable opportunities.
          </p>
        </div>
      </div>
      <div className=" bg-white max-w-6xl mx-auto mt-16 md:mt-20 justify-center md:justify-start px-5 py-16 md:px-8 md:py-24">
        <div className="flex max-w-[1000px] flex-col items-center text-center">
          <h2 className="text-black text-center txt text-4xl">
            {" "}
            We partner with founders, brands and ambitious creatives to build
            thoughtful digital products and experiences.{" "}
          </h2>
          <button
            className="bg-[#48633C] py-4 px-2 justify-center group
              mt-12
              h-[76px]
              w-[300px]
              rounded-[9px]
              text-[1.25rem]
              font-serif
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#48633C]
              hover:shadow-lg
              active:translate-y-0"
          >
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
