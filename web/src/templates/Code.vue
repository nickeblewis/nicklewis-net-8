<template>
  <Layout>
    <article>
      <!-- COVER IMAGE -->
      <!-- <div id="image" class="px-4"> -->
        <!-- <div
          class="hidden w-full border-2 border-black image-cover guide-cover mb-8 max-h-full sm:flex sm:items-center sm:justify-center"
          v-if="$page.code.coverImage"
          :style="`background-image: url('${$page.code.coverImage.src}')`"
        > -->
          <!-- <span
            class="stripe-shadow-white max-w-xl mx-auto p-4 font-bold text-3xl uppercase leading-none tracking-wide"
          >{{$page.code.city}}</span> -->
        <!-- </div> -->
      <!-- </div> -->
      <div class="py-1 bg-white overflow-hidden">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div class="container mx-auto">

            <VueRemarkContent class="markdown-body mb-8" />
            <div class="mb-8">
              <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
            </div>
          </div>

          </div>
        </div>
      </div>

    </article>
  </Layout>
</template>

<page-query>
query Code ($id: ID!) {
  code(id: $id) {
    title
    summary
    city
    chapter
    series {
      id
      belongsTo {
        totalCount
        edges {
          node {
            ...on Code {
              id
              title
              path
              chapter
            }
          }
        }
      }
    }
    coverImage (width: 1920, height: 800, quality: 90)
  }
}
</page-query

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.code.title,
      meta: [
        { key: "description", name: "description", content: this.$page.code.summary },
        { key: "twitter:description", name: "twitter:description", content: this.$page.code.summary },
        { key: "twitter:title",name: "twitter:title", content: this.$page.code.title },
        { key: "twitter:image",name: "twitter:image", content: this.$page.code.coverImage.src },
        { key: "og:type",name: "og:type", content: "article" },
        { key: "og:title",name: "og:title", content: this.$page.code.title },
        { key: "og:description", name: "og:description", content: this.$page.code.summary },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.code.date
        },
        { key: "og:image", name: "og:image",content: this.$page.code.coverImage.src },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  }
}
</script>

<style src="../css/github-markdown.css" />
