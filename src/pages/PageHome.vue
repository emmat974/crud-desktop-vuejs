<template>
    <div>
        <GraphChart :data="data" width="800" height="400" title="" />
    </div>
</template>


<script>
import GraphChart from '@/components/graph/GraphChart.vue';

export default {
    name: 'PageHome',
    components: {
        GraphChart
    },
    data() {
        return {
            data: {
                labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5'],
                datasets: [{
                    label: "Adhérents",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [123, 100, 500, 120, 140, 123]
                }],
            },
        }
    }
}
</script>