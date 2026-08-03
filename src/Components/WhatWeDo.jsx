import React from "react";
import { capabilities } from "./Capabilities";

const Tag = ({ text }) => {
  return (
    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 transition-all duration-300 hover:bg-white hover:text-black">
      {text}
    </span>
  );
};

const WhatWeDo = () => {
  // 8×8px green square centered on the intersection
  const Dot = ({ className = "" }) => (
    <div className={`absolute w-3 h-3 bg-green-600 z-10 ${className}`} />
  );

  return (
    <section className="bg-[#07070a] text-white px-6 py-15 md:px-12 lg:px-15">
      <div className="max-w-7xl mx-auto">
        {/* Wireframe wrapper */}
        <div className="relative border-2 border-r border-white/50">
          {/* Header */}
          <div className="text-center pt-6 pb-16 px-6 ">
            <h2 className="pt-10 text-green-600 text-4xl txtx tracking-[0.15em] mb-4">
              What We Do
            </h2>
            <p className="text-gray-200 text-xl leading-8 max-w-3xl mx-auto txt">
              At ElevenWells, we operate as a collaborative startup studio. We
              bring together designers, developers, and creative thinkers to
              design and build digital products that create real value.
            </p>
          </div>

          {/* Row 1 */}
          <div className="relative border-t border-gray-200">
            {/* Dots centered on the horizontal line × vertical border intersection */}
            <Dot className="-top-1 -left-1" />
            <Dot className="-top-1 -right-1" />
            <div className="grid md:grid-cols-[290px_1px_1fr]">
              {/* Left */}
              <div className="px-8 py-20 flex items-center">
                <h3 className="txtx text-2xl text-white">We Build Products</h3>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:flex justify-center items-center">
                <div className="w-px h-40 bg-gray-700"></div>
              </div>

              {/* Right */}
              <div className="px-10 py-20">
                <p className="txt text-xl leading-relaxed text-gray-300">
                  We create and develop our own digital products as a
                  collective, from ideas to execution. Our focus is on building
                  scalable solutions that solve real problems, test ideas, and
                  grow into sustainable ventures. Every product we build is
                  driven by collaboration, experimentation, and long-term
                  vision.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative border-t border-gray-200">
            <Dot className="-top-1 -left-1" />
            <Dot className="-top-1 -right-1" />
            <div className="grid md:grid-cols-[290px_1px_1fr]">
              {/* Left */}
              <div className="px-8 py-20 flex items-center">
                <h3 className="txtx text-2xl text-white">
                  We Build for Clients
                </h3>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:flex justify-center items-center">
                <div className="w-px h-40 bg-gray-700"></div>
              </div>

              {/* Right */}
              <div className="px-10 py-20">
                <p className="txt text-xl leading-relaxed text-gray-300">
                  Beyond our internal products, we partner with founders,
                  startups, and businesses to design and build digital
                  solutions. From websites to full product experiences, we help
                  bring ideas to life with strategy, structure, and execution.
                  We don't just deliver work—we build with intention.
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="relative border-t border-gray-200">
            {/* Dots centered on the horizontal line × vertical border intersection */}
            <Dot className="-top-1 -left-1" />
            <Dot className="-top-1 -right-1" />
            <div className="px-6 py-24">
              <h2 className="text-center text-4xl txtx">Our Capabilities</h2>

              <p className="txt text-3xl mt-5 text-center text-gray-100">
                We combine technical, creative and strategic skills to build.
              </p>

              <div className="mt-20 space-y-12">
                <div>
                  <h4 className="txt mb-6 text-2xl font-semibold text-gray-100">
                    Development
                  </h4>

                  <div className="flex flex-wrap gap-6 txt">
                    {capabilities.development.map((item) => (
                      <Tag key={item} text={item} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="txt mb-6 text-2xl text-gray-100">Design</h4>

                  <div className="flex flex-wrap gap-6 txt">
                    {capabilities.design.map((item) => (
                      <Tag key={item} text={item} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="txt mb-6 text-2xl text-gray-100">Marketing</h4>

                  <div className="flex flex-wrap gap-6 txt">
                    {capabilities.marketing.map((item) => (
                      <Tag key={item} text={item} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="txt mb-6 text-2xl text-gray-100">
                    Operations & Support
                  </h4>

                  <div className="flex flex-wrap gap-6 txt">
                    {capabilities.operations.map((item) => (
                      <Tag key={item} text={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
