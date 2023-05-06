<template>
    <button type="submit" @click="$emit('onClick')">
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