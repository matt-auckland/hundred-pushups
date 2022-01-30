<script setup>
import { ref } from '@vue/reactivity';
import Reference from './components/Reference.vue';
import Tester from './components/Tester.vue';


const displayMode = ref("REFERENCE");
const toggleButtonMsg = ref("Show Pushup Tester")

function toggleMode() {
  if (displayMode.value == 'REFERENCE') {
    displayMode.value = 'TESTER';
    toggleButtonMsg.value = 'Show Pushup Reference'
  } else {
    displayMode.value = 'REFERENCE';
    toggleButtonMsg.value = 'Show Pushup Tester'
  }
}
</script>

<template>
<header>
  <h1>Hundred Push Ups</h1>
</header>

  <button @click="toggleMode" class="toggle">{{toggleButtonMsg}}</button>
  <Reference v-show="displayMode == 'REFERENCE'"></Reference>
  <Tester v-show="displayMode == 'TESTER'"></Tester>

  <footer>
    Based on  <a href="https://hundredpushups.com/">hundredpushups.com</a>
  </footer>
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


.toggle {
  margin:  0 0 20px;
  font-size: 18px;
}

footer {
  margin-top: 50px;
}
</style>
