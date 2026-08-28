import paidink from "../assets/paidink-photo.png";
const FeaturedProjectCard = () => {
  return (

    <div
      className="overflow-hidden rounded-t-[40px] rounded-bl-[40px] md:h-[115vh]  sm:h-[650px]
        md:h-[115vh]"
      style={{
        background:
          "linear-gradient( #6E0A0A, #001A1A)",
      }}
    >

      <div className="grid grid-cols-[360px_1fr]">

        {/* Left Side */}

        <div className="flex min-h-[650px] flex-col  justify-end px-12 pb-20  text-white">

         <h1 className="text-6xl md:text-[5.5rem] font-bold zen -rotate-90 mb-10"> PAIDINK</h1>

          <p className="mt-20 max-w-[300px] text-[1.14rem] leading-6 text-gray-300 txt">
            Read. Write. Engage.
            On Paidink, attention isn't wasted,
            it's returned.
          </p>

        </div>

        {/* Right */}

        <div className="relative flex items-end">
         <img
            src={paidink}
            alt=""
            className="w-full h-[32rem] -mb-6"
          />
         
        </div>

      </div>

    </div>

  );
};

export default FeaturedProjectCard;