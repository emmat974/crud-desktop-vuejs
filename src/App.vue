<template>
  <!-- Si  l'utilisateur est connecté-->
  <template v-if="this.$store.state.user">
    <PageUserConnect />
  </template>

  <!-- Si l'utilisateur n'est pas connecté -->
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


