<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <Bio />
          <vue-disqus shortname="nicklewis-net" :identifier="$page.post.title"></vue-disqus>
          <div class="flex justify-end w-full">
            <button
              type="submit"
              value="submit"
              class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
            >Submit</button>
          </div>          
        </div>        
      </div>     
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import Bio from '../components/Bio'
export default {
  components: {
    Bio
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: "twitter:title",name: "twitter:title", content: this.$page.post.title },
        { key: "og:title",name: "og:title", content: this.$page.post.title },

      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    }
  }
}
</script>

<style src="../css/github-markdown.css" />

