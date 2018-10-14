<template>
  <div id="home">
    <p>Home page</p>
    <router-view></router-view>
    <FetchUsers></FetchUsers>
  </div>
</template>

<script>
import FetchUsers from '../components/FetchUsers'

export default {
  name: 'home',
  components: {
    FetchUsers
  }
}
</script>
