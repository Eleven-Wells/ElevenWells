import React from "react";
import Images from "../ui/Images";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f7fcff] w-full py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight whitespace-nowrap">
            Get the latest gists, blogs
            <br />
            and articles on any topic
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            A vibrant place where you'll find the latest gist, hot trends,
            creative ideas and inspiring thoughts to fuel your day
          </p>

          <button className="mt-6 bg-green-800 text-white px-8 py-3 rounded-full shadow hover:bg-green-900 transition-colors">
            Read Article
          </button>

          <div className="mt-7">
            <Images />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
