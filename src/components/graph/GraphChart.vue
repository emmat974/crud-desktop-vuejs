<template>
    <!-- Créer un graphite sur GraphJS -->
    <canvas id="graph" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name: "GraphChart",
    props: {
        data: {
            type: Object,
            required: false
        },
        type: {
            type: String,
            required: false,
            default: 'line'
        },
        height: {
            type: String,
            required: false,
            default: '400'
        },
        width: {
            type: String,
            required: false,
            default: '400'
        },
        title: {
            type: String,
            required: false
        }
    },
    mounted() {
        new Chart(document.querySelector("#graph"), {
            type: this.type,
            data: this.data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: this.title
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 200
                    }
                }
            },
        })
    }
}
</script>
