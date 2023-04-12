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
                    <Button @onClick="$emit('getAdherent', adherent.id)" :text="fullname(adherent)" />
                </td>
                <td> ... </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Button from "@/components/ui/UiButton.vue"

export default {
    name: "TableAdherent",
    components: {
        Button
    },
    props: {
        getAdherent: {
            type: Function,
            required: true
        },
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