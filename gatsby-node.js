/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'sourceName',
      value: fileNode.sourceInstanceName,
    });
};


// Add custom fields
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter @infer {
      images: [File] @fileByRelativePath
      slider: [File] @fileByRelativePath
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        projects: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "project" } } }
        ) {
          edges {
            node {
              fields {
                sourceName
              }
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create project pages
  let projects = result.data.projects.edges
  projects.forEach(project => {
    createPage({
      path: `/project/${project.node.frontmatter.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.node.frontmatter.slug,
      },
    })
  })
}
