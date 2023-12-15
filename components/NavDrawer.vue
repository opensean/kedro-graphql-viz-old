<template>
  <v-navigation-drawer
    expand-on-hover
    rail    
    >
    <v-list>
      <v-list-item
      v-model="model"
      prepend-icon="mdi-theme-light-dark"
      @click="toggleTheme"
      >
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
    <v-list-item>
      <v-select
        v-model="project"
        :items="config.public.projects"
        :item-props="itemProps"
        label="Project"
      ></v-select>
    </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <NuxtLink to="/">
        <v-list-item prepend-icon="mdi-package-variant-closed" title="Projects" value="projects"></v-list-item>
      </NuxtLink>
      <NuxtLink :to="navPage('/pipelines/')">
        <v-list-item prepend-icon="mdi-pipe" title="Pipelines" value="pipelines"></v-list-item>
      </NuxtLink>
      <NuxtLink   :to="navPage('/runs/')">
        <v-list-item prepend-icon="mdi-menu" title="Runs" value="runs"></v-list-item>
      </NuxtLink>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  const config = useRuntimeConfig()
  const project = useProject()

  console.log("config", config)
  
  const drawer = true;

  const theme = useTheme()
  const model = ref(true)
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  function itemProps (item) {
    return {
      title: item.name,
      subtitle: item.uri,
    }
  }

  function navPage(p) {
    return p + project.value.name
  }

  watch(project, (newX) => {
    console.log(newX)
  })


</script>