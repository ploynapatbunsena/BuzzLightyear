<!-- <template>
  <div class="container">
    <div class="scatter-plot">
      <h2>Scatter Plot</h2>
      <apexchart type="scatter" :options="chartOptions" :series="chartSeries" />
    </div>
    <div class="line-chart">
      <h2>Line Chart</h2>
      <apexchart type="line" :options="chartOptions" :series="chartSeries" />
    </div>
    <div class="buble-chart">
      <h2>Bubble Chart</h2>
      <apexchart type="bubble" :options="chartOptions" :series="chartSeries" />
    </div>
    <div class="heatmap">
      <h2>Heatmap</h2>
      <apexchart type="heatmap" :options="heatmapOptions" :series="heatmapSeries" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";  

export default defineComponent({
  name: "ApexChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartSeries: [
        { name: 'RPM', data: [3000, 3200, 3100, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 3000, 3200, 3100, 3300, 3400, 3500, 3600, 3700, 3800, 3900] },
        { name: 'Speed (KM/H)', data: [20, 25, 23, 27, 30, 32, 35, 37, 40, 42, 20, 25, 23, 27, 30, 32, 35, 37, 40, 42] },
        { name: 'Wind Speed', data: [5, 6, 5, 7, 6, 8, 9, 10, 11, 12, 5, 6, 5, 7, 6, 8, 9, 10, 11, 12] },
      ],
      chartOptions: {
        chart: {
          id: 'chart1',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        title: {
          text: 'Impact of Wind Speed on RPM and Speed',
          align: 'center',
        },
        markers: {
          size: 4,
        },
      },
      heatmapOptions: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#00A100', '#00B200', '#00C300'],
        title: {
          text: 'Wind Speed Heatmap',
        },
      },
      heatmapSeries: [
        {
          name: 'Wind Speed',
          data: [
            { x: 'Jan', y: 5 },
            { x: 'Feb', y: 6 },
            { x: 'Mar', y: 5 },
            { x: 'Apr', y: 7 },
            { x: 'May', y: 6 },
            { x: 'Jun', y: 8 },
            { x: 'Jul', y: 9 },
            { x: 'Aug', y: 10 },
            { x: 'Sep', y: 11 },
            { x: 'Oct', y: 12 },
            { x: 'Nov', y: 5 },
            { x: 'Dec', y: 6 },
          ],
        },
      ],
    }
  },
})
</script>

<style scoped>
* {
  font-family: "Poppins";
  margin: 32px;
}

.scatter-plot {

}

h2 {
  margin-top: 30px;
}
</style> -->

<!-- <template>
  <div class="line-chart">
    <h2>Zoomable Timeseries</h2>
    <apexchart type="line" :options="chartOptions" :series="chartSeries" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'ZoomableTimeseries',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartSeries: [
        {
          name: 'RPM',
          data: [
            { x: new Date('2024-11-01').getTime(), y: 3000 },
            { x: new Date('2024-11-02').getTime(), y: 3200 },
            { x: new Date('2024-11-03').getTime(), y: 3100 },
            { x: new Date('2024-11-04').getTime(), y: 3300 },
            { x: new Date('2024-11-05').getTime(), y: 3400 },
            { x: new Date('2024-11-06').getTime(), y: 3500 },
            { x: new Date('2024-11-07').getTime(), y: 3600 },
            { x: new Date('2024-11-08').getTime(), y: 3700 },
            { x: new Date('2024-11-09').getTime(), y: 3800 },
            { x: new Date('2024-11-10').getTime(), y: 3900 },
          ],
        },
        {
          name: 'Speed (KM/H)',
          data: [
            { x: new Date('2024-11-01').getTime(), y: 20 },
            { x: new Date('2024-11-02').getTime(), y: 25 },
            { x: new Date('2024-11-03').getTime(), y: 23 },
            { x: new Date('2024-11-04').getTime(), y: 27 },
            { x: new Date('2024-11-05').getTime(), y: 30 },
            { x: new Date('2024-11-06').getTime(), y: 32 },
            { x: new Date('2024-11-07').getTime(), y: 35 },
            { x: new Date('2024-11-08').getTime(), y: 37 },
            { x: new Date('2024-11-09').getTime(), y: 40 },
            { x: new Date('2024-11-10').getTime(), y: 42 },
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: 'line',
          height: 350,
          zoom: {
            enabled: true,
            type: 'x', // เลือก zoom แกน X เท่านั้น
            autoScaleYaxis: true, // การขยายแกน Y จะตามแกน X
          },
        },
        xaxis: {
          type: 'datetime', // แสดงเป็นเวลาหรือวันที่
          labels: {
            format: 'dd MMM yyyy', // รูปแบบวันที่ที่แสดง
          },
        },
        title: {
          text: 'Zoomable Timeseries: RPM & Speed',
          align: 'center',
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy', // รูปแบบแสดงใน tooltip
          },
        },
      },
    };
  },
});
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

