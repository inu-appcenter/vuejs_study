<template>
  <div id="error">
    <p>Not Found!!1</p>
    <a @click="$router.go(-1)">Go Back</a>
  </div>
</template>

<script>
export default {
  name: 'error',
}
</script>

<style>

</style>
