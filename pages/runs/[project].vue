<template>
  <v-main>
    <v-container fluid>
        <v-card
           class="mx-auto"
           elevation="5"
        >
          <pipelines-data-table
            v-model="dataCatalog"
          />
        </v-card>

    </v-container>
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
        width="50vw"
        
      >
      <data-catalog v-model:dataCatalog="dataCatalog" v-model:dataSet="dataSet"/>
    </v-navigation-drawer>
  </v-main>
</template>
    
<script setup lang="ts">
import { ref } from "vue"

const project = useProject()
const dataCatalog = shallowRef({datasets: [], parameters: []})
const dataSet = ref(null)
const drawer = ref(null)

watch(dataCatalog, (newX) => {
    console.log(newX)
    drawer.value = true
})

watch(dataSet, (x) => {
    console.log(x)
    navigateTo({path: '/dataviewer/' + project.value.name, query: { dataSet: x, dataCatalog: dataCatalog.value }}, {
      open: {
        target: "_blank"
      }
    })
})
</script>
