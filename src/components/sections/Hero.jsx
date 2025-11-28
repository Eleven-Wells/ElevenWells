import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white text-black px-6 pt-28 pb-16 min-h-[calc(100vh-80px)]">

      <div className="max-w-6xl mx-auto">

        {/* TEXT */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Inspiring Stories,<br />
            Ideas, and Knowledge
          </h1>

          <p className="text-black-300 text-lg mt-6 max-w-2xl mx-auto">
            Join our community to discover real-life experiences, insights, and beautifully written articles.
          </p>
        </div>

        {/* ---- 7 IMAGE COLLAGE ---- */}
        <div className="grid grid-cols-5 gap-4">

          {/* TOP EXTRA IMAGE ABOVE FIRST COLUMN */}
          <img
            src="hr.avif"
            className="w-full h-40 object-cover rounded-lg col-start-1 col-end-2"
            alt="A"
          />

          {/* TOP EXTRA IMAGE ABOVE FIFTH COLUMN */}
          <img
            src="hr5.avif"
            className="w-full h-40 object-cover rounded-lg col-start-5 col-end-6"
            alt="G"
          />

          {/* MAIN 5 IMAGES */}
          <img src="hr1.avif" className="w-full h-48 object-cover rounded-lg" alt="1" />
          <img src="hr2.avif" className="w-full h-48 object-cover rounded-lg" alt="2" />
          <img src="hr3.avif" className="w-full h-48 object-cover rounded-lg" alt="3" />
          <img src="hr4.avif" className="w-full h-48 object-cover rounded-lg" alt="4" />
          <img src="hr6.avif" className="w-full h-48 object-cover rounded-lg" alt="5" />

        </div>

      </div>
    </section>
  );
}
