<script setup>
import { ref } from 'vue'

const reps = ref();
const emit = defineEmits(['testSubmitted'])

function submitForm() {
  emit('ageSelected', reps.value)
}
</script>

<template>
  <p>Please perform a push up test.</p>
  <p>Perform as many good form push ups as possible in a row, and enter the total below.</p>
  
  <input  type="number" name="reps" v-model="reps" />
  <button @click="submitForm()">Done</button>
</template>

<style scoped>
</style>
