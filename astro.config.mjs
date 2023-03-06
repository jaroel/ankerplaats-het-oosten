import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import image from '@astrojs/image'

export default defineConfig({
  integrations: [tailwind(), compress(), image()],
})
