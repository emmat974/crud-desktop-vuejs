<template>
    <!-- ICI ON METTRA LA NAVIGATION -->
    <Navigation />

    <UserInfo />

    <!-- ICI ON METTRA LA TOP BAR -->
    <Search />
    <!-- ENSNEMBLE DES PAGES-->
    <router-view></router-view>
</template>

<script>
import Navigation from '@/components/NavigationRoute.vue'
import Search from "@/components/form/FormSearch.vue"
import UserInfo from "@/components/user/UserInfo.vue"

export default {
    name: "PageUserConnect",
    components: {
        Navigation,
        Search,
        UserInfo
    },
}
</script>