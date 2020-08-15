// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import VueDisqus from 'vue-disqus'
import VueMasonry from 'vue-masonry-css';
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

// Import image url builder
import urlForImage from './utils/urlForImage'
import VueYoutube from 'vue-youtube'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

    // Inject global image URL builder
    Vue.prototype.$urlForImage = urlForImage
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)
  Vue.use(VueMasonry)
  Vue.use(VueDisqus)
  Vue.use(CoolLightBox)


  //Vue.use(VueFbCustomerChat, {
  //  page_id: 182108598496942, //  change 'null' to your Facebook Page ID,
  //  theme_color: '#333333', // theme color in HEX
  //  location: 'en_US', // default 'en_US'
  //})

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS,walks,photography,nature,travel,video'
  })

  head.meta.push({
    name: 'description',
    content: 'Nick Lewis Digital'
  })

  head.meta.push({
    name: 'author',
    content: 'Nick Lewis'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}

