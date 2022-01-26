<script>
import testStats from "../assets/test-ranking.json"

export default {
  data() {
    return {
      testStats,
      testResult: 0,
      selectedWeek: 0,
      weeks: [0,2,4],
    }
  },
  computed: {
    resultMessage() {
      const test = this.testStats.find(test => test.week == this.selectedWeek);

      let filtered = test.reps.find(rep => !rep.maxCount || rep.maxCount >= this.testResult);

      return filtered.message;
    }
  }
}
</script>


<template>
  <div class="tester">
    <p>Do as many good form reps as possible</p>
    <div class="dropdown">
      <label for="date">Test Week</label>
      <select name="date" v-model="selectedWeek">
        <option v-for="week in weeks" :value="week">
          <span v-if="week == 0">Initial Test</span>
          <span v-else>Week {{week}} Test</span>
        </option>
      </select>
    </div>

    <h3>Test Result</h3>
    <input type="text" v-model="testResult">

    <p>{{resultMessage}}</p>

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