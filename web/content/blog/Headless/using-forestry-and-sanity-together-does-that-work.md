---
title: Using Forestry and Sanity together does that work?
slug: forestry-and-sanity-together
date: 2019-12-19T00:00:00Z
summary: Originally I used Wordpress for all of my CMS needs and then for some projects,
  Drupal... However I was never content (excuse the pun) with PHP nor any of its templating systems. Now there
  is JAMStack and I wanted to tell you about the CMS tools I use for this website.
section: JAMStack
sub: headless-cms
published: true
tags:
- JAMStack
- CMS
- Headless

---
The question is can you use both [Forestry](https://forestry.io) and [Sanity](https://sanity.io) together? The short answer is “yes” and that is the end of the shortest article ever...

That would be a cop-out and I should explain why I wanted to do this and how easy it is to configure, so long as you are already familiar with some VueJS and Gridsome at least.

During 2020 I will gradually explore all of the possible data connections that you can hook up to a Gridsome powered website. Let’s introduce two of them at a high level and some detail will follow through in tutorials yet to be authored:

### Forestry

Use your Github repo as a CMS back-end and allow both your developers and non-developers alike to edit content across your site. All of the data in the background is in fact stored as markdown files and committed to your chosen repository. The sweet thing being that Forestry takes care of the commits, merges and pushes in the background. Your users can easily be trained to edit their own content via the easy to use clean UI which is not cluttered nor intimidating. I am finding it easy to use to write this article on my iPad Pro that is equipped with a Smart Keyboard but later I could switch to a laptop or desktop PC to continue working on this post.

I will write a dedicated article or more on the technical configuration of Forestry at a later time. It is simple though and naturally is constrained a little bit by what you can do within the remits of GitHub and Markdown files. It does mean that you can operate a site using just files and not need a database at all.

### Sanity.io

Build your own schemas with this powerful backend service that renders a fantastically responsive UI. It is way more powerful than Forestry and does not utilise Markdown. In fact I believe Sanity spins up a Postgres database in the background but you don’t need to know that, your schemas are written in regular JavaScript and can be deployed to the server. Naturally this is more technical to setup but as a consultant I can build a system that is easy for my clients to log into and crack on with editing their sites. Once they've got the knack of it, they are able to do a lot without my intervention.

You can then hook up your Sanity instances to Gridsome and consume the data via GraphQL, the same as you can query Markdown based content or other data sources that I have yet to cover or explore. In fact it is worth pointing out here that the front-end doesn't need to cater for either datasource in an explicit way because that is the beauty of GraphQL. 

Ok I am growing aware of the fact that some more step-by-step guides would be handy here to explain some of the concepts I've merely touched upon here. 

### Why use both and not just the one?

Well... that is a fair question, I have to admit but it is for the following good reasons:

* The JAMStack, in this case a Gridsome powered website such as this can connect to multiple sources. In this case we are hooking up to the internal file system for the site, it’s markdown files and to an external online source, Sanity.io. So we are validating this works and learning from the experience.
* I like to edit and maintain my content in file format, as it allows me to edit my content via a web based admin (Forestry.io) and/or using a desktop based editor like Visual Studio Code. The latter is perfect when editing content and developing the templates for the pages, as I am then mostly working with a combination of JavaScript and Markdown files. The process is familiar to someone like myself or any other experienced web developer.
* I am experimenting with Sanity.io to learn it’s features and for the moment Sanity powers the [photography](/photoblog) section of this website

All of the above do enable a back-office system that is user friendly and can be utilised by people who aren't web developers such as my 77 year old Dad and his fellow Jazz Club friends!

## How about some code?

No problem, take a gander at this...

```vue
<template>
</template>

<page-query>
query HomePosts {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  photos: allSanityPost (sortBy: "publishedAt", order: DESC, limit: 6) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        publishedAt (format: "MMMM D, Y")      
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
  posts: allPost (limit: 4, sortBy: "date", order: DESC, filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        published
        section
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
</script>

<style>
</style>
```

I have for brevity not included the code for the template, script or style parts so that I could share with you the GraphQL query. It illustrates how you can extract data from two different sources, so in the above example ```photos``` is taken from ```allSanityPost``` which is of course our remotely hosted Sanity database. Then there is ```posts``` which is derived from the filesystem and our markdown files ```allPosts```. If you take a look at the homepage for this site, this will explain how some content comes from Sanity and the rest is internal.

So in order to show the photos on the homepage:

```vue
<template>
  <masonry
  :cols="{default: 2, 1000: 3, 700: 1}"
  :gutter="{default: '30px', 700: '15px'}">
    <div
      v-for="photo in $page.photos.edges"
      :key="photo.id"
      class="m-3 rounded-lg shadow-lg overflow-hidden"
    >
      <g-link :to="photo.node.slug.current">
        <g-image
          v-if="photo.node.mainImage"
          alt="Cover image"
          class="justify-center"
          :src="$urlForImage(photo.node.mainImage, $page.metadata.sanityOptions).format('jpg').width(400).quality(90).url()"
        />
      </g-link>
    </div>
  </masonry>
</template>
```

```masonry``` is a third party plugin that I use to render the pinterest style grid, very popular these days in UIs. I then iterate through ```$page.photos.edges``` using the ```id``` as the key for each element. I am using [Tailwind](https://tailwindcss.com) for my CSS library which I will talk about in detail another time. Then each photo is built as a link and I make use of a utility function ```$urlForImage``` to construct the path for the image which makes use of Sanity's image processing and caching pipeline, to scale the images.


## Summary

I hope this sheds some light on how you can combine more than one tool together to maintain a website built on the JAMStack as opposed to a more traditional CMS stack. It’s a new way of doing things and does need a little explanation and I will continue to write more articles like this to help anyone who is looking into working with these tools and methods of web development.