<template>
  <v-main>
    <v-container fluid>
      <pipeline-templates-as-cards 
        v-model:pipelineTemplate="pipelineTemplate"
        v-model:pipelineTemplateAction="pipelineTemplateAction" />

      <v-overlay
      :model-value="overlay"
      absolute
      @click:outside="overlay = !overlay"
      class="align-center justify-center"
      >
      <v-sheet width="80vw" class="mx-auto">
        <pipeline-template-form />
      </v-sheet>
      </v-overlay>
    </v-container>

  </v-main>
</template>
    
<script setup>
import { ref } from "vue"
const project = useProject()
const pipelineTemplate = ref(null)
const pipelineTemplateAction = ref(null)
const overlay = ref(false)


watch(pipelineTemplateAction, (x) => {
    if (x.startsWith('explore')) {
      console.log(x)
      navigateTo({path: '/explore/' + project.value.name, query: { pipelineTemplate: pipelineTemplate.value }}, {
        open: {
          target: "_blank"
        }
      })
    }
    else if (x.startsWith('run')) {
      console.log(x)
      overlay.value = true
    }
})
</script>
