<template>
    <!-- Composant du menu à gauche -->
    <div class="text-white w-60">
        <router-link to="/home">
            <img src="@/assets/logo.svg" alt="logo" class="h-25 w-25 ml-10 mt-10 mr-10">
        </router-link>
        <nav>
            <router-link to="/home">
                <div class="text-4xl ml-20 mt-20 mr-20">
                    <i class="fa-sharp fa-solid fa-house"></i>
                </div>
            </router-link>
            <router-link to="/adherent">
                <div class="text-4xl ml-20 mt-20 mr-20">
                    <i class="fa-solid fa-user-group"></i>
                </div>
            </router-link>
        </nav>
    </div>
</template>

<script>

export default {
    name: "NavigationRoute",
}
</script>