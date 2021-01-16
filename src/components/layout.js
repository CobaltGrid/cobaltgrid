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
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow-1 flex-auto">{children}</div>

      <section className="bg-cobalt-mud h-16 text-white">
        <div className="grid grid-cols-2 container h-full font-display">
          <div className="inline-block my-auto">
            &copy; 2020 Alexander Toff trading as Cobalt Grid
          </div>
          <div className="inline-block my-auto text-right">
            <ul>
              <li className="inline-block p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="inline-block p-3">
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
