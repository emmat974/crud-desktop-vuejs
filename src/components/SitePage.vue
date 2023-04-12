<template>
    <div>
        <Button text="Home" @onClick="changePage('Home')" />
        <Button text="Connexion" @onClick="changePage('Connexion')" />
        <Button text="Adherent" @onClick="changePage('Adherent')" />
        <Search @changePage="changePage" />
        <component :is="component" />
    </div>
</template>

<script>
import Adherent from '@/pages/PageAdherent.vue';
import Connexion from '@/pages/PageConnexion.vue';
import Home from '@/pages/PageHome.vue';
import Button from '@/components/ui/UiButton.vue';
import Search from '@/components/form/FormSearch.vue';

export default {
    name: "SitePage",
    components: {
        Adherent,
        Connexion,
        Home,
        Button,
        Search
    },
    data() {
        return {
            component: null,
            currentPage: null
        }
    },
    created() {
        this.changePage('Adherent')
    },
    methods: {
        changePage(component) {
            console.log("CHANGE DE PAGE")
            this.component = component
            this.currentPage = component.toLowerCase()
        },
    }
}
</script>