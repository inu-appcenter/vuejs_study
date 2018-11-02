<template>
  <div id="fetchusers">
    <div v-for="user in users" v-bind:key="users.id">
      <!-- users 의 길이만큼 반복 -->
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
      <!-- 머스태치(콧수염, 보간법)로 값을 동적으로 바인딩 -->
    </div>
    <button v-if="hasResult" @click="fetchusers">click me!</button>
    <!-- hasResult 가 true 일 경우에만 렌더링
    @click 의 메소드는 fetchUsers -->
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
      // fetchUsers 메소드가 실행되면, 위의 users 에 값이 채워지면서
      // hasResults 는 false 가 됩니다
    },
  },
  methods: {
    fetchusers: function() {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      // 변수를 설정하고, uri 값을 담아둠

      this.$http.get(baseURI)

      // 받아온 값을 result에 담고, result의 data 를 this.users 에 대입
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
