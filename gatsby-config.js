module.exports = {
  siteMetadata: {
    title: `Robbie Hilado - Interaction Designer, Front-End Developer, Illustrator and Calligraphy Enthusiast`,
    description: `Robbie Hilado is a Interaction Designer and Front-End Web Developer from the Philippines currently based in Porto, Portugal. Want to collaborate? He'd more than love to grab a coffee.`,
    author: `@sopasdigital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00A5DF`,
        theme_color: `#00A5DF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#00A5DF`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
