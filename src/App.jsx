import React from 'react'
import Navigation from './components/ui/Navigation.jsx'
import Footer from './components/ui/Footer.jsx'

import FeaturedPosts from './components/sections/FeaturedPosts.jsx'
import LatestPost from './components/sections/LatestPost.jsx'
import Home from './components/sections/Home.jsx'
import Contact from './components/sections/Contact.jsx'
import Discover from './components/sections/Discover.jsx'

const App = () => {
  return (
    <div>
      <Navigation />

      <section id="home">
        <Home />
      </section>

      <section id="discover">
        <Discover />
      </section>

      <section id="featured">
        <FeaturedPosts />
      </section>

      <section id="latest">
        <LatestPost />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
