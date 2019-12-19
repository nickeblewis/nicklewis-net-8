---
title: Codesandbox
slug: codesandbox
date: 2019-12-19
published: true
summary: I am building a new section for this site called code-school and will be embedding source code into articles for you to try out an play with
section: javascript
sub: vuejs
tags:
 - code
 - IDE
---
I am building a new section for this site called code-school and will be embedding source code into articles for you to try out and play with using [Code Sandbox](https://codesandbox.com)

https://codesandbox.io/embed/fervent-shadow-wkcbl?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark

The above example is a Vue application that you can just as easily have created using:

```bash
npm install -g @vue/cli
vue create my-project
```

Sample file that illustrates how code looks in a block

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Nick Lewis',
  siteDescription: 'Web development',
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
            [ 'gridsome-plugin-remark-codesandbox' ],
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ],
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter', 'Gist', 'Codepen', 'Spotify'],
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
  ]
```

etc etc