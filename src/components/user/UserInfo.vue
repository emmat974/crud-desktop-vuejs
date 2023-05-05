<template>
    <div>
        {{ this.$store.getters.getUser }}
    </div>
</template>

<script>
export default {
    name: "InfoUser"
}
</script>