import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WhatWeDo from '../Components/WhatWeDo'
import WorkArchive from '../Components/WorkArchive'
import EcosystemSection from '../Components/EcosystemSection'

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <WhatWeDo />
        <WorkArchive />
        <EcosystemSection />
      </main>
      <Footer />
    </>
  )
}

export default Home