import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Image404 from "../images/404.svg"

const Page404 = () => (
  <Layout>
    <Seo title="Not Found" />
    <div className="container h-full my-auto">
      <div className="flex justify-center">
        <div className="flex flex-col items-center md:flex-none md:relative">
          <div
            className="text-center p-4 md:p-0 md:text-left md:absolute"
            style={{ top: "15%", right: "-10%" }}
          >
            <h1 className="text-cobalt-bright">Uh oh, not found!</h1>
            <p className="font-semibold mb-2">
              Feeling lost in the digital world? We can help with that.
            </p>
            <Link
              to="/"
              className="text-cobalt-primary hover:text-white btn border border-cobalt-primary py-1 text-2xl hover:bg-cobalt-bright hover:border-cobalt-bright"
            >
              Home
            </Link>
          </div>
          <img
            src={Image404}
            alt="404"
            className="w-2/3 md:w-full"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default Page404;