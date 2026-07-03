const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background placeholder */}
      <div className="absolute inset-0 bg-[#2c3a47] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-2xl px-6 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl md:text-5xl leading-snug">
          A modern collective building products, opportunities, and sustainable digital value.
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          We bring together creative and technical talent to design, build, and launch
          products that solve problems, create value, and shape the future.
        </p>
      </div>

    </section>
  )
}

export default Hero