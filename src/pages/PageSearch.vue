<template>
    <!-- Page de résultat d'adhérent-->
    <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <!-- Affiche les adhérents sous formes de tableaux-->
                <Result :adherents="this.$store.getters.searchResults" />
            </div>
        </div>
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