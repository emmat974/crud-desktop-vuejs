<template>
    <div>
        <h1> Adhérent </h1>
        <List :Adherents="Adherents" v-if="currentPage == 'ListAdherent'" @changePage="changePage('NewAdherent')"
            @getAdherent="getAdherent" />
        <New v-if="currentPage == 'NewAdherent'" @insertAdherent="insertAdherent" />
        <Detail v-if="currentPage == 'DetailAdherent'" :adherent="currentAdherent" />
    </div>
</template>


<script>
import New from '@/components/adherents/NewAdherent.vue';
import List from '@/components/adherents/ListAdherent.vue';
import Detail from '@/components/adherents/DetailAdherent.vue';

const { ipcRenderer } = require("electron")

export default {
    name: 'PageAdherent',
    components: {
        New,
        List,
        Detail
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
        async getAdherent(id) {
            try {
                await ipcRenderer.send('get', id)
                await ipcRenderer.on('adherent', (event, arg) => {
                    this.currentAdherent = arg;
                    this.changePage('DetailAdherent')
                })
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