.line-chart {
  width: 1000px;
  height: 1000px;
}
</style> -->

<!-- <template>
  <div>
    <apexchart
      type="line"
      :options="chartOptions"
      :series="chartSeries"
      height="400"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // Series Data
      chartSeries: [
        {
          name: "RPM",
          type: "bar",
          data: [1200, 1500, 1800, 2000, 2500, 3000],
        },
        {
          name: "Speed (KM/H)",
          type: "bar",
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "Wind Speed (m/s)",
          type: "line",
          data: [2.5, 3.0, 2.8, 3.5, 4.0, 4.2],
        },
      ],
      // Chart Options
      chartOptions: {
        chart: {
          type: "line",
          height: 400,
          stacked: false,
        },
        title: {
          text: "ความสัมพันธ์ระหว่าง RPM, Speed และ Wind Speed",
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        stroke: {
          width: [0, 0, 2],
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        colors: ["#008FFB", "#00E396", "#FF4560"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yaxis: [
          {
            title: {
              text: "RPM",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Speed (KM/H)",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Wind Speed (m/s)",
            },
            labels: {
              style: {
                colors: "#FF4560",
              },
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          markers: {
            width: 10,
            height: 10,
          },
          fontSize: "12px",
          itemMargin: {
            horizontal: 10,
            vertical: 5,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
div {
  margin: 20px;
}
</style> -->

<template>
  <div>
    <!-- กราฟที่ 1: Bar และ Line Chart -->
    <apexchart
      type="line"
      :options="chartOptions1"
      :series="chartSeries"
      height="400"
    ></apexchart>

    <div style="margin: 30px 0;"></div>

    <!-- กราฟที่ 2: Line Chart ทั้งหมด -->
    <apexchart
      type="line"
      :options="chartOptions2"
      :series="chartSeriesLine"
      height="400"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // ชุดข้อมูลเดียวกัน
      chartSeries: [
        {
          name: "RPM",
          type: "bar",
          data: [1200, 1500, 1800, 2000, 2500, 3000],
        },
        {
          name: "Speed (KM/H)",
          type: "bar",
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "Wind Speed (m/s)",
          type: "line",
          data: [2.5, 3.0, 2.8, 3.5, 4.0, 4.2],
        },
      ],

      // ข้อมูลปรับเป็น Line Chart สำหรับกราฟที่ 2
      chartSeriesLine: [
        {
          name: "RPM",
          type: "line",
          data: [1200, 1500, 1800, 2000, 2500, 3000],
        },
        {
          name: "Speed (KM/H)",
          type: "line",
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "Wind Speed (m/s)",
          type: "line",
          data: [2.5, 3.0, 2.8, 3.5, 4.0, 4.2],
        },
      ],

      // ตัวเลือกสำหรับกราฟที่ 1
      chartOptions1: {
        chart: {
          type: "line",
          height: 400,
          stacked: false,
        },
        title: {
          text: "Bar and Line Chart (RPM, Speed, Wind Speed)",
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        stroke: {
          width: [0, 0, 2],
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        colors: ["#008FFB", "#00E396", "#FF4560"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yaxis: [
          {
            title: {
              text: "RPM",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Speed (KM/H)",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Wind Speed (m/s)",
            },
            labels: {
              style: {
                colors: "#FF4560",
              },
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
        },
        legend: {
          position: "bottom",
        },
      },

      // ตัวเลือกสำหรับกราฟที่ 2
      chartOptions2: {
        chart: {
          type: "line",
          height: 400,
        },
        title: {
          text: "Line Chart (RPM, Speed, Wind Speed)",
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        stroke: {
          curve: "smooth",
          width: [2, 2, 2],
        },
        markers: {
          size: 4,
        },
        colors: ["#008FFB", "#00E396", "#FF4560"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yaxis: [
          {
            title: {
              text: "RPM",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Speed (KM/H)",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Wind Speed (m/s)",
            },
            labels: {
              style: {
                colors: "#FF4560",
              },
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
        },
        legend: {
          position: "bottom",
        },
      },
    };
  },
};
</script>

<style scoped>
div {
  margin: 20px;
}
</style>
