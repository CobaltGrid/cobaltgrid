import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ui/project-card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      recentProjects: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 9
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

  return (
    <Layout>
      <SEO title="Recent Projects" />
      <section className="text-center mt-8 container">
        <div>
          <h1 className="h-lined">Recent Work</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data.recentProjects.edges.map((project, i) => {
            return <ProjectCard key={i} project={project.node.frontmatter} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
