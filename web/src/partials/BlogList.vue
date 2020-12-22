<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <!-- <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1" data-aos="fade-up">Refreshing news for developers and designers</h1>
        </div> -->

        <!-- Featured article -->
        <!-- <div class="pb-12 md:pb-20">
          <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <router-link to="/blog-post" class="relative block group" data-aos="fade-right" data-aos-delay="200">
              <div class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
              <figure class="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('@/images/blog-post-01.jpg')" width="540" height="303" alt="Blog post 01">
              </figure>
            </router-link>
            <div data-aos="fade-left" data-aos-delay="200">
              <header>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                    </li>
                  </ul>
                </div>
                <h3 class="h3 text-2xl lg:text-3xl mb-2">
                  <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">Designing a functional workflow at home.</router-link>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img class="rounded-full flex-shrink-0 mr-4" :src="require('@/images/news-author-04.jpg')" width="40" height="40" alt="Author 04">
                </a>
                <div>
                  <a class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Chris Solerieu</a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 19, 2020</span>
                </div>
              </footer>
            </div>
          </article>
        </div> -->

        <News />

        <!-- Articles list -->
        
        <pagination-posts
            v-if="$page.posts.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.posts.pageInfo.totalPages"
            :currentPage="$page.posts.pageInfo.currentPage"
          />

        <!-- Pagination -->
        <nav class="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
          <ul class="inline-flex flex-wrap font-medium text-sm -m-1">
            <li class="m-1">
              <span class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
            </li>
            <li class="m-1">
              <a href="#0" class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">1</a>
            </li>
            <li class="m-1">
              <a href="#0" class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">2</a>
            </li>
            <li class="m-1">
              <a href="#0" class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">3</a>
            </li>
            <li class="m-1">
              <span class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
            </li>
            <li class="m-1">
              <a href="#0" class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</a>
            </li>
            <li class="m-1">
              <a href="#0" class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Next</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import News from './../partials/News.vue'
import PaginationPosts from '../components/PaginationPosts'

export default {
  components: {
    News,
    PaginationPosts
  },
  name: 'BlogList'
}
</script>

