<template>
    <button type="submit" :class="'btn btn-' + type" @click="$emit('onClick')">
        {{ text }}
    </button>
</template>

<script>

export default {
    name: "UiButton",
    props: {
        type: {
            type: String,
            required: false,
            default: "primary"
        },
        text: {
            type: String,
            required: false,
            default: "Ton bouton n'a pas de valeur"
        },
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>