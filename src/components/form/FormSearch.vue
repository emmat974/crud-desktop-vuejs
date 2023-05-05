<template>
    <form @submit="checkForm" method="post">
        <Text name="search" label="" type="search" v-model="search" placeholder="Rechercher quelque chose..." />
        <Button text="Rechercher" />
    </form>
</template>


<script>
import Text from "@/components/input/InputText.vue"
import Button from "@/components/ui/UiButton.vue"

const { ipcRenderer } = require("electron")


export default {
    name: "FormSearch",
    components: {
        Text,
        Button
    },
    data() {
        return {
            search: null
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
            if (this.search != null) {
                this.searchAdherent()
            }
        },
        async searchAdherent() {
            try {
                const results = await ipcRenderer.invoke('searchAdherent', this.search)
                this.$store.commit('setSearchResults', results)
                this.$router.push({ name: 'Search' })
                console.log(results)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>