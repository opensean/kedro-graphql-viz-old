<script setup lang="ts">
import { ref } from 'vue'
import { DataCatalog } from "@opensean/kedro-graphql-viz.entities.data-catalog"
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{
  dataCatalog: { type: DataCatalog,
                default: {datasets:[], parameters:[]},
  dataSet: { type: DataSet}
  }
}>()

const emit = defineEmits(["update:dataSet"])

const page = ref(1)

const datasets = computed(() => {
  let ds = []
  //console.log(props.modelValue)
  if(props.dataCatalog["datasets"] !== undefined && props.dataCatalog["datasets"] !== null && props.dataCatalog["datasets"].length > 0) {
    props.dataCatalog["datasets"].forEach((x) => {
      ds.push({"name":x.name, "config": JSON.parse(x.config)})
    })
    return ds
  }
  else {
    return []
  }
})



const parameters = computed(() => {
  let p = []
  //console.log(props.dataCatalog)
  if(props.dataCatalog["parameters"] !== undefined && props.dataCatalog["parameters"] !== null && props.dataCatalog["parameters"].length > 0) {
    props.dataCatalog["parameters"].forEach((x) => {
      p.push({"name":x.name, "type": x.type, "value": x.value})
    })
    return p
  }
  else {
    return []
  }
})

function updateDataSet (dataSet) {
  console.log(dataSet)
  emit('update:dataSet', dataSet)
  
}

</script>

<template>
  <v-container fluid>
    <h1>Parameters</h1>
    <v-divider
      thickness="3"
    ></v-divider>
    <br>
    <v-data-iterator :items="parameters" :page="page">
      <template v-slot:default="{ items }">
        <template
          v-for="(item, i) in items"
          :key="i"
        >

          <v-card 
          elevation="5"
          v-bind="item"
          >
            <v-card-title>{{ item.raw.name }}</v-card-title>
            <v-card-subtitle>{{ item.raw.type }}</v-card-subtitle>
            <v-card-text>
              {{item.raw.value}}
            </v-card-text>
          </v-card>
          <br>
  

        </template>
      </template>
    </v-data-iterator>
    <h1>Datasets</h1>
    <v-divider
      thickness="3"
    ></v-divider>
    <br>
    <v-data-iterator :items="datasets" :page="page">
      <template v-slot:default="{ items }">
        <template
          v-for="(item, i) in items"
          :key="i"
        >

          <v-card 
          elevation="5"
          v-bind="item"
          >
            <v-card-title>{{ item.raw.name }}</v-card-title>
            <v-card-subtitle>config:</v-card-subtitle>
            <v-card-text>
              <vue-json-pretty :data="item.raw.config">
              </vue-json-pretty>
            </v-card-text>
            <v-card-actions>
              <v-btn
               variant="outlined" 
               color="orange"
               append-icon="mdi-open-in-new"
               @click="updateDataSet(item.raw)">
                Open
              </v-btn>
            </v-card-actions>
          </v-card>
          <br>
  

        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<style scoped>
</style>
