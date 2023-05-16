<template>
    <canvas id="canvas" class="w-full"></canvas>
</template>

<script>
import imageCarte from "@/assets/carte.png"

export default {
    name: "CarteBancaire",
    props: {
        adherent: {
            type: Object,
            required: true
        }
    },
    mounted() {
        setTimeout(() => {
            const canvas = document.querySelector("#canvas");

            if (canvas) {
                const ctx = canvas.getContext("2d");
                const image = new Image()
                // Gérer l'événement de chargement de l'image
                image.onload = () => {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    // Dessiner l'image sur le canvas
                    ctx.drawImage(image, 0, 0);
                    // Ajouter du texte sur l'image
                    ctx.font = "15px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(this.adherent.numero_carte, 30, 101);
                    // Format la date
                    const date = new Date(this.adherent.date_expiration);
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = String(date.getFullYear());
                    const formattedDate = `${month}/${year}`;
                    ctx.fillText(formattedDate, 30, 168);
                    // Affiche le code
                    ctx.fillText(this.adherent.cryptogramme, 95, 168);
                };
                image.src = imageCarte
            } else {
                console.error("L'élément canvas n'a pas été trouvé.");
            }
        }, 10)
    }
}
</script>