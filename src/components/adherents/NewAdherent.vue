<template>
    <div class="pt-6 px-4 w-full pt-6 px-4 w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" v-show="messageError"
                    role="alert">
                    <strong class="font-bold"> Vous n'avez pas compléter tous les champs </strong>
                </div>
                <form @submit="validForm" method="post" id="formAddAdherent">
                    <Text name="prenom" label="Prénom" v-model="prenom" />
                    <Text name="nom" label="Nom" v-model="nom" />
                    <Text name="email" label="Email" v-model="email" type="email" />
                    <Text name="telephone" label="Téléphone" v-model="telephone" />
                    <Text name="mobile" label="Mobile" v-model="mobile" />
                    <Textarea name="adresse" label="Adresse" v-model="adresse" />
                    <Text name="numeroCarte" label="Numéro carte" v-model="numeroCarte" type="number" />
                    <Text name="dateExpiration" label="Date d'expériation" v-model="dateExpiration" type="date" />
                    <Text name="cryptogramme" label="Cryptogramme visuel" v-model="cryptogramme" type="number" />
                    <Button text="Ajouter un nouveau adhérent" class="btn btn-primary" />
                </form>
            </div>
        </div>
    </div>
</template>

<style>
#formAddAdherent input {
    border: 1px solid;
}

#formAddAdherent textarea {
    border: 1px solid;
}
</style>

<script>
import Text from '@/components/input/InputText.vue'
import Textarea from '@/components/input/InputTextarea.vue'
import Button from '@/components/ui/UiButton.vue'

const { ipcRenderer } = require("electron")

export default {
    name: 'NewAdherent',
    components: {
        Text,
        Textarea,
        Button
    },
    data() {
        return {
            nom: null,
            prenom: null,
            adresse: null,
            email: null,
            telephone: null,
            mobile: null,
            numeroCarte: null,
            dateExpiration: null,
            cryptogramme: null,
            messageError: false
        }
    },
    methods: {
        validForm(e) {
            e.preventDefault()

            if (this.nom != null ||
                this.prenom != null ||
                this.email != null ||
                this.telephone != null ||
                this.mobile != null ||
                this.adresse != null ||
                this.numeroCarte != null ||
                this.dateExpiration != null ||
                this.cryptogramme != null) {
                this.addAdherent()
            } else {
                this.messageError = true
            }


        },
        addAdherent() {
            const adherent = {
                nom: this.nom,
                prenom: this.prenom,
                email: this.email,
                telephone: this.telephone,
                mobile: this.mobile,
                adresse: this.adresse,
                numero_carte: this.numeroCarte,
                date_expiration: this.dateExpiration,
                cryptogramme: this.cryptogramme
            }

            this.messageError = false
            this.insertAdherent(adherent)
        },
        async insertAdherent(adherent) {
            try {
                await ipcRenderer.invoke('insertAdherent', adherent)
                this.$router.push({ name: 'Adherent' })
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>