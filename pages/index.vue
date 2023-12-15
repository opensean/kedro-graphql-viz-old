<template>
  <v-main>
    <v-container fluid>
      <projects-as-cards 
        v-model:project="project"
        v-model:projectAction="projectAction" />
    </v-container>
  </v-main>
</template>
    
<script setup>
import { ref } from "vue"

const project = ref(null)
const projectAction = ref(null)
const drawer = ref(null)


watch(projectAction, (x) => {
    console.log(x)
    if (x === 'runs') {
        navigateTo({path: "/runs/" + project.value.name})
    }
    if (x === 'pipelines') {
        navigateTo({path: "/pipelines/" + project.value.name})
    }
})
</script>