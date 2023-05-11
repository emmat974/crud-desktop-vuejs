<template>
    <!-- Composant pour créer un bouton -->
    <button type="submit" @click="$emit('onClick')"
        class="bg-[#F59100] text-white text-white font-medium font-light py-2 px-4 rounded-lg">
        <template v-if="icon">
            <i :class="icon"></i>
        </template>
        {{ text }}
    </button>
</template>

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