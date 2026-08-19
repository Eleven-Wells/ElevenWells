import React from "react";
import { motion } from "framer-motion";
import organizationPhoto from "../assets/organization-photo.jpg";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";
import member6 from "../assets/member6.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Navbar />
        <img
          src={organizationPhoto}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 pt-24 lg:pt-32">
          <div className="max-w-5xl text-center text-white">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="text-black text-4xl leading-tight md:text-6xl lg:text-5xl txt"
            >
              A modern collective building products, opportunities and
              sustainable digital value.
            </motion.h1>

            <motion.p
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-2xl txtx"
            >
              We bring together creative and technical talent to design, build
              and launch products that solve problems, create value and shape
              the future.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e6] py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Side */}
            <div className="lg:col-span-3">
              <h2 className="txtx text-5xl font-semibold text-black ">
                Who are we
              </h2>

              {/* Team */}
              <div className="mt-10 flex -space-x-4">
                {[member1, member2, member3, member4, member5, member6].map(
                  (member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt=""
                      className="h-14 w-14 rounded-full border-2 border-white object-cover"
                    />
                  ),
                )}
              </div>
            </div>

            {/* Divider */}

            <div className="hidden lg:flex justify-center">
              <div className="w-px bg-gray-400 "></div>
            </div>

            {/* Right Side */}

            <div className="lg:col-span-8">
              <p className="txt text-2xl leading-relaxed text-gray-800">
                In a world where talent is everywhere but opportunities are
                limited, <strong>11Wells</strong> was created to bring ambitious
                people together under one vision to build.
                <br />
                <br />
                We believe collaboration is more powerful than competition. By
                combining creativity, technology, and strategy, we create
                products that not only solve problems but open doors for growth,
                sustainability, and wealth creation.
                <br />
                <br />
                From internal product ideas to client solutions, everything we
                build is driven by intention, execution, and the desire to
                create something meaningful.
              </p>
            </div>
          </div>

          {/* Bottom Divider */}

          <div className="mt-24 border-t border-gray-400"></div>
          <h2 className="zen text-4xl py-8 px-20">PAIDINK</h2>
          <div className=" border-t border-gray-400"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
