<template>
  <div id="app">
    <FetchUsers></FetchUsers>
  </div>
</template>

<script>
import FetchUsers from './components/FetchUsers'

export default {
  name: 'app',
  data () {
    return {
      users: [],
    }
  },
  components: {
    FetchUsers,
  }
}
</script>

<style>
#app {
  font-family: 'avenir', helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
