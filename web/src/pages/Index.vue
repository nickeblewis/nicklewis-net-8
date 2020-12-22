<template>
  <Layout>
      <!-- Page sections -->
      <HeroHome />
      <!-- <Process /> -->
      <!-- <FeaturesHome /> -->
      <!-- <Tabs /> -->
      <!-- <Target /> -->
      <News/>
      <Newsletter />
  </Layout>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
    homeBio
    author {
      name
      image {
        asset {
          _id
          url
        }
        hotspot {
          x
          y
          width
          height
        }
        crop {
          top
          left
          right
          bottom
        }
      }
    }
  }
}
</static-query>

<page-query>
query HomePosts {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  photos: allSanityPost (sortBy: "publishedAt", order: DESC, limit: 12) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
}
</page-query>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
import BlockContent from '~/components/BlockContent'
import HeroHome from './../partials/HeroHome.vue'
import Process from './../partials/Process.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import Tabs from './../partials/Tabs.vue'
import Target from './../partials/Target.vue'
import News from './../partials/News.vue'
import Newsletter from './../partials/Newsletter.vue'

Vue.use(VueMasonry)

export default {
  components: {
    HeroHome,
    Process,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    VueMasonry,
    BlockContent
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch((error) => alert(error))
    },
  },
  metaInfo: {
    title: 'Nick Lewis',
  },
}
</script>

