<template>
  <div id="fetchusers">
    <div v-for="user in users" v-bind:key="users.id">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>
    <button v-if="hasResult" @click="fetchusers">click me!</button>
  </div>
</template>

<script>
export default {
  name: 'fetchusers',
  data () {
    return {
      users: [],
    }
  },
  computed: {
    hasResult: function () {
      return this.users.length < 1
    },
  },
  methods: {
    fetchusers: function() {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    },
  },
}
</script>

<style>
#fetchusers {
  margin-bottom: 4rem;
  border: 1px solid red;
}
</style>
