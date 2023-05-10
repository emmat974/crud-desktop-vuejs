<template>
    <!-- Composant de page de connexion -->
    <div>
        <h1> A coder </h1>
        <p> Connexion </p>
        <Form />
    </div>
</template>

<script>
import Form from "@/components/form/FormConnexion.vue"

export default {
    name: 'PageConnexion',
    components: {
        Form
    }
}
</script>