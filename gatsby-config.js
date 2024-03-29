module.exports = {
  siteMetadata: {
    title: 'HAE Consultants',
    description: 'BIM Landscape Consultants',
    author: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-minify',
    // {
    //   resolve: 'gatsby-plugin-gdpr-cookies',
    //   options: {
    //     environments: ['production', 'development'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hae Consultants',
        short_name: 'Hae Consultants',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ],
};
