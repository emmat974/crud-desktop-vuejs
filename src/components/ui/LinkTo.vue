<template>
    <router-link :to="to">{{ text }}</router-link>
</template>

<script>
export default {
    name: "LinkTo",
    props: {
        to: {
            type: Object,
            required: true
        },
        text: {
            type: String,
            required: false,
            default: "Aucune valeur n'a été saisir"
        }
    }
}
</script>