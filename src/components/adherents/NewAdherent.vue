<template>
    <div>
        <form @submit="validForm" method="post">
            <Text name="prenom" label="Prénom" v-model="prenom" />
            <Text name="nom" label="Nom" v-model="nom" />
            <Text name="email" label="Email" v-model="email" type="email" />
            <Text name="telephone" label="Téléphone" v-model="telephone" />
            <Text name="mobile" label="Mobile" v-model="mobile" />
            <Textarea name="adresse" label="Adresse" v-model="adresse" />
            <Text name="numeroCarte" label="Numéro carte" v-model="numeroCarte" type="number" />
            <Text name="dateExpiration" label="Date d'expériation" v-model="dateExpiration" type="date" />
            <Text name="cryptogramme" label="Cryptogramme visuel" v-model="cryptogramme" type="number" />
            <Button text="Ajouter un nouveau adhérent" />
        </form>
    </div>
</template>

<script>
import Text from '@/components/input/InputText.vue'
import Textarea from '@/components/input/InputTextarea.vue'
import Button from '@/components/ui/UiButton.vue'

export default {
    name: 'NewAdherent',
    components: {
        Text,
        Textarea,
        Button
    },
    props: {
        insertAdherent: {
            type: Function
        }
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
            cryptogramme: null
        }
    },
    methods: {
        validForm: function (e) {
            e.preventDefault()

            const adherent = {
                nom: this.nom,
                prenom: this.nom,
                email: this.email,
                telephone: this.telephone,
                mobile: this.mobile,
                adresse: this.adresse,
                numero_carte: this.numeroCarte,
                date_expiration: this.dateExpiration,
                cryptogramme: this.cryptogramme
            }

            this.$emit('insertAdherent', adherent)
        }
    }
}
</script>