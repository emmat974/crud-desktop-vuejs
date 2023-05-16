<template>
    <!-- Permet d'afficher un adhérent -->
    <div v-if="!loading">
        <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
            <div>
                <div class="mb-8">
                    <!-- <img src="@/assets/carte.png" id="carte-img" class="w-full" /> -->
                    <canvas id="canvas" class="w-full"></canvas>
                </div>

                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">Solde disponible</span>
                        </div>
                    </div>
                    <span class="text-7xl sm:text-7xl leading-none font-bold text-gray-900">144,02 €</span>
                </div>
            </div>
            <div class="bg-white shadow rounded-lg">
                <div class=" p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span class="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
                                Information adhérent : {{ fullname() }}
                            </span>
                        </div>
                    </div>
                    <!-- Si utilisateur est un administrateur, peut supprimer & modifier adherent courant-->
                    <template v-if="this.$store.getters.getUser.roles == 'ADMIN'">
                        <Button bg="bg-[#c53620]" text="Supprimer" @onClick="removeAdherent(adherent.id)" />
                        <Modal text="Modifier" title="Modifier l'adhérent">
                            <EditAdherent :adherent="adherent" />
                        </Modal>
                    </template>
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
import Modal from "@/components/ui/modal/UiModal.vue"
import EditAdherent from "./EditAdherent.vue"
import Button from "@/components/ui/UiButton.vue"
import imageCarte from "@/assets/carte.png"

const { ipcRenderer } = require("electron")

export default {
    name: 'DetailAdherent',
    components: {
        Modal,
        EditAdherent,
        Button
    },
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
        // On récupère un adhérent par rapport à l'id qu'on lui aurait passé
        this.getAdherent(this.id)
    },
    methods: {
        // On affiche le nom & prénom de l'adhérent
        fullname() {
            return this.adherent.nom + " " + this.adherent.prenom
        },
        // On récupère adhérent par rapport à l'id
        async getAdherent(id) {
            this.loading = true
            try {
                this.adherent = await ipcRenderer.invoke('getAdherent', id)
                this.loading = false
                console.log(this.adherent)
                console.log(this.loading)
                this.generateInfoCarte()
            } catch (error) {
                console.error(error)
            }
        },
        generateInfoCarte() {
            setTimeout(() => {
                const canvas = document.querySelector("#canvas");

                if (canvas) {
                    const ctx = canvas.getContext("2d");
                    const image = new Image()
                    // Gérer l'événement de chargement de l'image
                    image.onload = () => {
                        canvas.width = image.width;
                        canvas.height = image.height;
                        // Dessiner l'image sur le canvas
                        ctx.drawImage(image, 0, 0);
                        // Ajouter du texte sur l'image
                        ctx.font = "15px Arial";
                        ctx.fillStyle = "black";
                        ctx.fillText(this.adherent.numero_carte, 30, 101);
                        // Format la date
                        const date = new Date(this.adherent.date_expiration);
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = String(date.getFullYear());
                        const formattedDate = `${month}/${year}`;
                        ctx.fillText(formattedDate, 30, 168);
                        // Affiche le code
                        ctx.fillText(this.adherent.cryptogramme, 95, 168);
                    };
                    image.src = imageCarte
                } else {
                    console.error("L'élément canvas n'a pas été trouvé.");
                }
            }, 10)
        },
        // On supprime l'adhérent
        async removeAdherent() {
            try {
                if (this.$store.getters.getUser.roles == 'ADMIN') {
                    if (window.confirm('Etes-vous sûr(e) de vouloir supprimer ' + this.fullname() + " ?")) {
                        await ipcRenderer.invoke('deleteAdherent', this.adherent.id);
                        this.$store.commit('deleteAdherent', this.adherent.id)
                        this.$router.push({ name: 'Adherent' });
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>