module.exports = {
  siteMetadata: {
    title: `Muhajir's Personal Website`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'muhajirframe | Muhammad Muhajir',
        short_name: 'muhajirframe',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icons: [
          {
            src: '/favicon-128.png',
            type: 'image/png',
            sizes: '128x128'
          },
          {
            src: '/apple-touch-icon-152x152.png',
            type: 'image/png',
            sizes: '152x152'
          },
          {
            src: '/mstile-144x144.png',
            type: 'image/png',
            sizes: '144x144'
          },
          {
            src: '/favicon-196x196.png',
            type: 'image/png',
            sizes: '196x196'
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
}
