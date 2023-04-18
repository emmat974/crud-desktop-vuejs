<template>
    <table>
        <thead>
            <tr>
                <th> # </th>
                <th> Nom Prénom </th>
                <th> Actions </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="adherent in adherents" :key="adherent.id">
                <td>{{ adherent.id }}</td>
                <td>
                    <LinkTo :to='{
                        name: "DetailAdherent", params: { id: adherent.id }
                    }' :text="fullname(adherent)" />
                </td>
                <td> ... </td>
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
        fullname(adherent) {
            return adherent.nom + " " + adherent.prenom
        }
    },

}
</script>