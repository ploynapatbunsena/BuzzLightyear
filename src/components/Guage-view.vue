<template>
  <div>
    <div class="chartBox">
      <canvas ref="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default {
  setup() {
    const chartVersion = ref('');
    const myChart = ref(null);

    onMounted(() => {
      const ctx = myChart.value.getContext('2d');
      const gradientSegment = ctx.createLinearGradient(0, 0, 700, 0);
      gradientSegment.addColorStop(0, 'red');
      gradientSegment.addColorStop(0.7, 'yellow');
      gradientSegment.addColorStop(1, 'green');

      const data = {
        labels: ['Score', 'Gray Area'],
        datasets: [
          {
            label: 'Weekly Sales',
            data: [800, 100],
            backgroundColor: [gradientSegment, 'rgba(0, 0, 0, 0.2)'],
            borderColor: [gradientSegment, 'rgba(0, 0, 0, 0.2)'],
            borderWidth: 1,
            cutout: '60%',
            circumference: 180,
            rotation: 270
          }
        ]
      };

      const guageChartText = {
        id: 'guageChartText',
        afterDatasetsDraw(chart) {
          const { ctx, data } = chart; // เอาเฉพาะ `ctx` และ `data` ที่ใช้งาน

          ctx.save();
          const score = data.datasets[0].data[0];
          let rating = 'Good';

          if (score < 600) rating = 'Bad';
          else if (score <= 700) rating = 'Fair';
          else if (score >= 800) rating = 'Very Good';

          ctx.font = '20px sans-serif';
          ctx.fillStyle = '#666';
          ctx.textAlign = 'center';
          ctx.fillText(score, chart.width / 2, chart.height / 2);
          ctx.fillText(rating, chart.width / 2, chart.height / 2 - 120);
        }
      };

      const config = {
        type: 'doughnut',
        data,
        options: {
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        },
        plugins: [guageChartText]
      };

      new Chart(ctx, config);
      chartVersion.value = Chart.version;
    });

    return {
      chartVersion,
      myChart
    };
  }
};
</script>

<style scoped>
.chartBox {
  width: 700px;
  padding: 20px;
  border-radius: 20px;
  background: white;
}
.root {
  --neutral--200: #f7f9fc;
--neutral--600: #6f7182;
--neutral--800: #0b0e2c;
--accent--primary-1: #1476ff;
--color-primary-hover: #004cff;
--neutral--100: white;
--neutral--300: #e9eaf3;
--general--shadow-01: rgba(25, 93, 194, .07);
--general--shadow-02: rgba(11, 22, 44, .05);
--secondary--color-1: #1045cc;
--secondary--color-2: #f4f7ff;
--secondary--color-3: #f6f1ff;
--secondary--color-4: #9240fb;
--secondary--color-5: #fff7e8;
--neutral--700: #303350;
--neutral--500: #989aad;
--neutral--400: #cacbd7;
--system--green-400: #13a570;
--system--blue-400: #086cd9;
--system--blue-300: #1d88fe;
--system--blue-200: #8fc3ff;
--system--blue-100: #eaf4ff;
--system--green-300: #05c168;
--system--green-200: #7fdca4;
--system--green-100: #e4faed;
--system--red-400: #dc2b2b;
--system--300: #ff5a65;
--system--red-200: #ffbec2;
--system--red-100: #ffeff0;
--system--orange-400: #d5691b;
--system--orange-300: #ff9e2c;
--system--orange-200: #ffd19b;
--system--orange-100: #fff3e4;
--button-shadow--color-2: rgba(2, 87, 251, .2);
--button-shadow--white-01: rgba(20, 20, 43, .04);
--secondary--color-11: #edfbee;
--general--shadow-03: rgba(11, 22, 44, .1);
--secondary--color-6: #ffb016;
--secondary--color-7: #fff4f4;
--secondary--color-8: #ff414c;
--secondary--color-9: #eef9ff;
--secondary--color-10: #68caff;
--secondary--color-12: #45c74e;
--button-shadow--white-03: rgba(20, 20, 43, .1);
--general--shadow-04: rgba(20, 20, 43, .14);
--general--shadow-05: rgba(20, 20, 43, .16);
--general--shadow-06: rgba(20, 20, 43, .24);
--button-shadow--color-01: rgba(74, 58, 255, .06);
--button-shadow--white-02: rgba(20, 20, 43, .06);
--button-shadow--color-3: rgba(74, 58, 255, .08);}
</style>