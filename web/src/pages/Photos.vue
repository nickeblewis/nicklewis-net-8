<template>
  <Layout>
    <div class="py-1 bg-white overflow-hidden">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div
          class="projects container mx-auto text-xl border-t border-gray-500 border-b py-16 mb-8 relative"
        >
          <article
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post border-gray-400 border-b mb-12"
          >
            <time
              :datetime="post.node.publishedAt"
              class="text-green-700 uppercase font-semibold text-md tracking-wider opacity-75"
            >{{post.node.publishedAt}}</time>
            <g-link :to="post.node.slug.current">
              <g-image
                          v-if="post.node.mainImage"
                          alt="Cover image"
                          class="border-2 border-black mb-4"
                          :src="$urlForImage(post.node.mainImage, $page.metadata.sanityOptions).format('jpg').width(800).quality(60).url()"
                        />
            </g-link>
            <h2 class="text-3xl font-bold py-4">
              <g-link
                :to="post.node.path"
                class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >{{ post.node.title }}</g-link>
            </h2>

            <block-content class="text-lg mb-4" :blocks="post.node._rawExcerpt" />

          </article>
          <!-- end post -->
          <div class="px-6 py-4">
            <pagination-posts
              v-if="$page.posts.pageInfo.totalPages > 1"
              base="/photos"
              :totalPages="$page.posts.pageInfo.totalPages"
              :currentPage="$page.posts.pageInfo.currentPage"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query SanityPosts ($page: Int) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost (sortBy: "publishedAt", order: DESC, perPage: 6, page: $page) @paginate {
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
import PaginationPosts from '../components/PaginationPosts'
import BlockContent from '~/components/BlockContent'

export default {
  metaInfo: {
    title: 'Nick Lewis - Photography',
  },
  components: {
    PaginationPosts,
    BlockContent,
  },
}
</script>
