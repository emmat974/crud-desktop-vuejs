<template>
    <Table :adherents="adherents" />
</template>

<script>
import Table from '../adherents/TableAdherent.vue';

export default {
    name: "ResultSearch",
    components: {
        Table
    },
    props: {
        adherents: {
            type: Object,
            required: true
        }
    }
}
</script>