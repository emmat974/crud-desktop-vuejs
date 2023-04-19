<template>
    <LinkTo :to="{
        name: 'AddAdherent'
    }" text="Ajouter" />
    <Table :adherents="adherents" />
</template>

<script>
import LinkTo from '@/components/ui/LinkTo.vue';
import Table from '@/components/adherents/TableAdherent.vue';

const { ipcRenderer } = require("electron")

export default {
    name: "ListAdherent",
    components: {
        LinkTo,
        Table
    },
    data() {
        return {
            adherents: []
        }
    },
    created() {
        this.fetchAdherents()
    },
    methods: {
        async fetchAdherents() {
            ipcRenderer.send('fetchAdherents')
            ipcRenderer.on('allAdherents', (event, arg) => {
                this.adherents = arg;
            })
        },
    }
}
</script>