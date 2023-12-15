// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['graphql']
  },
  modules: ['@nuxtjs/apollo',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  runtimeConfig: {
    public: {
      kedroGraphqlViz: {
        apolloHttpEndpoint: '', // NUXT_PUBLIC_KEDRO_GRAPHQL_VIZ_APOLLO_HTTP_ENDPOINT env variable overrides this
        apolloWsEndpoint: '', // NUXT_PUBLIC_KEDRO_GRAPHQL_VIZ_APOLLO_WS_ENDPOINT env variable overrides this
      },
      defaultProject: {name: "example",
                 uri: 'http://localhost:5000/graphql'},
      projects: [{name: "example",
                 uri: 'http://localhost:5000/graphql'}]
    },
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify', 'tslib']
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:5000/graphql', // can't be empty string
        wsEndpoint: 'http://localhost:5000/graphql' // can't be empty string
      }
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  routeRules: {
      '/graphql/**': {
          proxy: { to: "http://localhost:5000/graphql/**", },
      },
  }
})
