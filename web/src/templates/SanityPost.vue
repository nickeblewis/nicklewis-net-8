<template>
  <Layout>
    <section class="relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div class="max-w-3xl mx-auto">
            <div>
              <header class="mb-8">
                <!-- Title and excerpt -->
                <div class="text-center md:text-left">
                  <h1 class="h1 mb-4" data-aos="fade-up">{{ $page.post.title }}</h1>
                  <block-content
                    class="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    :blocks="$page.post._rawExcerpt"
                  />
                  <!-- <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> -->
                </div>
                <!-- Article meta -->
                <div class="md:flex md:items-center md:justify-between mt-3">
                  <!-- Author meta -->
                  <div
                    class="flex items-center justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <a href="#0">
                      <img
                        class="rounded-full flex-shrink-0 mr-4"
                        :src="$page.post.authors[0].author.image.asset.url"
                        width="40"
                        height="40"
                        alt="Author 04"
                      />
                    </a>
                    <div>
                      <a
                        class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                        href="#0"
                        >{{ $page.post.authors[0].author.name }}</a
                      >
                      <span class="text-gray-700"> - </span>
                      <span class="text-gray-500">{{ $page.post.publishedAt }}</span>
                    </div>
                  </div>
                  <!-- Article tags -->
                  <div
                    class="flex justify-center mt-4 md:mt-0"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1" v-for="tag in $page.post.tags" :key="tag">
                        <a
                          class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                          >{{ tag }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </header>

              <!-- Article image -->
              <figure class="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                <!-- <img class="w-full" :src="require('@/images/news-single.jpg')" width="1024" height="576" alt="News single" /> -->
                <g-image
                  v-if="$page.post.mainImage"
                  alt="Cover image"
                  class="w-full"
                  :src="
                    $urlForImage($page.post.mainImage, $page.metadata.sanityOptions)
                      .format('jpg')
                      .url()
                  "
                />
              </figure>

              <!-- Article content -->
              <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                <block-content
                  class="text-lg text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  :blocks="$page.post._rawBody"
                />
              </article>

              <masonry :cols="{ default: 2, 1024: 2, 760: 2, 640: 1, 375: 1 }" :gutter="0">
                <div
                  v-for="(image, imageIndex) in items"
                  :key="image.src"
                  @click="setIndex(imageIndex)"
                  class="py-1 sm:px-1"
                >
                  <g-image
                    alt="Cover image"
                    class="border-2 border-black"
                    :src="`${image.src}?w=600`"
                  />
                </div>
              </masonry>
              <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
            </div>
          </div>
          <!-- Related articles -->
          <!-- <aside class="mt-20">
            <div class="max-w-sm mx-auto md:max-w-none"> -->
              <!-- Section title -->
              <!-- <h4 class="h4 py-6 mb-10 border-t border-b border-gray-700">More from Nick Lewis Digital</h4> -->

              <!-- <News /> -->
            <!-- </div>
          </aside> -->
        </div>
      </div>
<Newsletter/>
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
    metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  photos: allSanityPost (sortBy: "publishedAt", order: DESC, limit: 3) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        path
        id
        title
        tags
        publishedAt (format: "MMMM D, Y")
        authors {
          author {
            name
            image {
              asset {
                url
              }
            }
          }
        }
        _rawExcerpt
        _rawBody
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
        slug {
          current
        }
      }
    }
  }
  post: sanityPost (id: $id) {
    title
    _key
    publishedAt (format: "MMMM D, Y")
    tags
    authors {
      author {
        name
        image {
          asset {
            url
          }
        }
      }
    }
    _rawExcerpt
    _rawBody
    images {
          asset {
        _id
        url
      }


      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
        }
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</page-query>

<script>
import Vue from 'vue'
import BlockContent from '~/components/BlockContent'
import News from '../partials/News'
import Bio from '../components/Bio'
import VueMasonry from 'vue-masonry-css'
import Newsletter from './../partials/Newsletter.vue'

//import VueSilentbox from 'vue-silentbox'
// import CoolLightBox from 'vue-cool-lightbox'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(VueMasonry)
//Vue.use(VueSilentbox)

export default {
  name: 'coolboxapp',
  components: {
    News,
    BlockContent,
    Bio,
    VueMasonry,
    Newsletter
  },
  data: function () {
    return {
      index: null,
      items: [],
    }
  },
  methods: {
    setIndex(index) {
      this.index = index
    },
  },
  convert(data) {
    //console.log(data)
  },
  
  created() {
    let nick = JSON.parse(JSON.stringify(this.$page.post))

    nick.images.forEach((element) => {
      this.items.push({ src: element.asset.url, description: '', alt: '', thumbnailWidth: '220px' })
    })

    //console.log(nick.images)
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: 'twitter:title', name: 'twitter:title', content: this.$page.post.title },
        { key: 'og:title', name: 'og:title', content: this.$page.post.title },
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
    }
  },
}
</script>

