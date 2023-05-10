<template>
    <!-- Composant pour créer un input texte -->
    <div>
        <label class="form-label">{{ label }}</label>
        <input :type="type" :name="name" :id="name" class="form-control w-full" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
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