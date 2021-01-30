require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cobalt Grid`,
    description: `Cobalt Grid is a creative studio based around simplicity, design and functionality. We offer digital design services for the digital market - largely based around the web. We offer solutions to harness the power of the web, from the start to end.`,
    author: `Cobalt Grid`,
  },
  plugins: [
    /*
      SEO
    */
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /*
      Images
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cobaltgrid`,
        short_name: `cobaltgrid`,
        start_url: `/`,
        background_color: `#006F7F`,
        theme_color: `#00B5FF`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon-square.png`, // This path is relative to the root of the site.
      },
    },
    /*
      Content
    */
    `gatsby-transformer-remark`,
    `gatsby-remark-source-name`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/content/projects/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-78832237-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}
