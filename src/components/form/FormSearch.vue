<template>
    <form @submit="checkForm" method="post">
        <Text name="search" label="" type="search" placeholder="Rechercher quelque chose..." />
        <Button text="Rechercher" />
    </form>
</template>


<script>
import Text from "@/components/input/InputText.vue"
import Button from "@/components/ui/UiButton.vue"

export default {
    name: "FormSearch",
    props: {
        changePage: {
            type: Function
        }
    },
    components: {
        Text,
        Button
    },
    data() {
        return {
            name: null
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
        },

    }
}
</script>