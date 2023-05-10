<template>
    <!-- Composant pour créer un input texte -->
    <div>
        <label class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <input :type="type" :name="name" :id="name"
            class=" appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
    </div>
</template>

<script>

export default {
    name: "InputText",
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: "text"
        },
        modelValue: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    emits: ['update:modelValue']
}
</script>