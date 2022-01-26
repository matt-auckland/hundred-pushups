<script>
import exercises from "../assets/exercises"

export default {
  created() {
    this.beeper = new Audio('/beep.wav')
  },
  data() {
    return {
      exercises,
      selectedEx: exercises[0],
      selectedDiff: 1,
      timerCount: exercises[0].rest,
      timerInterval: null,
      beeper: null,
    }
  },
  computed: {
    tableDisp() {
      if (this.selectedDiff == 1) {
        return this.selectedEx.exercises.colOne
      } else if (this.selectedDiff == 2) {
        return this.selectedEx.exercises.colTwo
      } else {
        return this.selectedEx.exercises.colThree
      }
    }
  },
  watch: {
    selectedEx() {
      this.resetTimer()
      this.timerCount = this.selectedEx.rest;
    }
  },
  methods: {
    getPrereqString(requirement) {
      if (!requirement) return 'none'

      return `${requirement} push ups`
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timerCount--;
        if (this.timerCount <= 0) {
          this.resetTimer();
          this.soundAlarm();
        }
      }, 1000)
    },
    resetTimer() {
      clearInterval(this.timerInterval)
      this.timerCount = this.selectedEx.rest;
    },
    soundAlarm() {
      this.beep();
      setTimeout(() => { this.beep() }, 600)
      setTimeout(() => { this.beep() }, 1200)
      setTimeout(() => { this.beep() }, 1800)
    },
    beep() {
      this.beeper.pause();
      this.beeper.fastSeek(0);
      this.beeper.play();
    }
  },
}

</script>


<template>
  <div class="reference">
    <div class="dropdown">
      <label for="date">Week/Day</label>
      <select name="date" v-model="selectedEx">
        <option v-for="ex in exercises" :value="ex">Week {{ ex.week }} - Day {{ ex.day }}</option>
      </select>
    </div>
    <div class="dropdown">
      <label for="diff">Difficulty</label>
      <select name="diff" v-model="selectedDiff">
        <option :value="1">Easy - Prereq: {{ getPrereqString(selectedEx.exercises.colOne.preReq) }}</option>
        <option
          :value="2"
        >Medium - Prereq: {{ getPrereqString(selectedEx.exercises.colTwo.preReq) }}</option>
        <option
          :value="3"
        >Hard - Prereq: {{ getPrereqString(selectedEx.exercises.colThree.preReq) }}</option>
      </select>
    </div>

    <table v-if="selectedEx">
      <thead>
        <th colspan="3">Week {{ selectedEx.week }} Day {{ selectedEx.day }}</th>
      </thead>
      <tfoot>
        <td colspan="3">Rest at least {{ selectedEx.rest }} seconds between sets</td>
      </tfoot>
      <tr>
        <th>Set</th>
        <th>Target Reps</th>
        <th>Complete</th>
      </tr>
      <tr v-for="(set, index) in tableDisp.reps">
        <td>{{ index + 1 }}</td>
        <td>{{ set }}</td>
        <td>
          <input type="checkbox" name id />
        </td>
      </tr>
    </table>

    <div>
      <h3>Rest Timer</h3>
      <h4>{{ timerCount }}</h4>
      <button @click="startTimer" :disabled="timerInterval">Start Timer</button>
      <button @click="resetTimer" :disabled="!timerInterval">Reset</button>
    </div>
  </div>
</template>

<style>
.reference,
.reference select {
  font-size: 18px;
}

.dropdown {
  display: flex;
  gap: 10px;
  width: min(400px, 80vw);
  margin: 10px auto;

}

.dropdown > select {
  flex: 1;
}


table {
  margin: 30px auto;
  width: min(400px, 80vw);
  border-collapse: collapse;
}

table, td, tr {
  border: 2px solid black;
}

td {
  padding: 5px;
}
</style>