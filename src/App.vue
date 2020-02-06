<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">Lista zadań użytkownika {{name}}</h4>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Zadanie</div>
        <div class="col-2 font-weight-bold">Zakończono?</div>
      </div>
      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2">{{t.done}}</div>
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
      ]
    }
  }
}
</script>