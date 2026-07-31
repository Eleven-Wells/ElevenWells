import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WhatWeDo from '../Components/WhatWeDo'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
      </main>
      <Footer />
    </>
  )
}

export default Home