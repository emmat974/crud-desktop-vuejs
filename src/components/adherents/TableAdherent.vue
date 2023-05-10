<template>
    <!-- Tableau pour afficher les adhérents qu'on lui aurait passé -->
    <table class="w-full text-sm text-left my-4">
        <tbody>
            <tr class="bg-[#EDF2F2] shadow text-black text-base" v-for="adherent in adherents" :key="adherent.id">
                <th scope="row" class="px-6 py-4 font-bold rounded-l-lg w-4/4">#{{ adherent.id }}</th>
                <td class="w-3/4">
                    <LinkTo :to='{
                        name: "DetailAdherent", params: { id: adherent.id }
                    }' :text="fullname(adherent)" />
                </td>
                <td class="px-6 py-4 rounded-r-lg text-right text-[#F59100] font-bold w-2/4">
                    <i class="fa-solid fa-eye"></i>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import LinkTo from "@/components/ui/LinkTo.vue"

export default {
    name: "TableAdherent",
    components: {
        LinkTo
    },
    props: {
        adherents: {
            type: Object,
            required: true
        }
    },
    methods: {
        // Affiche le nom & prénom de l'adhérent
        fullname(adherent) {
            return adherent.nom + " " + adherent.prenom
        }
    },

}
</script>