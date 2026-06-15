import './WhoWeAre.css'

const avatars = [1, 2, 3, 4, 5]

const WhoWeAre = () => {
  return (
    <section className="wwa">
      <div className="wwa__inner">

        {/* Left */}
        <div className="wwa__left">
          <h2 className="wwa__heading">Who are we</h2>
          <div className="wwa__avatars">
            {avatars.map(a => (
              <div key={a} className="wwa__avatar" />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="wwa__right">
          <div className="wwa__card">
            <p>
              In a world where talent is everywhere but opportunities are limited,
              11Wells was created to bring ambitious people together under one vision
              to build. We believe collaboration is more powerful than competition.
              By combining creativity, technology, and strategy, we create products
              that not only solve problems but open doors for growth, sustainability,
              and wealth creation. From internal product ideas to client solutions,
              everything we build is driven by intention, execution, and the desire
              to create something meaningful.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhoWeAre