<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <BlogList />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
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
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import BlogList from './../partials/BlogList.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    PageIllustration,
    BlogList,
    Footer,
  },
};
</script>
