import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="ew-header">
      <div className="ew-header__inner">

        {/* Logo */}
        <a href="/" className="ew-header__logo">
          <div className="ew-header__logo-mark">
            <span className="logo-block" />
            <span className="logo-block" />
            <span className="logo-block" />
            <span className="logo-block" />
          </div>
          <span className="ew-header__logo-text">ELEVENWELLS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="ew-header__nav">
          <a href="/work">Work Archive</a>
          <a href="/about">About Us</a>
          <a href="/what-we-do">What We Do</a>
          <a href="/collaborate">Collaborate</a>
        </nav>

        {/* Desktop CTA */}
        <a href="/get-started" className="ew-header__cta">
          Get Started
        </a>

        {/* Hamburger */}
        <button
          className="ew-header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open-1' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open-2' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open-3' : ''}`} />
        </button>

      </div>

      {/* Mobile Nav Drawer */}
      <div className={`ew-header__mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="/work" onClick={() => setMenuOpen(false)}>Work Archive</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</a>
        <a href="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</a>
        <a href="/get-started" className="ew-mobile-cta" onClick={() => setMenuOpen(false)}>Get Started</a>
      </div>
    </header>
  )
}

export default Header
