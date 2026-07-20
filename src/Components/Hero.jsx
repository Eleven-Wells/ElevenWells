import React from 'react'
import { motion } from "framer-motion";
import organizationPhoto from "../assets/organization-photo.jpg";

const Hero = () => {
  return (
          <section className="relative h-screen overflow-hidden">

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
            className="text-black font-serif text-4xl leading-tight md:text-6xl lg:text-5xl txt"
          >
            A modern collective building products,
            opportunities and sustainable digital value.
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl txtx"
          >
            We bring together creative and technical talent
            to design, build and launch products that solve
            problems, create value and shape the future.
          </motion.p>

        </div>

      </div>

    </section>

  )
}

export default Hero