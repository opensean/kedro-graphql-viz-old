import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark'
    },
    components : { ...components, 
        },
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
              mdi,
            }
        },
  })
  app.vueApp.use(vuetify)
})