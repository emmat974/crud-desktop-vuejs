<template>
    <form @submit="checkForm" method="post">
        <Text name="search" label="" type="search" v-model="search" placeholder="Rechercher quelque chose..." />
        <Button text="Rechercher" />
    </form>
</template>


<script>
import Text from "@/components/input/InputText.vue"
import Button from "@/components/ui/UiButton.vue"

export default {
    name: "FormSearch",
    components: {
        Text,
        Button
    },
    data() {
        return {
            search: null
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
            if (this.search != null) {
                console.log(this.$router.push({ name: 'Search', params: { nom: document.querySelector('#search').value } }))
            }
        },
    }
}
</script>