// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Nick Lewis - JavaScript Developer and Photographer',
  siteDescription: 'I am a freelance tech writer, web developer and photographer, teaching the world about the wealth of possibility',
  siteUrl: 'https://nicklewis.net',
  templates: {
    SanityPost: [
      { path: '/blog/:year/:month/:slug__current'},      
      { name: 'Features', path: '/:slug__current'},
    ]
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-08-10'
          }
        }
      }
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
   
  ],
  
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }
}
