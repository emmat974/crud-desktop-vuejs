<template>
    <div>
        <h1> Rechercher </h1>
        <Result :adherents="this.$store.getters.searchResults" />
    </div>
</template>


<script>
import Result from "@/components/search/ResultSearch.vue"

export default {
    name: 'PageSearch',
    components: {
        Result,
    },
}
</script>