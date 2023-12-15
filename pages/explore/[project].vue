<template>
  <v-main>
    <v-container fluid>
        <v-card
           class="mx-auto"
           elevation="5"
        >
        <v-card-title> Kedro Viz </v-card-title>
        </v-card>
        
        <v-card>
           <iframe id="ifrm" src="http://localhost:4141/?pipeline_id=__default__" :width="clientWidth" height="800"></iframe>
        </v-card>
    </v-container>
  </v-main>
</template>
    
<script lang="ts" setup>
import { onBeforeUnmount } from "vue"
const clientWidth = ref(null)
const route = useRoute()

const pipelineTemplate = computed(() => {
  return JSON.parse(route.query.pipelineTemplate)
})

watch(clientWidth, (newX) => {
    console.log(newX)
})

onMounted(() => {
      nextTick(() => {
        window.addEventListener('resize', onResize)
      })
      onResize()
      console.log(clientWidth.value)
})
    
onBeforeUnmount(() => { 
  window.removeEventListener('resize', onResize)
})


function onResize () {
    clientWidth.value = window.innerWidth/1.07;
    console.log("client width " + clientWidth.value )
  }




</script>
