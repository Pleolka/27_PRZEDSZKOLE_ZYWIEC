/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [],
};
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: "Przedszkole Sióstr Serafitek w Żywcu",
    author: "IKS Aleksandra Fabian",
    siteUrl: `https://www.przedszkoleoswiecim.com.pl`,
  },

  /* Your site config here */
  plugins: [
    /* npm install --global gatsby-cli */
    /* MANIFEST
     ** npm install gatsby-plugin-manifest
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },

    /* STYLED COMPONENT
     ** npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components
     */
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    /* SITE MAP
   npm install gatsby-plugin-sitemap
   */
    `gatsby-plugin-sitemap`,

    /* ROBOTS TXT
  npm install --save gatsby-plugin-robots-txt
  */
    "gatsby-plugin-robots-txt",

    /* SHARP
   npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
   */
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,

    /* GATSBY FILE SYSTEM 
   zapytania graphql do plików systemowych
   npm install --save gatsby-source-filesystem
   */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data/`,
      },
    },

    /*GATSBY IMAGE 
   wymagana wcześniej instalacja sharp i source system
   npm install --save gatsby-plugin-image
   */
    "gatsby-plugin-image",

    /*GATSBY PLAYGROUND
   npm install --save gatsby-plugin-playground
   */
    `gatsby-plugin-playground`,

    /*GOOGLE FONT
npm install gatsby-plugin-google-fonts --save
   */
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Francois One`, `Roboto`],
        display: "swap",
      },
    },

    /* CONTENTFUL 
   npm install gatsby-source-contentful
   */
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    /*CONTENTFUL RICH TEXT 
   npm install @contentful/rich-text-react-renderer
   */
    // "@contentful/gatsby-transformer-contentful-richtext",

    /* REMARK 
   npm install gatsby-transformer-remark
   npm install remark-grid-tables
   */
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     // CommonMark mode (default: true)
    //     commonmark: true,
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // Pedantic mode (default: true)
    //     pedantic: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [],
    //   },
    // },

    /* COOKIE
   npm install --save gatsby-plugin-gdpr-cookies
   npm install --save react-cookie-consent
   */
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    // },
  ],
};
