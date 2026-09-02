import React from "react";
import FeaturedProjectCard from "../Components/FeaturedProjectCard";

const WorkArchive = () => {
  return (
    <section
      id="work-archive"
      className="min-h-screen bg-[#F5F3EF] px-6 py-16 md:px-15 md:py-24 font-sans flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[2.6rem] md:text-[3.5rem] font-serif mb-5 tracking-tight leading-none txtx">
          Work Archive
        </h1>
        <p className=" text-[1.7rem] max-w-4xl mx-auto leading-[1.6] txtx">
          A selection of products, concepts, and digital experiences
          <br className="hidden md:block" />
          we've designed and built through collaboration, creativity, and
          execution.
        </p>
      </div>

       <div className="mt-20">
          <FeaturedProjectCard />
        </div>

    </section>
  );
};


export default WorkArchive;
