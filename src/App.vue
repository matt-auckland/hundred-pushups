<script setup>
import { ref, computed } from '@vue/reactivity';
// import Setup from './components/Setup.vue';
// import Test from './components/Test.vue';
// import Settings from './components/Settings.vue';
// import LogWorkout from './components/Log-Workout.vue';
import Reference from './components/Reference.vue';
import Tester from './components/Tester.vue';


const state = ref({
  showAgeForm: false,
  showTestScreen: false,
  showExerciseScreen: false,
  showMainScreen: false,
  currentScreen: null
});

const userAge = ref(null);
const currentWeek = ref(1);

const testLogs = ref([]);
const exerciseLogs = ref([]);

const testCount = computed(() => {
  return testLogs.value.filter(test => {
    return test.week === currentWeek.value
  });
});

loadData()

function loadData() {
  const age = localStorage.getItem("age")
  if (age) userAge.value = JSON.parse(age);

  // load week data
  const week = localStorage.getItem("week")
  if (week) currentWeek.value = JSON.parse(week);

  // load test logs
  const testLogData = localStorage.getItem("testLogs")
  if (testLogData) testLogs.value =  JSON.parse(testLogData);

  // load exercise data
  const exerciseData = localStorage.getItem("exerciseLogs")
  if (exerciseData) exerciseLogs.value = JSON.parse(exerciseData);

  // check we have an age
  if (!userAge.value) return   state.value.currentScreen = 'AGE_FORM'

  // check we have an initial test
  if (!testLogs.value || !testLogs.value.length) return   state.value.currentScreen = 'TEST';

  return state.value.currentScreen = 'MAIN'
}



function handleAgeSelect(age) {
  localStorage.setItem("age", age);
  userAge.value = age;

  localStorage.setItem("week", 1);

  state.value.currentScreen = 'TEST'
}

function handleTestResult(result) {

  testLogs.value.push({result, date: Date.now()});
  localStorage.setItem("testLogs", JSON.stringify(testLogs.value));

    state.value.currentScreen = 'MAIN'
}

const startNewExercise = () => {
  state.value.currentScreen = 'LOG_WORKOUT'
}

const openLogs = () => {
  state.value.currentScreen = 'LOGS'
}

const openSettings = () => {
  state.value.currentScreen = 'SETTINGS'
}

const applySettings = (settings) => {
      state.value.currentScreen = 'MAIN'
}

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
  <h1>Hundred Push Ups</h1>
  <button @click="toggleMode" class="toggle">{{toggleButtonMsg}}</button>
  <Reference v-if="displayMode == 'REFERENCE'"></Reference>
  <Tester v-else></Tester>

  <!-- <Setup v-if="state.currentScreen == 'AGE_FORM'" @age-selected="handleAgeSelect"></Setup>
  <Test v-if="state.currentScreen == 'TEST'" @test-result="handleTestResult"></Test>
  <Settings v-if="state.currentScreen == 'SETTINGS'" @save-settings="applySettings"></Settings>
  <LogWorkout v-if="state.currentScreen == 'LOG_WORKOUT'"/>
  <main class="main-screen" v-if="state.currentScreen == 'MAIN'">
    <p>Week {{currentWeek}} - {{testCount.length}}/3 days complete</p>
    
    <button @click="startNewExercise">Log exercise session</button>
    <button @click="openLogs">Exercise Logs</button>
    <button @click="openSettings">Settings</button>
  </main> -->


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

.main-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toggle {
  margin:  0 0 20px;
  font-size: 18px;
}
</style>
