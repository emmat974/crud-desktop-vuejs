<template>
    <div class="relative flex min-h-screen">
        <!-- Bar de navigation -->
        <Navigation />

        <!-- Main -->
        <div class="flex-1 bg-[#EDF2F2] p-4" id="main">
            <nav class="w-full flex relative justify-between items-center mx-auto mt-5 px-8 h-20">
                <!-- Titre de la page courant -->
                <TitleTopBar />

                <!-- Barre de recherche -->
                <Search />

                <!-- Information concernant l'utilisateur -->
                <UserInfo />
            </nav>

            <!-- Le container-->
            <div class="p-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
body {
    background: #111111;
}

#main {
    border-radius: 50px 0 0 50px;
}
</style>

<script>
import Navigation from '@/components/NavigationRoute.vue'
import Search from "@/components/form/FormSearch.vue"
import UserInfo from "@/components/user/UserInfo.vue"
import TitleTopBar from '@/components/ui/TitleTopBar.vue'

export default {
    name: "PageUserConnect",
    components: {
        Navigation,
        Search,
        UserInfo,
        TitleTopBar
    },
}
</script>