import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

function Header() {
  const data = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "logo-wide.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <nav className="w-full mx-auto bg-white">
      <div className="container flex flex-wrap items-center justify-between sm:px-16 py-2 px-3">
        <div className="h-12 flex-grow">
          <Link to="/">
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              style={{ height: "100%" }}
              imgStyle={{ width: "auto" }}
              alt="Cobalt Grid Logo" />
          </Link>
        </div>
        <button
          id="nav-toggle"
          className="block lg:hidden"
          onClick={() => {
            document.querySelector("#nav-content").classList.toggle("hidden")
          }}
          aria-label="Toggle Navigation"
        >
          <svg
            className="fill-current h-12 w-12 text-cobalt-mud"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <ul
          id="nav-content"
          className="hidden list-nav w-full lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 text-cobalt-mud"
        >
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/recent-projects">Our Work</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
