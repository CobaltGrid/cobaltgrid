/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>

      <section className="bg-cobalt-mud h-16 text-white">
        <div className="flex container items-center px-3 h-full font-display text-xs sm:text-base">
          <div>
            &copy; {new Date().getFullYear()} Alexander Toff trading as Cobalt
            Grid
          </div>
          <div className="text-right ml-auto">
            <ul>
              <li className="inline-block p-1 sm:p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="inline-block p-1 sm:p-3">
                <Link to="/privacy-policy">Privacy</Link>
              </li>
              <li className="inline-block p-1 sm:p-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
