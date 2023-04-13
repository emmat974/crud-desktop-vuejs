<template>
    <div>
        <h1> Rechercher {{ search }} </h1>
        <Result :adherents="adherents" @getAdherent="getAdherent" @changePage="changePage" />
        <Detail v-if="currentPage == 'DetailAdherent'" :adherent="currentAdherent" />
    </div>
</template>


<script>
import Result from "@/components/search/ResultSearch.vue"
import Detail from '@/components/adherents/DetailAdherent.vue';

const { ipcRenderer } = require("electron")

export default {
    name: 'PageSearch',
    components: {
        Result,
        Detail
    },
    data() {
        return {
            adherents: null,
            search: null
        }
    },
    mounted() {
        this.search = document.querySelector('#search').value
        this.searchAdherent(this.search)
    },
    methods: {
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
        async searchAdherent(search) {
            try {
                await ipcRenderer.send('search', search)
                await ipcRenderer.on('searchAdherent', (event, arg) => {
                    this.adherents = arg
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