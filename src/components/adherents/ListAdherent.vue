<template>
    <Button @onClick="$emit('changePage')" text="Ajouter" />
    <Table :adherents="adherents" @getAdherent="$emit('getAdherent', $event)" />
</template>

<script>
import Button from '@/components/ui/UiButton.vue';
import Table from '@/components/adherents/TableAdherent.vue';

export default {
    name: "ListAdherent",
    components: {
        Button,
        Table
    },
    props: {
        adherents: {
            type: Object,
            required: true
        },
        getAdherent: {
            type: Function,
            required: true
        },
        changePage: {
            type: Function,
            required: true
        }
    }
}
</script>