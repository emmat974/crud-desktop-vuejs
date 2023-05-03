<template>
  <!-- <template v-if="employee"> -->
  <Navigation />
  <Search />
  <!-- </template> -->
  <router-view></router-view>
</template>

<script>
import Navigation from '@/components/NavigationRoute.vue'
import Search from "@/components/form/FormSearch.vue"

export default {
  name: 'App',
  components: {
    Navigation,
    Search
  },
  data() {
    return {
      employee: null
    }
  },
  methods: {
    setEmploye(employee) {
      this.employee = employee
    },
    getEmploye() {
      return this.employee
    }
  }
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
