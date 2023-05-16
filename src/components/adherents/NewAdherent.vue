<template>
    <!-- Page pour créer un nouveau adhérent -->
    <FormAdherent :adherent="adherent" @submit="addAdherent" />
</template>

<script>
import FormAdherent from '../form/FormAdherent.vue'

const { ipcRenderer } = require("electron")

export default {
    name: 'NewAdherent',
    components: {
        FormAdherent
    },
    data() {
        return {
            // Valeur par rapport d'un adhérent
            adherent: {
                nom: null,
                prenom: null,
                email: null,
                telephone: null,
                mobile: null,
                adresse: null,
                numero_carte: null,
                date_expiration: null,
                cryptogramme: null
            }
        }
    },
    methods: {
        // Callback pour ajouter un nouveau adhérent
        addAdherent(newAdherent) {
            this.insertAdherent(newAdherent)
        },
        // Ajoute un adhérent, retourne une promesse et renvoie sur la page du nouveau adhérent créer
        async insertAdherent(adherent) {
            try {
                const result = await ipcRenderer.invoke('insertAdherent', JSON.stringify(adherent))
                this.$store.commit('addAdherent', { ...adherent, id: result.insertId })
                this.$router.push({ name: 'DetailAdherent', params: { id: result.insertId } })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>