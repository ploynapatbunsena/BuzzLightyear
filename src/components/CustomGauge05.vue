<template>
  <div>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const chartOptions = ref({
      chart: {
        type: 'solidgauge'
      },
      title: {
        text: 'Solid Gauge Example'
      },
      series: [
        {
          data: [80]
        }
      ]
    });

    return {
      chartOptions
    };
  }
};
</script>
