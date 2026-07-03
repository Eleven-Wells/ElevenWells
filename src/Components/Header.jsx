import { useState } from 'react'
import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="w-8 h-9 bg-neutral-900 rounded-sm p-1 flex flex-col gap-0.5">
    <div className="w-full h-[55%] bg-white rounded-sm" />
    <div className="w-[60%] h-[30%] bg-white rounded-sm" />
  </div>
)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-8 py-5">

      {/* Left — nav links */}
      <nav className="hidden md:flex flex-col gap-1">
        {['Work Archive', 'About Us', 'What We Do', 'Collaborate'].map(link => (
          <Link
            key={link}
            to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-white/70 text-xs tracking-wide hover:text-white transition-colors"
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Center — logo */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-5">
        <Logo />
      </Link>

      {/* Right — CTA + hamburger */}
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-neutral-900 text-white text-xs px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors"
        >
          Get in touch
          <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white rounded" />
          <span className="block w-5 h-0.5 bg-white rounded" />
          <span className="block w-5 h-0.5 bg-white rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900/95 flex flex-col px-8 py-6 gap-4 md:hidden">
          {['Work Archive', 'About Us', 'What We Do', 'Collaborate'].map(link => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/80 text-sm hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-white/80 text-sm hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header