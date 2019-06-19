<template>
  <div id="app">
   <slides :starting-index="3" ></slides>
  </div>
</template>

<script>
import slides from './components/slides'

export default {
  components: {
    slides
  }
}
</script>

<style>
#app {
  max-width: 900px;
}
</style>
