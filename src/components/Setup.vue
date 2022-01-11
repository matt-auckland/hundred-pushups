<script setup>
import { ref } from 'vue'

const age = ref();
const emit = defineEmits(['ageSelected'])

function submitForm() {
  this.emit('ageSelected', age.value)
}
</script>

<template>
  <h1>Hello</h1>
  <p>Welcome to the 100 Push Up Challenge.</p>
  <p>To start, please enter your age below.</p>
  
  <select name="age" v-model="age">
    <option value="1">Under 40</option>
    <option value="2">40 - 55</option>
    <option value="3">55+</option>
  </select>
  <button @click="submitForm()">Next</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
