<template>
    <!-- Composant pour le modal -->
    <div class="relative">
        <!-- Bouton d'ouverture du modal -->
        <button @click="showModal = true" class="bg-[#F59100] text-white font-medium font-light py-2 px-4 rounded-lg">
            {{ text }}
        </button>

        <!-- Overlay du modal -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-900 opacity-75"></div>

        <!-- Contenu du modal -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
            <div class="bg-white w-1/2 rounded-lg p-6">
                <!-- Titre du modal -->
                <div class="mb-4 flex justify-between items-center">
                    <h2 class="text-xl text-black font-bold">{{ title }}</h2>
                    <button @click="showModal = false" class="bg-red-500 text-white font-bold py-2 px-4 rounded">
                        X
                    </button>
                </div>


                <!-- Contenu du modal -->
                <div class="text-black font-normal">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "UiModal",
    props: {
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showModal: false
        };
    },

}
</script>