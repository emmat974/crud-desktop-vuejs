<template>
    <router-link :to="to">{{ text }}</router-link>
</template>

<style>
.btn {
    border-radius: 10px;
    padding: 5px 30px;
}

.btn-primary {
    color: white;
    background: #F59100;
}
</style>

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