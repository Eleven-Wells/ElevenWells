import React from 'react'
import Categories from "../components/sections/Categories";
import HowItWorks from "../components/sections/HowItWorks";
import FeaturedPosts from "../components/sections/FeaturedPosts";
import Hero from '../components/sections/Hero';


const Home = () => {
  return (
    <div>
        <Hero />
        <Categories />
        <HowItWorks />
        <FeaturedPosts />

    </div>
  )
}

export default Home