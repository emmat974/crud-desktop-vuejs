<template>
    <div class="mb-3">
        <label class="form-label">{{ label }}</label>
        <textarea :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> </textarea>
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