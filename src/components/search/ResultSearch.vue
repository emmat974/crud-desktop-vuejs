<template>
    <Table :adherents="adherents" @getAdherent="$emit('getAdherent', $event)" />
</template>

<script>
import Table from '../adherents/TableAdherent.vue';

export default {
    name: "ResultSearch",
    components: {
        Table
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
    }
}
</script>