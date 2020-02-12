<template>
  <div id="app">
    <todo/>
    <js-primer/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import JsPrimer from './components/JsPrimer.vue'

export default {
  name: 'app',
  components: {
    Todo, JsPrimer
  }
}
</script>