<style>
/* TODO cpmpare with Post.vue which links to CSS file this seems wasteful */
/* Modified version of: https://github.com/sindresorhus/github-markdown-css */

.post-content {
  /* max-width: 650px; */
  font-size: 1.35rem;
}

.images-wrapper {
  display: flex;
  height: 100000px;
}
.image {
  height: 300px;
  width: 300px;
  display: block;
  background-color: red;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body .anchor {
  float: left;
  line-height: 1;
  margin-left: -20px;
  padding-right: 4px;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #1b1f23;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  line-height: 1.5;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .pl-c {
  color: #6a737d;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #005cc5;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #6f42c1;
}

.markdown-body .pl-s .pl-s1,
.markdown-body .pl-smi {
  color: #24292e;
}

.markdown-body .pl-ent {
  color: #22863a;
}

.markdown-body .pl-k {
  color: #d73a49;
}

.markdown-body .pl-pds,
.markdown-body .pl-s,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sra,
.markdown-body .pl-sr .pl-sre {
  color: #032f62;
}

.markdown-body .pl-smw,
.markdown-body .pl-v {
  color: #e36209;
}

.markdown-body .pl-bu {
  color: #b31d28;
}

.markdown-body .pl-ii {
  background-color: #b31d28;
  color: #fafbfc;
}

.markdown-body .pl-c2 {
  background-color: #d73a49;
  color: #fafbfc;
}

.markdown-body .pl-c2:before {
  content: '^M';
}

.markdown-body .pl-sr .pl-cce {
  color: #22863a;
  font-weight: 700;
}

.markdown-body .pl-ml {
  color: #735c0f;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  color: #005cc5;
  font-weight: 700;
}

.markdown-body .pl-mi {
  color: #24292e;
  font-style: italic;
}

.markdown-body .pl-mb {
  color: #24292e;
  font-weight: 700;
}

.markdown-body .pl-md {
  background-color: #ffeef0;
  color: #b31d28;
}

.markdown-body .pl-mi1 {
  background-color: #f0fff4;
  color: #22863a;
}

.markdown-body .pl-mc {
  background-color: #ffebda;
  color: #e36209;
}

.markdown-body .pl-mi2 {
  background-color: #005cc5;
  color: #f6f8fa;
}

.markdown-body .pl-mdr {
  color: #6f42c1;
  font-weight: 700;
}

.markdown-body .pl-ba {
  color: #586069;
}

.markdown-body .pl-sg {
  color: #959da5;
}

.markdown-body .pl-corl {
  color: #032f62;
  text-decoration: underline;
}

.markdown-body details {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body a {
  background-color: transparent;
}

.markdown-body a:active,
.markdown-body a:hover {
  outline-width: 0;
}

.markdown-body strong {
  font-weight: inherit;
  font-weight: bolder;
}

.markdown-body h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

.markdown-body img {
  border-style: none;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

.markdown-body hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.markdown-body input {
  font: inherit;
  margin: 0;
}

.markdown-body input {
  overflow: visible;
}

.markdown-body [type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body * {
  box-sizing: border-box;
}

.markdown-body input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body strong {
  font-weight: 600;
}

.markdown-body hr {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
  height: 0;
  margin: 15px 0;
  overflow: hidden;
}

.markdown-body hr:before {
  content: '';
  display: table;
}

.markdown-body hr:after {
  clear: both;
  content: '';
  display: table;
}

.markdown-body table {
  border-collapse: collapse;
  border-spacing: 0;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-bottom: 0;
  margin-top: 0;
}

.markdown-body h1 {
  font-size: 32px;
}

.markdown-body h1,
.markdown-body h2 {
  font-weight: 600;
}

.markdown-body h2 {
  font-size: 24px;
}

.markdown-body h3 {
  font-size: 20px;
}

.markdown-body h3,
.markdown-body h4 {
  font-weight: 600;
}

.markdown-body h4 {
  font-size: 16px;
}

.markdown-body h5 {
  font-size: 14px;
}

.markdown-body h5,
.markdown-body h6 {
  font-weight: 600;
}

.markdown-body h6 {
  font-size: 12px;
}

.markdown-body p {
  margin-bottom: 1.5rem;
}

.markdown-body blockquote {
  margin: 0;
}

.markdown-body ol,
.markdown-body ul {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ol ol ol,
.markdown-body ol ul ol,
.markdown-body ul ol ol,
.markdown-body ul ul ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body code,
.markdown-body pre {
  font-family: monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-bottom: 0;
  margin-top: 0;
}

.markdown-body input::-webkit-inner-spin-button,
.markdown-body input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.markdown-body .border {
  border: 1px solid #e1e4e8 !important;
}

.markdown-body .border-0 {
  border: 0 !important;
}

.markdown-body .border-bottom {
  border-bottom: 1px solid #e1e4e8 !important;
}

.markdown-body .rounded-1 {
  border-radius: 3px !important;
}

.markdown-body .bg-white {
  background-color: #fff !important;
}

.markdown-body .bg-gray-light {
  background-color: #fafbfc !important;
}

.markdown-body .text-gray-light {
  color: #6a737d !important;
}

.markdown-body .mb-0 {
  margin-bottom: 0 !important;
}

.markdown-body .my-2 {
  margin-bottom: 8px !important;
  margin-top: 8px !important;
}

.markdown-body .pl-0 {
  padding-left: 0 !important;
}

.markdown-body .py-0 {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}

.markdown-body .pl-1 {
  padding-left: 4px !important;
}

.markdown-body .pl-2 {
  padding-left: 8px !important;
}

.markdown-body .py-2 {
  padding-bottom: 8px !important;
  padding-top: 8px !important;
}

.markdown-body .pl-3,
.markdown-body .px-3 {
  padding-left: 16px !important;
}

.markdown-body .px-3 {
  padding-right: 16px !important;
}

.markdown-body .pl-4 {
  padding-left: 24px !important;
}

.markdown-body .pl-5 {
  padding-left: 32px !important;
}

.markdown-body .pl-6 {
  padding-left: 40px !important;
}

.markdown-body .f6 {
  font-size: 12px !important;
}

.markdown-body .lh-condensed {
  line-height: 1.25 !important;
}

.markdown-body .text-bold {
  font-weight: 600 !important;
}

.markdown-body:before {
  content: '';
  display: table;
}

.markdown-body:after {
  clear: both;
  content: '';
  display: table;
}

.markdown-body > :first-child {
  margin-top: 0 !important;
}

.markdown-body > :last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body blockquote,
.markdown-body dl,
.markdown-body ol,
.markdown-body p,
.markdown-body pre,
.markdown-body table,
.markdown-body ul {
  margin-bottom: 2rem;
}

.markdown-body hr {
  background-color: #a0aec0;
  border: 0;
  height: 1px;
  margin: 24px 0;
  padding: 0;
}

.markdown-body blockquote {
  border-left: 0.25em solid #30855a;
  color: #6a737d;
  padding: 0 1em;
}

.markdown-body blockquote > :first-child {
  margin-top: 0;
}

.markdown-body blockquote > :last-child {
  margin-bottom: 0;
}

.markdown-body kbd {
  background-color: #fafbfc;
  border: 1px solid #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
  color: #444d56;
  display: inline-block;
  font-size: 11px;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.markdown-body h1 {
  font-size: 2em;
}

.markdown-body h2 {
  font-size: 1.5em;
}

.markdown-body h3 {
  font-size: 1.25em;
}

.markdown-body h4 {
  font-size: 1em;
}

.markdown-body h5 {
  font-size: 0.875em;
}

.markdown-body h6 {
  color: #6a737d;
  font-size: 0.85em;
}

.markdown-body ol,
.markdown-body ul {
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ol ul,
.markdown-body ul ol,
.markdown-body ul ul {
  margin-bottom: 0;
  margin-top: 0;
}

.markdown-body li {
  word-wrap: break-all;
}

.markdown-body ul li {
  list-style-type: disc;
}

.markdown-body ol li {
  list-style-type: decimal;
}

.markdown-body li > p {
  margin-top: 16px;
}

.markdown-body li + li {
  margin-top: 0.25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
  margin-top: 16px;
  padding: 0;
}

.markdown-body dl dd {
  margin-bottom: 16px;
  padding: 0 16px;
}

.markdown-body table {
  display: block;
  overflow: auto;
  width: 100%;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table td,
.markdown-body table th {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

.markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body img {
  background-color: #fff;
  box-sizing: content-box;
  max-width: 100%;
}

.markdown-body img[align='right'] {
  padding-left: 20px;
}

.markdown-body img[align='left'] {
  padding-right: 20px;
}

.markdown-body code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}

.markdown-body pre {
  word-wrap: normal;
}

.markdown-body pre > code {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  white-space: pre;
  word-break: normal;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 75%;
  line-height: 1.5;
  overflow: auto;
  padding: 16px;
}

.markdown-body pre code {
  background-color: transparent;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
  max-width: auto;
  overflow: visible;
  padding: 0;
  word-wrap: normal;
}

.markdown-body .commit-tease-sha {
  color: #444d56;
  display: inline-block;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  font-size: 90%;
}

.markdown-body .blob-wrapper {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow-x: auto;
  overflow-y: hidden;
}

.markdown-body .blob-wrapper-embedded {
  max-height: 240px;
  overflow-y: auto;
}

.markdown-body .blob-num {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: rgba(27, 31, 35, 0.3);
  cursor: pointer;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  font-size: 12px;
  line-height: 20px;
  min-width: 50px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: right;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 1%;
}

.markdown-body .blob-num:hover {
  color: rgba(27, 31, 35, 0.6);
}

.markdown-body .blob-num:before {
  content: attr(data-line-number);
}

.markdown-body .blob-code {
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  vertical-align: top;
}

.markdown-body .blob-code-inner {
  color: #24292e;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  font-size: 12px;
  overflow: visible;
  white-space: pre;
  word-wrap: normal;
}

.markdown-body .pl-token.active,
.markdown-body .pl-token:hover {
  background: #ffea7f;
  cursor: pointer;
}

.markdown-body kbd {
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-bottom-color: #c6cbd1;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #c6cbd1;
  color: #444d56;
  display: inline-block;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

.markdown-body :checked + .radio-label {
  border-color: #0366d6;
  position: relative;
  z-index: 1;
}

.markdown-body .tab-size[data-tab-size='1'] {
  -moz-tab-size: 1;
  tab-size: 1;
}

.markdown-body .tab-size[data-tab-size='2'] {
  -moz-tab-size: 2;
  tab-size: 2;
}

.markdown-body .tab-size[data-tab-size='3'] {
  -moz-tab-size: 3;
  tab-size: 3;
}

.markdown-body .tab-size[data-tab-size='4'] {
  -moz-tab-size: 4;
  tab-size: 4;
}

.markdown-body .tab-size[data-tab-size='5'] {
  -moz-tab-size: 5;
  tab-size: 5;
}

.markdown-body .tab-size[data-tab-size='6'] {
  -moz-tab-size: 6;
  tab-size: 6;
}

.markdown-body .tab-size[data-tab-size='7'] {
  -moz-tab-size: 7;
  tab-size: 7;
}

.markdown-body .tab-size[data-tab-size='8'] {
  -moz-tab-size: 8;
  tab-size: 8;
}

.markdown-body .tab-size[data-tab-size='9'] {
  -moz-tab-size: 9;
  tab-size: 9;
}

.markdown-body .tab-size[data-tab-size='10'] {
  -moz-tab-size: 10;
  tab-size: 10;
}

.markdown-body .tab-size[data-tab-size='11'] {
  -moz-tab-size: 11;
  tab-size: 11;
}

.markdown-body .tab-size[data-tab-size='12'] {
  -moz-tab-size: 12;
  tab-size: 12;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item + .task-list-item {
  margin-top: 3px;
}

.markdown-body .task-list-item input {
  margin: 0 0.2em 0.25em -1.6em;
  vertical-align: middle;
}

.markdown-body hr {
  border-bottom-color: #eee;
}

.markdown-body .pl-0 {
  padding-left: 0 !important;
}

.markdown-body .pl-1 {
  padding-left: 4px !important;
}

.markdown-body .pl-2 {
  padding-left: 8px !important;
}

.markdown-body .pl-3 {
  padding-left: 16px !important;
}

.markdown-body .pl-4 {
  padding-left: 24px !important;
}

.markdown-body .pl-5 {
  padding-left: 32px !important;
}

.markdown-body .pl-6 {
  padding-left: 40px !important;
}

.markdown-body .pl-7 {
  padding-left: 48px !important;
}

.markdown-body .pl-8 {
  padding-left: 64px !important;
}

.markdown-body .pl-9 {
  padding-left: 80px !important;
}

.markdown-body .pl-10 {
  padding-left: 96px !important;
}

.markdown-body .pl-11 {
  padding-left: 112px !important;
}

.markdown-body .pl-12 {
  padding-left: 128px !important;
}

.silentbox-item {
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
}

.silentbox-item {
  max-height: 145px;
  border-radius: 0.5rem;
  margin-right: 1rem;
  overflow: hidden;
}
</style>
