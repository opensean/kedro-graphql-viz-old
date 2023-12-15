<template>
  <v-card           
  class="mx-auto"
  elevation="5">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">

</script>