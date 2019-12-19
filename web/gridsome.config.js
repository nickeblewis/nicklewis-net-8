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
  siteName: 'Nick Lewis',
  siteDescription: 'I am a freelance tech writer, web developer and photographer, teaching the world about the wealth of possibility',
  siteUrl: 'https://nicklewis.net',
  templates: {
    SanityPost: [
      { path: '/blog/:year/:month/:slug__current'},
      { name: 'Features', path: '/:slug__current'},
    ],
    Post: [
      { path: "/:section/:sub/:slug" },
      { name: "SubSection", path: "/:section/:slug" },
      { name: "Sanity", path: "/blog/:year/:month/:slug" }
    ],
    Tag: '/tag/:id'
  },
  plugins: [
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
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
            }]
          ]
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    /* {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
      {

      }
    } */
  ],
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }
}
