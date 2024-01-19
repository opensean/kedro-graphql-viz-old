<script setup lang="ts">

import { usePipelines } from './pipelines';


const { pipelines } = usePipelines();

</script>


<template>

  <p>

    {{ pipelines }}

  </p>

</template>
