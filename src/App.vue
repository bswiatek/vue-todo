<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">Lista zadań użytkownika {{name}}</h4>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Zadanie</div>
        <div class="col-2 font-weight-bold">Zakończono?</div>
      </div>
      <div class="row" v-for="t in filteredTasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2 text-center">
          <input type="checkbox" v-model="t.done" class="form-check-input" />
        </div>
      </div>
      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input type="checkbox" v-model="hideCompleted" class="form-check-input"/>
          <label class="form-check-label font-weight-bold">Ukryj zakończone zadania</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      name: "Bartek",
      tasks: [
        { action: "Kup kwiaty", done: false},
        { action: "Znajdź buty", done: false},
        { action: "Odbierz bilety", done: true},
        { action: "Zadzwoń do Janka", done: false},
      ],
      hideCompleted: true
    }
  },
  computed: {
    filteredTasks() {
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
    }
  }
}
</script>