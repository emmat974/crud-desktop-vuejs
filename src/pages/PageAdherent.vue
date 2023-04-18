<template>
    <div>
        <h1> Adhérent </h1>
        <List />
    </div>
</template>


<script>
import List from '@/components/adherents/ListAdherent.vue';

export default {
    name: 'PageAdherent',
    components: {
        List,
    }
}
</script>