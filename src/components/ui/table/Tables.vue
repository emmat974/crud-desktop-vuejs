<template>
    <table>
        <thead>
            <th v-for="element, index in elements" :key="index">
                {{ element.name }}
            </th>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Tables",
    props: {
        elements: {
            type: Object,
            required: true
        }
    }
}
</script>