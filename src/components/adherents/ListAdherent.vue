<template>
    <div>
        <Button @onClick="$emit('changePage')" text="Ajouter" />
    </div>
    <table>
        <thead>
            <tr>
                <th> # </th>
                <th> Nom Prénom </th>
                <th> Actions </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="adherent in Adherents" :key="adherent.id">
                <td>{{ adherent.id }}</td>
                <td>{{ getFullName(adherent) }}</td>
                <td> ... </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Button from '@/components/ui/UiButton.vue';


export default {
    name: "ListAdherent",
    components: {
        Button
    },
    props: {
        Adherents: {
            type: Object,
            required: false
        },
        changePage: {
            type: Function
        }
    },
    methods: {
        getFullName(adherent) {
            return adherent.nom + " " + adherent.prenom
        }
    }
}
</script>