<template>
    <div v-if="!loading">
        <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
            <div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">Solde disponible</span>
                        </div>
                    </div>
                    <span class="text-7xl sm:text-7xl leading-none font-bold text-gray-900">144,02 €</span>
                </div>
            </div>
            <div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                                Information d'adhérent
                            </span>
                        </div>
                    </div>
                    <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                        Adresse <br />
                    </span>
                    {{ adherent.adresse }} <br />
                    <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                        Téléphone <br />
                    </span>
                    {{ adherent.mobile }} <br />
                    {{ adherent.fixe }} <br />

                    <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                        Email <br />
                    </span>
                    {{ adherent.email }} <br />
                </div>
            </div>
        </div>

        <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
            <div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">Historiques</span>
                        </div>
                    </div>

                    <table class="w-full text-sm text-left my-4">
                        <tbody>
                            <tr class="bg-[#EDF2F2] shadow text-black text-base" v-for="history in histories"
                                :key="history.id">
                                <th scope="row" class="px-6 py-4 font-bold rounded-l-lg w-4/4">{{ history.date }}</th>
                                <td class="w-3/4">
                                    {{ history.intitule }}
                                </td>
                                <td class="px-6 py-4 rounded-r-lg text-right  font-bold w-2/4">
                                    {{ history.solde }}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </div>
    <div v-else>
        Chargement...
    </div>
</template>

<script>

const { ipcRenderer } = require("electron")

export default {
    name: 'DetailAdherent',
    props: {
        id: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            adherent: null,
            loading: false,
            histories: [
                {
                    id: 1,
                    date: "12/04/2023",
                    intitule: "ACHAT Cap méchant GO - SAINT GILLES",
                    solde: "-84,99 €"
                },
                {
                    id: 2,
                    date: "05/04/2023",
                    intitule: "ACHAT Shio Burger - SAINT DENIS",
                    solde: "-20,99 €"
                },
                {
                    id: 3,
                    date: "03/04/2023",
                    intitule: "AJOUTE Réapprovisionnement compte",
                    solde: "+250,00 €"
                }
            ]
        }
    },
    created() {
        this.getAdherent(this.id)
    },
    methods: {
        fullname() {
            return this.adherent.nom + " " + this.adherent.prenom
        },
        async getAdherent(id) {
            this.loading = true
            try {
                this.adherent = await ipcRenderer.invoke('getAdherent', id)
            } catch (error) {
                console.error(error)
            }
            this.loading = false

        },
    }
}
</script>