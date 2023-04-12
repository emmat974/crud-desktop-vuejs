<template>
    <div>
        <h1> Adhérent </h1>
        <ListAdherent :Adherents="Adherents" v-if="currentPage == 'ListAdherent'" @changePage="changePage('NewAdherent')" />
        <NewAdherent v-if="currentPage == 'NewAdherent'" @insertAdherent="insertAdherent" />
    </div>
</template>


<script>
import NewAdherent from '@/components/adherents/NewAdherent.vue';
import ListAdherent from '@/components/adherents/ListAdherent.vue';

const { ipcRenderer } = require("electron")

export default {
    name: 'PageAdherent',
    components: {
        NewAdherent,
        ListAdherent,
    },
    data() {
        return {
            currentPage: null,
            currentAdherent: null,
            Adherents: null
        }
    },
    created() {
        this.changePage('ListAdherent')
        this.fetchAdherents()
    },
    methods: {
        async fetchAdherents() {
            ipcRenderer.send('fetch')
            ipcRenderer.on('allAdherents', (event, arg) => {
                this.Adherents = arg;
            })
        },
        async insertAdherent(adherent) {
            try {
                await ipcRenderer.send('insert', adherent)
                await this.fetchAdherents()
                this.changePage('ListAdherent')
            } catch (error) {
                console.error(error)
            }
        },
        changePage(page) {
            this.currentPage = page
        }
    }
}
</script>