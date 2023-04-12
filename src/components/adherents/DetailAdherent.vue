<template>
    <div>
        <h1>{{ getFullName() }}</h1>
        <p> {{ adherent }}</p>
    </div>
</template>

<script>

export default {
    name: 'DetailAdherent',
    props: {
        id: {
            type: Number,
            required: true
        },
        adherent: {
            type: Object,
            required: true
        }
    },
    methods: {
        getFullName() {
            return this.adherent.nom + " " + this.adherent.prenom
        },
    }
}
</script>