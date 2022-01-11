<script setup>
import { ref } from '@vue/reactivity';
import Setup from './components/Setup.vue';
import Test from './components/Test.vue';

const state = ref();

const userAge = ref();
const currentWeek = ref();

const exerciseLogs = ref();

loadData()

function loadData() {
  let age = localStorage.getItem("age")
  if (age) userAge.value = age;

  // load week data
  let week = localStorage.getItem("week")
  if (week) currentWeek.value = week;

  // load exercise data
  let exerciseData = localStorage.getItem("exerciseLogs")
  if (exerciseData) exerciseLogs.value = exerciseData;
}

function handleAgeSelect(age) {
  localStorage.setItem("age", age);
  userAge.value = age;

  localStorage.setItem("week", 1);
}

</script>

<template>
  <Setup v-if="!userAge" @age-selected="handleAgeSelect"></Setup>
  <Test></Test>
  {{userAge}}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
