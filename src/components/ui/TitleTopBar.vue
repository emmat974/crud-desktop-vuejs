<template>
    <!-- Composant pour afficher le titre de la page courant -->
    <!-- CODE DE ERWIN -->
    <div class="inline-flex">
        <h1 class="text-3xl font-bold">{{ this.$route.meta.title }}</h1>
    </div>
</template>

<script>
export default {
    name: "TitleTopBar",
}
</script>