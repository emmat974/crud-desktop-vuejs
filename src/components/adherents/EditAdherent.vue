<template>
    <!-- Page pour modifier un adhérent-->
    <FormAdherent :adherent="data" @submit="editAdherent" />
</template>

<script>
import FormAdherent from '../form/FormAdherent.vue'

const { ipcRenderer } = require("electron")

export default {
    name: 'EditAdherent',
    components: {
        FormAdherent
    },
    props: {
        adherent: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            data: {}
        }
    },
    created() {
        // On passe les données dans le composant car on ne peut pas modifier une donnée props
        this.data = this.adherent
        this.data.date_expiration = new Date(this.adherent.date_expiration).toISOString().substr(0, 10)
    },
    methods: {
        // Callback pour lancer édition
        editAdherent(adherent) {
            if (this.$store.getters.getUser.roles == "ADMIN") {
                this.edit(adherent)
            }
        },
        // Édit un adhérent, retourne une promesse
        async edit(adherent) {
            try {
                await ipcRenderer.invoke('updateAdherent', JSON.stringify(adherent))
                this.$store.commit('updateAdherent', adherent)
                this.$router.push({ name: 'DetailAdherent', params: { id: adherent.id } })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>