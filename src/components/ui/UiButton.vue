<template>
    <!-- Composant pour créer un bouton -->
    <button type="submit" @click="$emit('onClick')" class="text-white font-medium font-light py-2 px-4 rounded-lg">
        <template v-if="icon">
            <i :class="icon"></i>
        </template>
        {{ text }}
    </button>
</template>

<style>
.btn-primary {
    color: white;
    background: #F59100;
}

.btn-danger {
    color: white;
    background: red;
}
</style>

<script>

export default {
    name: "UiButton",
    props: {
        text: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>