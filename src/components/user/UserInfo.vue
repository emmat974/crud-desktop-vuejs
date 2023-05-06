<template>
    <div class="flex-initial">
        <div class="flex justify-end items-center relative">

            <div class="flex mr-4 items-center">
                <a class="inline-block py-3 px-4 bg-white text-3xl border rounded-3xl shadow" href="#">
                    <i class="fa-solid fa-bell"></i>
                </a>
            </div>

            <div class="block">
                <div class="inline relative">
                    <button type="button" class="inline-flex items-center relative py-3 px-4 rounded-3xl bg-black">
                        <div class="pl-1">
                            <h1 class="text-white text-2xl font-light">JD</h1>
                        </div>
                    </button>
                </div>
            </div>

            <div class="block">
                <div class="inline relative">

                    <h3 class="px-2 font-semibold">
                        {{ this.$store.getters.getUser.nom }}
                        {{ this.$store.getters.getUser.prenom }}
                    </h3>
                    <span class="px-2 text-slate-700 font-light">Employé</span>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoUser"
}
</script>