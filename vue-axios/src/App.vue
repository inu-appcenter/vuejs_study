<template>
  <div id="app">
    <div v-for="user in users" :key="users.id">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>
    <button @click="fetchUsers">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: [],
    }
  },
  methods: {
    fetchUsers: function() {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
