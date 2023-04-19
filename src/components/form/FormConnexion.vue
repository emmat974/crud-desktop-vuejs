<template>
    <form @submit="checkForm" method="post">
        <Text name="email" label="Email" type="email" v-model="email" />
        <Text name="password" label="Mot de passe" type="password" v-model="password" />
        <Button text="Me connecter" />
    </form>
</template>

<script>
import Text from "@/components/input/InputText.vue"
import Button from "@/components/ui/UiButton.vue"

const { ipcRenderer } = require("electron")

export default {
    name: "FormConnexion",
    components: {
        Text,
        Button
    },
    data() {
        return {
            loading: false,
            email: null,
            password: null
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
            this.login();
        },
        async login() {
            this.loading = true
            try {
                await ipcRenderer.send('loginEmploye', this.email, this.password)

                // Si on réussi à ce connecter
                await ipcRenderer.on('login', (event, arg) => {
                    this.$root.setEmploye(arg)
                    this.$router.push({ name: 'Home' })
                })

                this.loading = false
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>