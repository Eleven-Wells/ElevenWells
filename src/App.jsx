import React from 'react'
import Navigation from './components/ui/Navigation.jsx'
import Footer from './components/ui/Footer.jsx'

import FeaturedPosts from './components/sections/FeaturedPosts.jsx'
import LatestPost from './components/sections/LatestPost.jsx'

const App = () => {
  return (
    <div>
      <Navigation />
      <FeaturedPosts />
      <LatestPost />
      <Footer />
    </div>
  )
}

export default App