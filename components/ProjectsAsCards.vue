<template>
  <v-card>
    <v-data-iterator
      :items="config.public.projects"
      :items-per-page="3"
      :search="search"
      :loading="loading"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-toolbar-title>Projects</v-toolbar-title>
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
               prepend-icon="mdi-package-variant-closed"
               :title="item.raw.name"
              >
                <v-card-actions>
                  <v-btn
                    color="orange"
                    variant="outlined"
                    flat
                    text="Runs"
                    @click='updateModelValue(item.raw, "runs")'
                  >
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    flat
                    text="Pipelines"
                    append-icon="mdi-open-in-new"
                    @click='updateModelValue(item.raw, "pipelines")'
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
  const search = shallowRef('')
  const loading = ref(true)
  const config = useRuntimeConfig()

  const project = useProject()
  const props = defineProps<{
    projectAction: undefined,
  }>()

  const emit = defineEmits(["update:project", "update:projectAction"])

  function updateModelValue (proj, action) {
    emit('update:project', proj)
    emit('update:projectAction', action)
    project.value = proj
    
  }

</script>