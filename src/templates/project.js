import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Slider from "../components/ui/slider"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./project.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        excerpt
        tech
        feature_image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slider {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        images {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
      html
    }
  }
`

const Project = ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <SEO title={`${project.frontmatter.name}`} />
      <div className="container">
        <div className="flex flex-wrap -mx2">
          <div className="flex items-center w-full md:w-1/2 px-2">
            <Image
              imgStyle={{ objectFit: "contain" }}
              style={{ maxWidth: "500px", maxHeight: "200px" }}
              className="my-auto mx-auto w-full"
              fluid={project.frontmatter.feature_image.childImageSharp.fluid}
              alt={`${project.frontmatter.name} Feature Image`}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1>{project.frontmatter.name}</h1>
            <p className="text-cobalt-gray font-display">
              {project.frontmatter.excerpt}
            </p>

            {project.frontmatter.tech && (
              <div className="mt-5">
                <h4 className="text-gray-400 tracking-widest font-bold">
                  TECHNOLOGY
                </h4>
                <div className="mt-2">
                  {project.frontmatter.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full py-2 px-4 bg-gray-300 mr-2 text-cobalt-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap -mx2 mt-8">
          <div
            className="w-full flex-grow px-2 font-display project-text"
            dangerouslySetInnerHTML={{ __html: project.html }}
          ></div>
          <div className="w-full lg:w-1/2 px-2 mb-2 flex-none">
            {project.frontmatter.slider && (
              <Slider images={project.frontmatter.slider} />
            )}
            {project.frontmatter.images &&
              project.frontmatter.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full relative ${index > 0 ? "mt-10" : ""}`}
                  >
                    <div className="aspect-ratio-16/9" />
                    <div className="absolute left-0 right-0 w-full my-auto top-0 bottom-0 shadow-lg">
                      <Image
                        fluid={image.childImageSharp.fluid}
                        style={{
                          position: "initial",
                          height: "100%",
                          width: "100%",
                        }}
                        imgStyle={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
