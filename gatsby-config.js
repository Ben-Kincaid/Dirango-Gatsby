module.exports = {
  siteMetadata: {
    title: 'Dirango Gatsby',
    phrase: 'Dirango Gatsby'
  },
  
  plugins: [
    
    
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
       
      },
    },
    'gatsby-transformer-remark'
  ],
}
