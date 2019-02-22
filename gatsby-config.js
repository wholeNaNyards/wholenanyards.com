module.exports = {
  siteMetadata: {
    title: '',
    titleTemplate: '%s | wholeNaNyards',
    description:
      'Nick is a gamer, software engineer, and occasional tech writer. wholeNaNyards.com is a collection of his thoughts, tutorials, and random banter.',
    url: 'https://wholenanyards.com',
    image: '/images/wholenanyards.png',
    twitterUsername: '@wholeNaNyards',
    social: {
      github: 'https://github.com/wholeNaNyards',
      twitch: 'https://www.twitch.tv/NobuffTV',
      twitter: 'https://twitter.com/wholeNaNyards',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets/`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-119974867-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wholeNaNyards',
        short_name: 'wny-blog',
        start_url: '/',
        background_color: '#eeebff',
        theme_color: '#4e939a',
        display: 'standalone',
        icon: './static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:200,400'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'wholenanyards.com',
        protocol: 'https',
        hostname: 'wholenanyards.com',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
