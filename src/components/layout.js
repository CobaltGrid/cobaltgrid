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

      <footer className="bg-cobalt-mud text-white py-6">
        <div className="container px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="font-display text-sm">
                &copy; {new Date().getFullYear()} Cobalt Grid Ltd.
              </p>
              <p className="font-body text-xs mt-2">
                Company Number: 17129070
              </p>
              <p className="font-body text-xs">
                Registered in England and Wales
              </p>
              <p className="font-body text-xs">
                128 City Road, London, United Kingdom, EC1V 2NX
              </p>
            </div>
            <div className="text-right">
              <ul className="font-display text-xs sm:text-base">
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
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
