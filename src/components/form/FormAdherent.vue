<template>
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" v-show="messageError"
        role="alert">
        <strong class="font-bold"> Vous n'avez pas compléter tous les champs </strong>
    </div>
    <form @submit.prevent="validForm" method="post" id="formAddAdherent">
        <Text name="prenom" label="Prénom" v-model.lazy="localAdherent.prenom" />
        <Text name="nom" label="Nom" v-model.lazy="localAdherent.nom" />
        <Text name="email" label="Email" v-model.lazy="localAdherent.email" type="email" />
        <Text name="telephone" label="Téléphone" v-model.lazy="localAdherent.telephone" />
        <Text name="mobile" label="Mobile" v-model.lazy="localAdherent.mobile" />
        <Textarea name="adresse" label="Adresse" v-model.lazy="localAdherent.adresse" />
        <Text name="numeroCarte" label="Numéro carte" v-model.lazy="localAdherent.numero_carte" type="number" />
        <Text name="dateExpiration" label="Date d'expériation" v-model.lazy="localAdherent.date_expiration" type="date" />
        <Text name="cryptogramme" label="Cryptogramme visuel" v-model.lazy="localAdherent.cryptogramme" type="number" />
        <Button text="Valider" class="btn btn-primary" />
    </form>
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