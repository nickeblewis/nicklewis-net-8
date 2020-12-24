<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2" data-aos="fade-up">Photography, Projects and more</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="fade-up" v-for="post in $page.photos.edges"
                    :key="post.id">
              <header>
                <router-link :to="post.node.path" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                    <!-- <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('@/images/news-01.jpg')" width="352" height="198" alt="News 01" /> -->
                    <g-image
                          v-if="post.node.mainImage"
                          alt="Cover image"
                          class="border-2 border-black mb-4"
                          :src="$urlForImage(post.node.mainImage, $page.metadata.sanityOptions).format('jpg').width(800).quality(60).url()"
                        />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1" v-for="tagItem in post.node.tags" :key="tagItem">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">{{tagItem}}</a>
                    </li>
                    
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <router-link :to="post.node.path" class="hover:text-gray-100 transition duration-150 ease-in-out">{{post.node.title}}</router-link>
                </h3>
              </header>
              
              <block-content class="text-lg text-gray-400 flex-grow" :blocks="post.node._rawExcerpt" />
              <footer class="flex items-center mt-4">
                <!-- <a href="#0">
                  <img class="rounded-full flex-shrink-0 mr-4" :src="require('@/images/news-author-01.jpg')" width="40" height="40" alt="Author 01" />
                </a> -->
                <div class="font-medium">
                  <!-- <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Anastasia Dan</a>
                  <span class="text-gray-700"> - </span> -->
                  <span class="text-gray-500">{{post.node.publishedAt }}</span>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
     <pagination-posts
            v-if="$page.photos.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.photos.pageInfo.totalPages"
            :currentPage="$page.photos.pageInfo.currentPage"
          />
  </section>
  
</template>

<script>
import BlockContent from '~/components/BlockContent'
import PaginationPosts from '~/components/PaginationPosts'

export default {
  components: {
    BlockContent,
    PaginationPosts
  },
  name: 'News',
}
</script>