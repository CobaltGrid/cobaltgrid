import { useStaticQuery, graphql, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/recent-projects", label: "Our Work" },
  { to: "/contact", label: "Contact Us" },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const data = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "logo-wide.png"}) {
    childImageSharp {
      gatsbyImageData(width: 220, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      {/* Main bar — never wraps */}
      <div className="container flex items-center justify-between sm:px-16 py-2 px-3">
        <div className="h-12 flex-shrink-0">
          <Link to="/">
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              style={{ height: "100%" }}
              imgStyle={{ width: "auto" }}
              alt="Cobalt Grid Logo"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex lg:items-center list-nav text-cobalt-mud">
          {navLinks.map(({ to, label, exact }) => (
            <li key={to} className="nav-link">
              <Link to={to} activeClassName="!text-cobalt-bright" partiallyActive={!exact}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle Navigation"
          aria-expanded={menuOpen}
        >
          <svg
            className="fill-current h-10 w-10 text-cobalt-mud"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden border-t border-gray-100 ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="list-nav text-cobalt-mud container px-3 py-1">
          {navLinks.map(({ to, label, exact }) => (
            <li key={to} className="nav-link">
              <Link
                to={to}
                activeClassName="!text-cobalt-bright"
                partiallyActive={!exact}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
