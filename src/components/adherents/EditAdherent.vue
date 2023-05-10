<template>
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
        this.data = this.adherent
        this.data.date_expiration = new Date(this.adherent.date_expiration).toISOString().substr(0, 10)
    },
    methods: {
        editAdherent(adherent) {
            if (this.$store.getters.getUser.roles == "ADMIN") {
                this.edit(adherent)
            }
        },
        async edit(adherent) {
            try {
                const result = await ipcRenderer.invoke('updateAdherent', JSON.stringify(adherent))
                this.$router.push({ name: 'DetailAdherent', params: { id: result.id } })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>