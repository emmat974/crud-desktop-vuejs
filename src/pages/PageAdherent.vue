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
                    <!-- Modal pour la création d'un nouveau adhérent-->
                    <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        <Modal text="+ Ajouter un nouveau adhérent" title="Ajouter un nouveau adhérent">
                            <NewAdherent />
                        </Modal>
                    </div>
                </div>
                <!-- Affichage du résultat finale -->
                <Table :adherents="adherentToShow" />
                <div>

                    <!-- Pagination -->
                    <!-- Bouton précédent -->
                    <button @click="previousPage"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#F59100] border border-gray-300 rounded-lg">
                        Précédente
                    </button>

                    <!-- Bouton suivante -->
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
import Table from '@/components/adherents/TableAdherent.vue';
import Modal from '@/components/ui/modal/UiModal.vue'
import NewAdherent from '@/components/adherents/NewAdherent.vue';

// const { ipcRenderer } = require("electron")

export default {
    name: 'PageAdherent',
    components: {
        Table,
        Modal,
        NewAdherent
    },
    data() {
        return {
            adherents: [],
            adherentPerPage: 7,
            currentPage: 0
        }
    },
    created() {
        // Récèpère les adhérents
        this.fetchAdherents()
    },
    computed: {
        // Affiche les adhérents par rapport à la page courant
        adherentToShow() {
            const start = this.currentPage * this.adherentPerPage
            const end = start + this.adherentPerPage

            return this.adherents.slice(start, end)
        },
    },
    methods: {
        // Calcul le nombre de page total
        totalPages() {
            return Math.ceil(this.adherents.length / this.adherentPerPage)
        },
        // Pagination pour la page précédent
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage--
            }
        },
        // Pagination pour la page suivante
        nextPage() {
            if (this.currentPage < this.totalPages() - 1) {
                this.currentPage++
            }
        },
        // Récupère les adhérents, retourne une promesse
        fetchAdherents() {
            this.adherents = this.$store.getters.getAdherents
        },
    }
}
</script>