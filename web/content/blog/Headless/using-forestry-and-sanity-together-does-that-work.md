---
title: Using Forestry and Sanity together does that work?
slug: forestry-and-sanity-together
date: 2019-12-19T00:00:00Z
summary: Originally I used Wordpress for all of my CMS needs and then for some projects,
  Drupal. However I was never content with PHP nor the templating systems. Now there
  is JAMStack and I wanted to tell you about the CMS tools I use for this website.
section: JAMStack
sub: headless-cms
published: false
tags:
- JAMStack
- CMS
- Headless

---
The question is can you use both Forestry and Sanity together? The short answer is “yes” and that is the end of the shortest article ever...

That would be a cop-out and I should explain why I wanted to do this and how easy it is to configure, so long as you are already familiar with some VueJS and Gridsome at least.

During 2020 I will gradually explore all of the possible data connections that you can hook up to a Gridsome powered website. Let’s introduce two of them at a high level and some detail will follow through in tutorials yet to be authored:

### Forestry

Use your Github repo as a CMS back-end and allow both your developers and non-developers alike to edit content across your site. All of the data in the background is in fact stored as markdown files and committed to the repository. The sweet thing being that Forestry takes care of the commits, merges and pushes in the background. Your users can easily be trained to edit their own content via the easy to use clean UI which is not cluttered nor intimidating. I am finding it easy to use to write this article on my iPad Pro that is equipped with a Smart Keyboard.

I will write a dedicated article or more on the technical configuration of Forestry at a later time. It is simple though and naturally constrained a little bit by what you can do within the remits of GitHub and Markdown files.

### Sanity.io

Build your own schemas with this powerful backend service that renders a fantastically responsive UI. It is way more powerful than Forestry and does not utilise Markdown. In fact I believe Sanity spins up a Postgres database in the background but you don’t need to know that, your schemas are written in regular JavaScript and can be deployed to the server.

You can then hook up your Sanity instances to Gridsome and consume the data via GraphQL, the same as you can query Markdown based content or other data sources that I have yet to cover or explore.

### Why use both and not just the one?

Well... that is a fair question, I have to admit and it is for the following reasons:

* The JAMStack, in this case a Gridsome powered website such as this can connect to multiple sources. In this case we are hooking up to the internal file system for the site, it’s markdown files and to an external online source, Sanity.io. So we are validating this works and learning from the experience.
* I like to edit and maintain my content in file format, as it allows me to edit my content via a web based admin (Forestry.io) and/or using a desktop based editor like Visual Studio Code. The latter is perfect when editing content and developing the templates for the pages, as I am then mostly working with a combination of JavaScript and Markdown files. The process is familiar to someone like myself or any other experienced web developer.
* I am experimenting with Sanity.io to learn it’s features and for the moment Sanity powers the [photography](/photoblog) section of this website

## Summary

I hope this sheds some light on how you can combine more than one tool together to maintain a website built on the JAMStack as opposed to a more traditional CMS stack. It’s a new way of doing things and there are many more novel ways of powering sites nowadays. It is going to be fun exploring them all!

* \[ \] Proofe read this again and then set it to published: true and deploy 