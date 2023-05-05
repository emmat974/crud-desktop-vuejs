<template>
  <template v-if="this.$store.state.user">
    <PageUserConnect />
  </template>
  <template v-else>
    <PageNotConnect />
  </template>
</template>

<script>
import PageNotConnect from './pages/PageNotConnect.vue';
import PageUserConnect from './pages/PageUserConnect.vue';

export default {
  name: 'App',
  components: {
    PageUserConnect,
    PageNotConnect
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
