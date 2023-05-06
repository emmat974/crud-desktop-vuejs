<template>
    <div class="relative flex min-h-screen">
        <!-- Sidebar -->
        <Navigation />
        <!-- End sidebar -->

        <!-- Main -->
        <div class="flex-1 bg-[#EDF2F2] p-4" id="main">
            <nav class="w-full flex relative justify-between items-center mx-auto mt-5 px-8 h-20">
                <!-- logo -->
                <TitleTopBar title="test" />
                <!-- end logo -->

                <!-- search bar -->
                <Search />
                <!-- end search bar -->

                <!-- login -->
                <UserInfo />
                <!-- end login -->
            </nav>

            <!-- Le contain -->
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