<template>
    <div>
        <h1> Rechercher {{ search }} </h1>
        <Result :adherents="adherents" />
    </div>
</template>


<script>
import Result from "@/components/search/ResultSearch.vue"

const { ipcRenderer } = require("electron")

export default {
    name: 'PageSearch',
    components: {
        Result,
    },
    props: {
        nom: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            adherents: null,
        }
    },
    mounted() {
        this.searchAdherent(this.nom)
    },
    methods: {
        async searchAdherent(search) {
            this.adherents = null
            try {
                await ipcRenderer.send('searchAdherent', search)
                await ipcRenderer.on('searchAdherent', (event, arg) => {
                    this.adherents = arg
                })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>