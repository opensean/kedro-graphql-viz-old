<template>
  <v-card>
    <v-data-iterator
      :items="items"
      :items-per-page="3"
      :search="search"
      :loading="loading"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            clearable
            density="comfortable"
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px;"
            variant="solo"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="item in items"
              :key="item.raw.name"
              cols="auto"
              md="4"
            >
              <v-card 
               class="pb-3" 
               border 
               flat
               prepend-icon="mdi-pipe"
               :title="item.raw.name"
              >
                <v-card-text>
                  <vue-markdown :source="item.raw.describe"/>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="orange"
                    variant="outlined"
                    flat
                    text="Run"
                    @click='updateModelValue(item, "run")'
                  >
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    flat
                    text="Explore"
                    append-icon="mdi-open-in-new"
                    @click='updateModelValue(item, "explore")'
                  >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'
  import VueMarkdown from 'vue-markdown-render'
  const search = shallowRef('')
  const loading = ref(true)
  const items = ref([])
  const totalItems = ref(0)
  const nextCursor = ref(null)
  const cursors = ref([null,null])
  const itemsPerPage = ref(10)
  const variables = ref({ limit: itemsPerPage, cursor: nextCursor})

  const props = defineProps<{
    pipelineTemplate: undefined
    pipelineTemplateAction: undefined
  }>()

  const emit = defineEmits(["update:pipelineTemplate", "update:pipelineTemplateAction"])
  const { onResult, onLoading, onError, refetch } = useQuery(pipelineTemplatesQuery, variables)

  onResult(queryResult => {
    console.log(queryResult)
    if(queryResult.data){
      items.value = queryResult.data.pipelineTemplates.pipelineTemplates
      if (totalItems.value == 0){
        totalItems.value = queryResult.data.pipelineTemplates.pageMeta.count
      }
      loading.value = queryResult.loading
      if (!cursors.value.includes(queryResult.data.pipelineTemplates.pageMeta.nextCursor)){
        cursors.value.push(queryResult.data.pipelineTemplates.pageMeta.nextCursor)
      }
    }
  })

  function updateModelValue (template, action) {
    emit('update:pipelineTemplate', template)
    emit('update:pipelineTemplateAction', action + "-" + JSON.stringify(Date.now()))
    
  }

</script>