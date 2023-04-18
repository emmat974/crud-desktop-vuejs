<template>
    <form @submit="checkForm" method="post">
        <Text name="email" label="Email" type="email" />
        <Text name="password" label="Mot de passe" type="password" />
        <Button text="Me connecter" @onClick="testEvent()" />
    </form>
</template>

<script>
import Text from "@/components/input/InputText.vue"
import Button from "@/components/ui/UiButton.vue"

export default {
    name: "FormConnexion",
    components: {
        Text,
        Button
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
        },
        async login() {

        }
    }
}
</script>