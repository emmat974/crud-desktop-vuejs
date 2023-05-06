<template>
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
            <div class="inline-flex items-center max-w-full">
                <form @submit="checkForm" method="post"
                    class="flex items-center flex-grow-0 flex-shrink pl-2 relative border bg-[#d9d9d9] rounded-full px-1  py-1 shadow"
                    style="width: 600px">
                    <div class="flex items-center justify-center relative  h-8 w-8 rounded-full">
                        <Button icon="fa-solid fa-magnifying-glass" />
                    </div>
                    <div class="block flex-grow flex-shrink overflow-hidden w-full">
                        <Text name="search" label="" type="search" v-model="search"
                            placeholder="Rechercher quelque chose..." />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
#search {
    background: none !important;
}

#search:focus {
    border: none;
}
</style>

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