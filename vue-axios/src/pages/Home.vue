<template>
  <div id="home">
    <router-link :to="'/about'">to About</router-link>
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
