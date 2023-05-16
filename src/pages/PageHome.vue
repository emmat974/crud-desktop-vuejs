<template>
    <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
        <!-- Section pour afficher le graphique -->
        <div style="grid-column: span 2/3;">
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">Nouveau
                            adhérant</span>
                    </div>
                </div>
                <!-- Le graphique -->
                <GraphChart :data="data" width="800" height="400" />
            </div>
        </div>
        <div>
            <!-- Section pour afficher les 5 dernières adhérents sous forme de tableau -->
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                            Adhérants
                        </span>
                    </div>
                    <!-- Création de nouveau adhérent-->
                    <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        <Modal text="+" title="Ajouter un nouveau adhérent">
                            <NewAdherent />
                        </Modal>
                    </div>
                </div>
                <!-- Résultat des 5 dernières adhérents, sous formes de tableau -->
                <TableAdherent :adherents="this.$store.getters.getAdherents.slice(0, 5)" />
                <!-- end tableau -->
            </div>
        </div>
    </div>
</template>

<style>
table {
    border-spacing: 0px 10px;
    text-indent: 0;
    border-collapse: inherit;
}
</style>

<script>
import GraphChart from '@/components/graph/GraphChart.vue';
import TableAdherent from '@/components/adherents/TableAdherent.vue';
import Modal from '@/components/ui/modal/UiModal.vue'
import NewAdherent from '@/components/adherents/NewAdherent.vue';


// const { ipcRenderer } = require("electron")

export default {
    name: 'PageHome',
    components: {
        GraphChart,
        TableAdherent,
        Modal,
        NewAdherent
    },
    data() {
        return {
            // Les données pour le graphique, peut être rendu dynamique mais doit respecter cette forme
            data: {
                labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5'],
                datasets: [{
                    label: "Adhérents",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    color: "red",
                    data: [123, 100, 80, 120, 140, 123],
                    min: 0
                }],
            },
        }
    },
}

</script>