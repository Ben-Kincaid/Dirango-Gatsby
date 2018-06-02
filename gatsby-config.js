module.exports = {
  siteMetadata: {
    title: `Dirango`,
    phrase: `Let's build something stellar together.`
  },
  
  plugins: [
    //Gatsby Netlify Plugin - used to get content from Netlify
    'gatsby-plugin-netlify-cms',

    'gatsby-plugin-react-helmet',

    //Gatsby Sass Plugin - used to compile SASS/SCSS
    'gatsby-plugin-sass',

    //Gatsby Filesystem Source - used to access filesystem of project(to grab .md files)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
       
      },
    },

    // to transform markdown to HTML
    'gatsby-transformer-remark'
  ],
}
