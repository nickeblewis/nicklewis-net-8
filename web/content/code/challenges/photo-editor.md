import CaptionedImage from '~/components/CaptionedImage.vue'

Trying out different ready made Vue image/photo editors, starting with the one we know best which now has some problems we need to overcome.

## vue-image-editor
First of all let's build a small app to try out the photo editor and review it's capabilities. Later I shall point out the issues I currently have with it and what I would do to resolve them... or do we need to go with something else entirely different?

### How to install
Source: https://levelup.gitconnected.com/how-to-make-a-photo-editor-with-vue-js-fc465bdf50de I had to adapt this a bit for my own needs but it was a good starting point to work with.

Rather than adding this to the FB project I am going to create a standalone version of it to experiment with and will also introduce other npm modules that FB has until the standalone app breaks.

```npm install -g @vue/cli``` to ensure that you have the latest Vue CLI tools installed

First things first I create the wrapper app

```npx @vue/cli create photo-editor```

NOTE: I had issues with this for some reason. The installer didn't scaffold the project for me and so I ended up using ```vue ui``` instead. Odd but don't worry, if the above works for you, great, the rest will fall into place...

(what is different about npx versus npm? quick answer, execute the CLI tools without needing to install, it will always run the latest incarnation)

Then add the photo editor component along with Bootstrap VUE for styling the app and it's structure. I will use this quite often throughout articles on this site.

```npm i @toast-ui/vue-image-editor bootstrap-vue```

Next replace ```Home.vue```  with:

```vue
<template>
  <div class="page">
    <div class="imageEditorApp">
      <b-button-toolbar>
        <b-button @click="cropMode()">Toggle Crop Mode</b-button>
      </b-button-toolbar>
      <br />
      <tui-image-editor ref="editor" :include-ui="useDefaultUI" :options="options"></tui-image-editor>
    </div>
  </div>
</template>
<script>
import { ImageEditor } from "@toast-ui/vue-image-editor";
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const blackTheme = {
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc
};
export default {
  name: "home",
  components: {
    "tui-image-editor": ImageEditor
  },
  data() {
    return {
      useDefaultUI: true,
      options: {
        cssMaxWidth: window.innerWidth,
        cssHeight: 800,
        includeUI: {
          theme: blackTheme
        },
        initMenu: "filter"
      }
    };
  },
  methods: {
    cropMode() {
      const drawingMode = this.$refs.editor.invoke("getDrawingMode");
      if (drawingMode == "CROPPER") {
        this.$refs.editor.invoke("startDrawingMode", "FREE_DRAWING");
      } else {
        this.$refs.editor.invoke("startDrawingMode", "CROPPER");
      }
    },
  }
};
</script>
<style scoped>
.imageEditorApp {
  width: 95vw;
  height: calc(100vh - 150px);
}
</style>
```

Then replace ```App.vue``` with:

```vue
<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Photo Editor</b-navbar-brand>
<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
<b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :active="path  == '/'">Home</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: this.$route && this.$route.path
    };
  },
  watch: {
    $route(route) {
      this.path = route.path;
    }
  }
};
</script>
<style lang="scss">
.page {
  padding: 20px;
}
button,
.btn.btn-primary {
  margin-right: 10px !important;
}
.button-toolbar {
  margin-bottom: 10px;
}
</style>
```

Then in ```main.js```

```
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "tui-image-editor/dist/tui-image-editor.css";
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```


Then in ```index.html```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>Photo Editor</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but vue-photo-editor-tutorial-app doesn't work properly
        without JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

<captioned-image alt="Photo Editor" caption="Photo Editor" imgFile="/code/screenshots/photo-editor-1.png" format="v"/>

### Problems
There are clashes with Bootstrap Vue and vue-image-editor that breaks the latter, does this happen in this standalone the same as it does for the establish app I am involved in building for my contract client.


Stale npm modules - a drawback with OSS projects and npm is no exception

## Can we fix these issues?

Lets see...

## PhotoEditor SDK
- Not a good match for formbuilder, great features if you can get it to work 