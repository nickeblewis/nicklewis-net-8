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
                      :datetime="post.node.date"
                      class="text-green-700 uppercase font-semibold text-md tracking-wider opacity-75"
                    >{{post.node.date}}</time>
            <h2 class="text-3xl font-bold">
              <g-link :to="post.node.path" class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{ post.node.title }}</g-link>
            </h2>


            <div class="text-lg mb-4">{{ post.node.summary }}</div>

            <div class="mb-8">
              <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
            </div>
          </article>
          <!-- end post -->

          <pagination-posts
            v-if="$page.posts.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.posts.pageInfo.totalPages"
            :currentPage="$page.posts.pageInfo.currentPage"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page, filter: { published: { eq: true }}) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        section
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Nick Lewis - Blog',
  },
  components: {
    PaginationPosts,
  },
}
</script>

