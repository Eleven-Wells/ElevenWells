import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/ui/Navigation.jsx'
import Footer from './components/ui/Footer.jsx'
import BlogPostPage from './components/ui/BlogPostPage.jsx'

import FeaturedPosts from './components/sections/FeaturedPosts.jsx'
import LatestPost from './components/sections/LatestPost.jsx'

const App = () => {
  const location = useLocation()
  const isPostPage = location.pathname.startsWith('/posts/')

  return (
    <div>
      <Navigation />
      {!isPostPage && (
        <>
          <FeaturedPosts />
          <LatestPost />
        </>
      )}
      <Routes>
        <Route path="/posts/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App