<template>
    <!-- Formulaire pour un adhérent-->
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" v-show="messageError"
        role="alert">
        <strong class="font-bold"> Vous n'avez pas compléter tous les champs </strong>
    </div>

    <div class="w-full">
        <form @submit.prevent="validForm" method="post" id="formAddAdherent" class="pt-6 pb-8 mb-4">
            <div class="flex flex-wrap -mx-4 mb-4">
                <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <Text name="prenom" label="Prénom" v-model.lazy="localAdherent.prenom" />
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <Text name="nom" label="Nom" v-model.lazy="localAdherent.nom" />
                </div>
            </div>
            <div class="mb-4">
                <Text name="email" label="Email" v-model.lazy="localAdherent.email" type="email" />
            </div>
            <div class="mb-4">
                <Text name="telephone" label="Téléphone" v-model.lazy="localAdherent.telephone" />
            </div>
            <div class="mb-4">
                <Textarea name="adresse" label="Adresse" v-model.lazy="localAdherent.adresse" />
            </div>
            <div class="flex flex-wrap -mx-4 mb-4">
                <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <Text name="numeroCarte" label="Numéro carte" v-model.lazy="localAdherent.numero_carte" type="number" />
                </div>
                <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <Text name="dateExpiration" label="Date d'expériation" v-model.lazy="localAdherent.date_expiration"
                        type="date" />
                </div>

                <div class="w-full md:w-1/3 px-4">
                    <Text name="cryptogramme" label="Cryptogramme visuel" v-model.lazy="localAdherent.cryptogramme"
                        type="number" />
                </div>
            </div>
            <div class="flex items-center justify-center">
                <Button text="Valider" class="btn btn-primary" />
            </div>
        </form>
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

export default {
    name: 'FormAdherent',
    components: {
        Text,
        Textarea,
        Button
    },
    emits: ['submit'],
    props: {
        adherent: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localAdherent: Object.assign({}, this.adherent),
            messageError: false
        }
    },
    methods: {
        // Vérification des données avant d'appeler le callback
        validForm(e) {
            e.preventDefault()
            this.messageError = false

            if (this.localAdherent.nom != null ||
                this.localAdherent.prenom != null ||
                this.localAdherent.email != null ||
                this.localAdherent.telephone != null ||
                this.localAdherent.mobile != null ||
                this.localAdherent.adresse != null ||
                this.localAdherent.numero_carte != null ||
                this.localAdherent.date_expiration != null ||
                this.localAdherent.cryptogramme != null) {

                this.$emit('submit', this.localAdherent)

            } else {
                this.messageError = true
            }
        }
    }
}
</script>