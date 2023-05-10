<template>
    <section class="bg-[#EDF2F2]">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div class="text-center ">
                        <img src="@/assets/logo.svg" class="w-24 mx-auto mb-3" />
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Connexion
                        </h1>
                    </div>
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        v-show="messageError" role="alert">
                        <strong class="font-bold"> Mot de passe/Email incorrect </strong>
                    </div>

                    <form class="space-y-4 md:space-y-6" @submit="checkForm" method="post">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email"
                                class="bg-[#d9d9d9] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="johndoe@gmail.com" required="" v-model="email">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mot
                                de passe</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-[#d9d9d9] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required="" v-model="password">
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-[#F59100] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Me
                            connecter</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const { ipcRenderer } = require("electron")

export default {
    name: "FormConnexion",
    data() {
        return {
            loading: false,
            email: null,
            password: null,
            messageError: false
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
                await ipcRenderer.invoke('loginEmploye', this.email, this.password).then((result) => {
                    if (result) {
                        this.$store.commit('setUser', result)
                        this.$router.push({ name: 'Home' })
                    } else {
                        this.messageError = true
                    }
                }).catch((error) => {
                    console.error(error)
                })
                this.loading = false
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>