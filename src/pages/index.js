import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ui/project-card"
import Typewriter from "typewriter-effect"

import UserStories from "../misc/UserStories"

const IndexPage = () => {
  const [userType, setUserType] = useState("")
  const [userPurpose, setUserPurpose] = useState("")
  const data = useStaticQuery(graphql`
    query {
      homesplash: file(relativePath: { eq: "home-splash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featuredProjects: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
        filter: {
          fields: { sourceName: { eq: "project" } }
          frontmatter: { featured: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              name
              excerpt
              slug
              feature_image {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const onUserTypeChange = e => {
    if (!e.target.value) return
    let sizer = document.querySelector("#hiddenSelectSizer")
    sizer.classList.toggle("hidden")
    document.querySelector("#hiddenSelectSizer option").innerHTML =
      e.target.value
    e.target.style.width = `${sizer.offsetWidth}px`
    sizer.classList.toggle("hidden")
    setUserType(e.target.value)
  }

  const onUserPurposeChange = e => {
    if (!e.target.value) return
    let sizer = document.querySelector("#hiddenSelectSizer")
    sizer.classList.toggle("hidden")
    document.querySelector("#hiddenSelectSizer option").innerHTML =
      e.target.value
    e.target.style.width = `${sizer.offsetWidth}px`
    sizer.classList.toggle("hidden")
    setUserPurpose(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Cobalt Grid | Digital Development Services" />
      <div className="bg-gray-200 pb-4">
        <section
          style={{
            height: "70vh",
            backgroundImage: `linear-gradient(to bottom,
            rgba(237, 242, 247, 0.15) 0%,
            rgba(237, 242, 247, 0.43) 40%,
            rgba(237, 242, 247, 0.85) 70%,
            rgba(237, 242, 247, 0.99) 90%,
            rgba(237, 242, 247, 1) 110%
        ),url(${data.homesplash.childImageSharp.fluid.src})`,
          }}
          className="bg-homepage-splash flex justify-center"
        >
          <div className="container text-center my-auto text-white">
            <h1>
              We make{" "}
              <div className="text-cobalt-mud">
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={typewriter => {
                    typewriter
                      .typeString("bespoke websites")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("functional applications")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("great digital experiences")
                      .pauseFor(2500)
                      .start()
                  }}
                />
              </div>
            </h1>
            <h3 className="container text-cobalt-primary mt-10 sm:mt-32">
              Cobalt Grid is a web and digital design consultancy, experienced
              in creating unique and functional digital experiences to help
              deliver digital success
            </h3>
          </div>
        </section>
        <div className="container flex justify-evenly">
          <div>
            <Link
              className="border border-cobalt-bright btn hover:bg-teal-700 text-cobalt-bright hover:text-white hover:border-cobalt-primary"
              to="/recent-projects"
            >
              <span className="fa fa-folder"></span> Recent Projects
            </Link>
          </div>
          <div>
            <Link
              className="border border-cobalt-bright btn hover:bg-teal-700 text-cobalt-bright hover:text-white hover:border-cobalt-primary"
              to="contact"
            >
              <span className="fa fa-envelope"></span> Get In Touch
            </Link>
          </div>
        </div>

        <section className="text-center my-16 container">
          <div>
            <h2 className="h-lined">Featured Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {data.featuredProjects.edges.map((project, i) => {
              return <ProjectCard key={i} project={project.node.frontmatter} />
            })}
          </div>
        </section>
        <section className="py-16 text-center bg-cobalt-mud">
          <h2 className="h-lined mb-6 text-white">How can we help?</h2>
          <div className="text-white container">
            <h1>
              {/* eslint-disable */}
              I'm a
              <select
                className={`bg-cobalt-primary focus:outline-none mx-2 ${
                  userType ? "" : "animate-pulse"
                }`}
                style={{ fontSize: "80%" }}
                value={userType}
                aria-label="I'm a"
                onChange={onUserTypeChange}
                onBlur={onUserTypeChange}
              >
                <option disabled value=""></option>
                {UserStories.map((user, index) => {
                  return (
                    <option key={index} value={user.name}>
                      {user.name}
                    </option>
                  )
                })}
              </select>
              {userType && (
                <span className="fade-in leading-tight">
                  , looking to
                  <select
                    className={`bg-cobalt-primary focus:outline-none mx-2 max-w-full ${
                      userPurpose ? "" : "animate-pulse"
                    }`}
                    style={{ fontSize: "80%" }}
                    value={userPurpose}
                    aria-label="What are you looking to do?"
                    onChange={onUserPurposeChange}
                    onBlur={onUserPurposeChange}
                  >
                    <option disabled value=""></option>
                    {UserStories.find(
                      user => user.name === userType
                    ).purposes.map((purpose, index) => {
                      return (
                        <option key={index} value={purpose.name}>
                          {purpose.name}
                        </option>
                      )
                    })}
                  </select>
                </span>
              )}
              <select
                id="hiddenSelectSizer"
                className="hidden"
                aria-label="Do not use"
                style={{ fontSize: "80%" }}
              >
                <option></option>
              </select>
              {/* eslint-enable */}
            </h1>

            {userPurpose && (
              <div className="fade-in bg-cobalt-bright border-8 border-cobalt-primary border-dashed my-4 p-4 text-2xl">
                {
                  UserStories.find(
                    user => user.name === userType
                  ).purposes.find(purpose => purpose.name === userPurpose).text
                }
                <hr className="my-4" />
                <p className="text-3xl font-semibold mb-0">
                  We'd love to work with you
                </p>
                <Link
                  className="btn text-white border-2 hover:bg-cobalt-primary text-2xl"
                  to="contact"
                  state={{ topic: "proposal" }}
                >
                  Get In Touch
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="text-center container my-16 px-3">
          <div>
            <h2 className="h-lined">What we offer</h2>
            <p className="mt-4">
              We provide tailored services that are dependant on your exact
              needs. If you are just looking for someone to assist with
              infrastructure, we'd be happy to help you in any way we can,
              supplying ready-to-go servers and systems, or designing a custom
              architecture for optimal performance.
            </p>
            <p>
              Equally, we're experienced in the full development cycle, from
              start to finish and beyond. We can be with you every step of the
              way, from initial ideation and creative design, development and
              testing, through to deployment, support and maintainance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div>
              <div className="text-6xl mb-4 text-cobalt-bright">
                <span className="fa fa-tools"></span>
              </div>
              <h3>Setup</h3>
              <div className="inline-block">
                <ul className="list-tick text-left">
                  <li>Web Hosting and Servers</li>
                  <li>Domains and DNS</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-6xl mb-4 text-cobalt-bright">
                <span className="fa fa-code"></span>
              </div>
              <h3>Development</h3>
              <div className="inline-block">
                <ul className="list-tick text-left">
                  <li>Content Managment Systems</li>
                  <li>Business and Portfolio Websites</li>
                  <li>Bespoke Applications</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-6xl mb-4 text-cobalt-bright">
                <span className="fa fa-headset"></span>
              </div>
              <h3>Support</h3>
              <div className="inline-block">
                <ul className="list-tick text-left">
                  <li>Technical Troubleshooting</li>
                  <li>SEO and Site Performance Indexing</li>
                  <li>Maintainance and Upgrade Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center w-full mt-2">
            <Link
              className="text-white btn bg-cobalt-bright text-2xl hover:bg-cobalt-primary"
              to="about"
            >
              Find out more
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
