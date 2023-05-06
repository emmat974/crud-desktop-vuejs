<template>
    <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                            Adhérants
                        </span>
                    </div>
                    <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        <LinkTo :to="{
                            name: 'AddAdherent'
                        }" text="+ Ajouter un nouveau élément" style="" class="font-medium shadow btn btn-primary" />
                    </div>
                </div>
                <Table :adherents="adherentToShow" />
                <div>

                    <button @click="previousPage"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#F59100] border border-gray-300 rounded-lg">
                        Précédente
                    </button>

                    <!-- Next Button -->
                    <button @click="nextPage"
                        class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-[#F59100] border border-gray-300 rounded-lg">
                        Suivante
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import LinkTo from '@/components/ui/LinkTo.vue';
import Table from '@/components/adherents/TableAdherent.vue';

const { ipcRenderer } = require("electron")

export default {
    name: 'PageAdherent',
    components: {
        Table,
        LinkTo
    },
    data() {
        return {
            adherents: [],
            adherentPerPage: 7,
            currentPage: 0
        }
    },
    created() {
        this.fetchAdherents()
    },
    computed: {
        adherentToShow() {
            const start = this.currentPage * this.adherentPerPage
            const end = start + this.adherentPerPage

            return this.adherents.slice(start, end)
        },
    },
    methods: {
        totalPages() {
            return Math.ceil(this.adherents.length / this.adherentPerPage)
        },
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage--
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages() - 1) {
                this.currentPage++
            }
        },
        async fetchAdherents() {
            this.adherents = await ipcRenderer.invoke('fetchAdherents')
        },
    }
}
</script>