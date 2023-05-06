<template>
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
        addAdherent(newAdherent) {
            this.insertAdherent(newAdherent)
        },
        async insertAdherent(adherent) {
            try {
                const result = await ipcRenderer.invoke('insertAdherent', JSON.stringify(adherent))
                this.$router.push({ name: 'DetailAdherent', params: { id: result.insertId } })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>