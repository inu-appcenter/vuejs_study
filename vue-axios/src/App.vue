<template>
  <div id="app">
    <Navigation></Navigation>
    <!-- 가장 부모 컴포넌트인 App.vue 에서 Navigation 컴포넌트를 불러왔기때문에,
    모든 자식요소 (Home, Contact, About 등)에서 Navigation 컴포넌트가 보여집니다 -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',

  components: {
    Navigation,
  },
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
  cursor: pointer;
  color: #42b983;
}

.router-view {
  border: 1px solid blue;
}
</style>
