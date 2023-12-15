<template>
  <v-main>
    <v-container fluid>
        <v-card
           class="mx-auto"
           elevation="5"
        >
        <v-card-title> DATA VIEWER </v-card-title>
        </v-card>
        
        <v-card>
           <iframe id="ifrm" src="http://0.0.0.0:8080/github/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/blob/master/Chapter1_Introduction/Ch1_Introduction_PyMC3.ipynb" :width="clientWidth" height="800"></iframe>
        </v-card>
        <v-navigation-drawer
        location="right"
        width="50vw"
        v-model="drawer"
        temporary
        >
        <DataCatalog v-model:dataCatalog="dataCatalog" v-model:dataSet="dataSet"/>
        </v-navigation-drawer>
        <VLayoutItem model-value position="right" class="text-end" size="88">
          <div class="ma-4">
            <VBtn color="primary" elevation="8" @click.stop="drawer = !drawer" >Data Catalog </VBtn>
          </div>
        </VLayoutItem>
    </v-container>
  </v-main>
</template>
    
<script lang="ts" setup>
import { onBeforeUnmount } from "vue"
const clientWidth = ref(null)
const route = useRoute()
const drawer = ref(false)
const dataCatalog = computed(() => {
  return JSON.parse(route.query.dataCatalog)
})

const dataSet = computed(() => {
  return JSON.parse(route.query.dataSet)

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
