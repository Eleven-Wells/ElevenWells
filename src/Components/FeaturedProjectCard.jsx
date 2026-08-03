// import project from "../assets/nook-preview.png";


const FeaturedProjectCard = () => {
  return (

    <div
      className="overflow-hidden rounded-[40px]"
      style={{
        background:
          "radial-gradient(circle at top, #7b2c2f 0%, #32181c 55%, #121212 100%)",
      }}
    >

      <div className="grid lg:grid-cols-[340px_1fr]">

        {/* Left Side */}

        <div className="flex min-h-[650px] flex-col justify-center px-12 text-white">

         <h1 className="text-4xl font-bold txtx"> PAIDINK</h1>

          <p className="mt-10 max-w-[220px] text-lg leading-8 text-gray-300">
            Read. Write. Engage.
            On Nook, attention isn't wasted,
            it's returned.
          </p>

        </div>

        {/* Right */}

        <div className="relative flex items-end">

         
        </div>

      </div>

    </div>

  );
};

export default FeaturedProjectCard;