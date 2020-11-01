<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2" data-aos="fade-up">Latest photography, articles and more</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="fade-up" v-for="post in $page.photos.edges"
                    :key="post.id">
              <header>
                <router-link :to="post.node.slug.current" class="block mb-6">
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
                  <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">{{post.node.title}}</router-link>
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

            <!-- 2nd article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                    <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('@/images/news-02.jpg')" width="352" height="198" alt="News 02" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out" href="#0">Desing</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">The quick brown fox jumped over the lazy dog.</router-link>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img class="rounded-full flex-shrink-0 mr-4" :src="require('@/images/news-author-02.jpg')" width="40" height="40" alt="Author 02" />
                </a>
                <div class="font-medium">
                  <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Markus Barker</a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 12, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 3rd article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                    <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('@/images/news-03.jpg')" width="352" height="198" alt="News 03" />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out" href="#0">Tutorials and articles</a>
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">The quick brown fox jumped over the lazy dog.</router-link>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img class="rounded-full flex-shrink-0 mr-4" :src="require('@/images/news-author-03.jpg')" width="40" height="40" alt="Author 03" />
                </a>
                <div class="font-medium">
                  <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Lisa Crockett</a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 9, 2020</span>
                </div>
              </footer>
            </article>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  name: 'News',
}
</script>