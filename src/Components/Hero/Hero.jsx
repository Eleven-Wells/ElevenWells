import './Hero.css'

const Hero = () => {
  return (
    <section className="ew-hero">
      <div className="ew-hero__inner">

        {/* Left Column */}
        <div className="ew-hero__left">
          <p className="ew-hero__body">
            We bring together creative and technical talent to design, build,
            and launch products that solve problems, create value, and shape the future.
          </p>
          <div className="ew-hero__actions">
            <div className="ew-hero__btn-group">
              <a href="/hire" className="ew-hero__btn--hire">Hire</a>
              <a href="/work" className="ew-hero__btn--work">Work</a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="ew-hero__right">
          <div className="ew-hero__shape">
            <h1 className="ew-hero__headline">
              A modern collective building products, opportunities, and
              sustainable digital value.
            </h1>
          </div>
          {/* Corner accent boxes */}
          <div className="geo-accent geo-accent--tl" aria-hidden="true" />
          <div className="geo-accent geo-accent--br" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}

export default Hero