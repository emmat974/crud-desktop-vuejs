<template>
    <!-- Composant pour créer un textarea -->
    <div class="mb-3">
        <label class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <textarea :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> </textarea>
    </div>
</template>

<script>

export default {
    name: "InputTextarea",
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: false,
            default: '',
        }
    },
    emits: ['update:modelValue']

}
</script>