<template>
  <Header/>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap');

body {
  font-family: 'Oswald', sans-serif;
  margin: 0px;
}

a {
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
