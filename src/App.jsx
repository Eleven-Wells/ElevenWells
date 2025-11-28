import React from 'react'
import Navigation from './components/ui/Navigation.jsx'
import Footer from './components/ui/Footer.jsx'
import Home from './pages/Home.jsx'




const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App