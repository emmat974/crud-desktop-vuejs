<template>
    <div v-if="!loading">
        <h1>{{ fullname() }}</h1>
        <p> {{ adherent }}</p>
    </div>
    <div v-else>
        Chargement...
    </div>
</template>

<script>

const { ipcRenderer } = require("electron")

export default {
    name: 'DetailAdherent',
    props: {
        id: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            adherent: null,
            loading: false
        }
    },
    created() {
        this.getAdherent(this.id)
    },
    methods: {
        fullname() {
            return this.adherent.nom + " " + this.adherent.prenom
        },
        async getAdherent(id) {
            this.loading = true
            try {
                await ipcRenderer.send('getAdherent', id)
                await ipcRenderer.on('adherent', (event, arg) => {
                    this.adherent = arg;
                    this.loading = false
                })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>