<template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <apexchart
      :options="chartOptions"
      :series="[computedSeries]"
      type="radialBar"
      height="350"
    ></apexchart>
    <div class="central-label">{{ value }} RPM</div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "CustomGauge03",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    computedSeries() {
      return (this.value / 2000) * 100; // คำนวณค่าเป็นเปอร์เซ็นต์
    },
    chartOptions() {
      const delimiters = [
        (1850 / 2000) * 100, // 1850 RPM
        (1900 / 2000) * 100, // 1900 RPM
      ];

      const colors = [
        "rgb(61,204,91)", // Green
        "#FFD54F", // Yellow
        "#F44336", // Red
      ];

      return {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
                offsetY: -2,
                fontSize: "22px",
              },
            },
            colors: colors,
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        colors: delimiters.map((d, index) => colors[index]),
      };
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.central-label {
  margin-top: 5px;
  font-size: 24px;
  font-weight: bold;
}
</style>
