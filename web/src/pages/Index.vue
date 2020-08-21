<template>
  <Layout>
    <!-- <div class="hero container mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Nick Lewis</div>
        <div class="text-green-700 leading-tight">Freelance Developer, Photographer &amp; Writer</div>
      </div>


    </div>-->
    <!-- end hero -->

    <div class="container mx-auto">
      <!-- <p
        class="font-bold text-lg sm:text-xl"
      >I am actively seeking new client opportunities for the year ahead. Please contact me to discuss your requirements.</p>
      <br />-->
      <!-- <p
        class="text-lg sm:text-xl"
      >I have 25 years experience in the software industry. I am a highly experienced front-end web developer who specialises in VueJS/Gridsome at the current point in time. I am setting out to write about my experience through this website and hope that my blog posts and documentation can help you in some way, whether you are trying to get your head around the latest tech or are seeking the kind of consultancy services I offer on a freelance basis.</p>-->

      <!-- <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>-->
    </div>
    <div class="py-1 bg-white overflow-hidden">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div class="flex flex-wrap">
          <main class="w-full lg:w-3/4">
            <div class="overflow-x-hidden">
              <div class="projects container mx-auto text-xl mb-8 relative">
<h1
                  class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9"
                  id="projects"
                >Through the lens</h1>
                <div class="text-lg text-gray-600">Latest photographic articles from around the South of England, covering natural landscapes, interesting buildings and a collection of photo journals...</div>
                <div
                  class="absolute right-0"
                  style="top: 50px; transform: translate(100%) rotate(180deg)"
                >
                  <svg width="170px" height="170px">
                    <use xlink:href="#dots-triangle" />
                  </svg>
                </div>

                <div class="border-b border-gray-200 lg:w-4/5 w-full">
                  <masonry :cols="{default: 4, 1024: 4,  768: 2, 640: 1, 375: 1}" :gutter="0">
                    <div v-for="photo in $page.photos.edges" :key="photo.id" class="py-1 sm:px-1">
                      <g-link :to="photo.node.slug.current">
                        <g-image
                          v-if="photo.node.mainImage"
                          alt="Cover image"
                          class="border-2 border-black"
                          :src="$urlForImage(photo.node.mainImage, $page.metadata.sanityOptions).format('jpg').width(800).quality(60).url()"
                        />
                      </g-link>
                    </div>
                  </masonry>
                </div>
              </div>
              <!-- end photos -->
            </div>
            <!-- <div class="overflow-x-hidden">
              <div class="projects container mx-auto text-xl mb-8 relative">
                <h1
                  class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9"
                  id="projects"
                >Featured Posts</h1>

                <div
                  class="absolute right-0"
                  style="top: 50px; transform: translate(100%) rotate(180deg)"
                >
                  <svg width="170px" height="170px">
                    <use xlink:href="#dots-triangle" />
                  </svg>
                </div>

                <div class="text-lg sm:text-xl lg:w-4/5 w-full">
                  <article
                    v-for="feature in $page.features.edges"
                    :key="feature.id"
                    class="border-b border-gray-200 py-8 lg:w-4/5 w-full"
                  >
                    <time
                      :datetime="feature.node.date"
                      class="text-green-700 uppercase font-semibold text-md tracking-wider opacity-75"
                    >{{feature.node.date}}</time>
                    <h2>
                      <g-link
                        :to="feature.node.path"
                        class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                      >{{ feature.node.title }}</g-link>
                    </h2>
                    <div class="text-lg text-gray-600">{{ feature.node.summary }}</div>
                  </article>
                </div>
              </div>

            </div> -->
            <div class="overflow-x-hidden">
              <div class="projects container mx-auto text-xl mb-8 relative">
                <h1
                  class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9"
                  id="projects"
                >Latest Posts</h1>

                <div
                  class="absolute right-0"
                  style="top: 50px; transform: translate(100%) rotate(180deg)"
                >
                  <svg width="170px" height="170px">
                    <use xlink:href="#dots-triangle" />
                  </svg>
                </div>

                <div class="text-lg sm:text-xl lg:w-4/5 w-full">
                  <article
                    v-for="post in $page.posts.edges"
                    :key="post.id"
                    class="border-b border-gray-200 py-8 lg:w-4/5 w-full"
                  >
                    <time
                      :datetime="post.node.date"
                      class="text-green-700 uppercase font-semibold text-md tracking-wider opacity-75"
                    >{{post.node.date}}</time>
                    <h2>
                      <g-link :to="post.node.path" class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{ post.node.title }}</g-link>
                    </h2>
                    <div class="text-lg text-gray-600">{{ post.node.summary }}</div>
                  </article>
                </div>
              </div>
              <!-- end projects -->
            </div>
          </main>
          <div class="w-full lg:w-1/4 mt-8 lg:mt-4 relative" data-v-4501e472>
            <svg
              width="210"
              height="784"
              fill="none"
              viewBox="0 0 210 784"
              class="hidden lg:block absolute left-full transform -translate-x-1/2"
              data-v-4501e472
            >
              <defs data-v-4501e472>
                <pattern
                  id="svg-pattern-squares-1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                  data-v-4501e472
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    fill="currentColor"
                    class="text-gray-200"
                    data-v-4501e472
                  />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" data-v-4501e472 />
            </svg>
            <div class="h-auto bg-gray-50 py-4 rounded-lg px-6 shadow relative" data-v-4501e472>
              <div data-v-4501e472>
                <div class="w-full -mt-8">
                  <img
                    alt="Photo of me"
                    src="../../static/profile.jpg"
                    class="rounded-full mx-auto block shadow-lg"
                  />
                </div>
                <div class="text-3xl font-bold w-full sm:w-3/5 text-align-center sm:text-left">
                  <div class="leading-tight">Nick Lewis</div>
                  <div
                    class="text-green-700 leading-tight"
                  >Freelance Developer, Photographer &amp; Writer</div>
                </div>
                <p
                  class="mb-2 mt-6 text-lg border-b border-gray-200 pb-6"
                >{{ $static.settings.homeBio }}</p>
              </div>

              <h3
                class="text-lg leading-6 font-semibold text-gray-900 mt-4"
                data-v-4501e472
              >Social Media</h3>
              <div class="ml-1 block pb-6" data-v-4501e472>
                <div class="mt-4 flex space-x-6" data-v-4501e472>
                  <a
                    href="https://www.instagram.com/nicklewisphotography/"
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Instagram</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="https://twitter.com/nicklewis" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/nickeblewis"
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">GitHub</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TODO - Codeschool articles go in here. Will also need a link in the nav and a separate series of pages for it -->
    <!-- Where will the A to Z stuff go? -->

    <!-- <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/profile.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >I am a freelance web developer, photographer, content creator and writer, who is on a mission to help businesses and individuals build solutions for their online world.</div>
        </div>
      </div>

    </div>-->

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <div class="text-lg sm:text-lg mb-16">
            <form
              name="contact"
              class="mb-12"
              method="post"
              action="/success/"
              v-on:submit.prevent="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Joe Bloggs"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    v-model="formData.name"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    v-model="formData.email"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  v-model="formData.message"
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <button
                  type="submit"
                  value="submit"
                  class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Join the newsletter:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <div class="text-lg sm:text-lg mb-16">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/nickeblewis"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/nickeblewis', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <!-- <form
              name="contact"
              class="mb-12"
              method="post"
              action="/success/"
              v-on:submit.prevent="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              >-->
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <div class="flex flex-wrap mb-12 -mx-4">
                <div class="w-full px-4 md:w-full">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="flex justify-end w-full">
                <button
                  type="submit"
                  value="submit"
                  class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
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
  photos: allSanityPost (sortBy: "publishedAt", order: DESC, limit: 8) {
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
  posts: allPost (limit: 3, sortBy: "date", order: DESC, filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        published
        section
        date (format: "MMMM D, Y")
        summary

        path
      }
    }
  }
  features: allPost (limit: 4, sortBy: "date", order: DESC, filter: { published: { eq: true }, featured: { eq: true }}) {
    edges {
      node {
        id
        title
        published
        section
        date (format: "MMMM D, Y")
        summary

        path
      }
    }
  }
}
</page-query>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry)

export default {
  components: {
    VueMasonry,
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

