/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: 'CerebroWeek ',
      author: 'Hugo Vidana'
  },
  
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
      },
    }, 

  ],

  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-transformer-remark",
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
          }
        }
        ]
      }
    },
  ]
}
