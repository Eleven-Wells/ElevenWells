import React from "react";
import { motion } from "framer-motion";
import Images from "../ui/Images";

const Home = () => {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f7fcff] w-full py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-semibold leading-tight whitespace-nowrap max-w-xs sm:max-w-none"
            variants={fadeUp}
          >
            Get the latest gists, blogs
            <br />
            and articles on any topic
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 max-w-xl"
            variants={fadeUp}
          >
            A vibrant place where you'll find the latest gist, hot trends,
            creative ideas and inspiring thoughts to fuel your day
          </motion.p>

          <motion.button
            className="mt-6 bg-green-800 text-white px-8 py-3 rounded-full shadow hover:bg-green-900 transition-colors"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Article
          </motion.button>

          <motion.div className="mt-7" variants={fadeUp}>
            <Images />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
