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
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Guide', // Required
        baseDir: './content/guides', // Where .md files are located
        pathPrefix: '/guides', // Add route prefix. Optional
        template: './src/templates/Guide.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          series: {
            typeName: 'Series',
            create: true,
          },
        },
        plugins: [
          [
            'remark-toc',
            {
              heading: 'Buildings',
              maxDepth: 2,
            },
          ],
        ],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Code', // Required
        baseDir: './content/code', // Where .md files are located
        template: './src/templates/Code.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          series: {
            typeName: 'Series',
            create: true,
          },
        },
        plugins: [
          [
            'remark-toc',
            {
              heading: 'Coding',
              maxDepth: 2,
            },
          ],
        ],
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/blog",
        template: "./src/templates/Post.vue",
        pathPrefix: "/blog",
        route: "/:slug",
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
        ]
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'SinglePage', // Required
        baseDir: './content/pages', // Where .md files are located
        pathPrefix: '/', // Add route prefix. Optional
        template: './src/templates/SinglePage.vue'
        // plugins: [
        //   [
        //     'remark-toc',
        //     {
        //       heading: 'Buildings',
        //       maxDepth: 2,
        //     },
        //   ],
        // ],
      }
    }
    /* {
      // Create posts from content files
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
