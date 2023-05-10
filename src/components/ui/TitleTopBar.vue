<template>
    <!-- Composant pour afficher le titre de la page courant -->
    <!-- CODE DE ERWIN -->
    <div class="inline-flex">
        <h1 class="text-3xl font-bold">{{ this.$route.name }}</h1>
    </div>
</template>

<script>
export default {
    name: "TitleTopBar",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>