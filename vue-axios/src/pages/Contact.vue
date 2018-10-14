<template>
  <div id="contact">
    <p>Contact page</p>
    <a @click="$router.go(-1)">Go Back</a>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
