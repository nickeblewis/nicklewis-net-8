import CaptionedImage from '~/components/CaptionedImage.vue'

Here is an example of how to add Vue components to content

First of all you need to import the component into your .md file like this:
```
import CaptionedImage from '~/components/CaptionedImage.vue'
```
Then add code similar to the below, wherever you want an image to appear

```
<captioned-image 
    alt="Photo Editor" 
    caption="Photo Editor" 
    imgFile="/code/screenshots/photo-editor-1.png" 
    format="v"/>
```

Which outputs this:

<captioned-image alt="Photo Editor" caption="Photo Editor" imgFile="/code/screenshots/photo-editor-1.png" format="v"/>



- [ ] Let's dig deeper and explain how this works from the ground up by building a super simple Gridsome site

## Next - photo galleries

- [ ] another article to write up...