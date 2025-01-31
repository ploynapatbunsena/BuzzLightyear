<!-- <template>
  <div>
    <apexchart
      type="radialBar"
      :options="chartOptions"
      :series="series"
      width="380"
    />
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "CustomGaugeChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [72], // ค่าเริ่มต้น
      chartOptions: {
        chart: {
          type: "radialBar",
          offsetY: -20,
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              size: "70%",
            },
            track: {
              background: "#ccc",
              strokeWidth: "100%",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "20px",
                offsetY: 10,
                formatter: function (val) {
                  return `${val}%`;
                },
              },
            },
          },
        },
        fill: {
          colors: ["#FF0000"], // สีเริ่มต้น
        },
        annotations: {
          position: "front",
          shapes: [
            {
              type: "line",
              x1: "50%",
              y1: "50%",
              x2: "50%",
              y2: "10%",
              strokeColor: "#000",
              strokeWidth: 2,
              strokeDashArray: 0,
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.updateChart();
  },
  methods: {
    updateChart() {
      setInterval(() => {
        const newValue = Math.floor(Math.random() * 100); // ค่าใหม่
        const angle = this.calculateAngle(newValue); // คำนวณมุม
        const newColor =
          newValue < 50 ? "#FF0000" : newValue < 80 ? "#00FF00" : "#0000FF";

        // อัปเดตซีรีส์และเข็ม
        this.series = [newValue];
        this.chartOptions = {
          ...this.chartOptions,
          fill: { colors: [newColor] },
          annotations: {
            shapes: [
              {
                type: "line",
                x1: "50%",
                y1: "50%",
                x2: `${50 + 40 * Math.cos(angle)}%`,
                y2: `${50 - 40 * Math.sin(angle)}%`,
                strokeColor: "#000",
                strokeWidth: 2,
              },
            ],
          },
        };
      }, 3000);
    },
    calculateAngle(value) {
      // คำนวณมุมของเข็ม (radialBar มีช่วงมุม -90 ถึง +90)
      const percentage = value / 100;
      const startAngle = -Math.PI / 2; // -90 องศา
      const endAngle = Math.PI / 2; // +90 องศา
      return startAngle + percentage * (endAngle - startAngle);
    },
  },
};
</script>

<style scoped>
/* เพิ่ม CSS หากจำเป็น */
</style> -->

<!-- <template>
  <div id="gauge-container" ref="gaugeContainer"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'D3Gauge',
  data() {
    return {
      value: 72, // ค่าเริ่มต้นของ gauge
      col: ['#ff0000', '#00ff00', '#0000ff'], // สีของ arc ตามช่วงค่า
      width: 400,
      height: 200, // ครึ่งหนึ่งของความสูง
      radius: 100, // รัศมีของ gauge
    };
  },
  mounted() {
    this.createGauge(); // สร้าง gauge ครั้งแรก
    this.updateGauge(); // อัปเดต gauge
  },
  methods: {
    createGauge() {
      const svg = d3.select(this.$refs.gaugeContainer)
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height) // ความสูงครึ่งหนึ่ง
        .attr('viewBox', `0 0 ${this.width} ${this.height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      const center = { x: this.width / 2, y: this.height }; // จุดศูนย์กลางด้านล่าง
      const arc = d3.arc()
        .innerRadius(this.radius * 0.6) // วงกลมด้านใน
        .outerRadius(this.radius) // วงกลมด้านนอก
        .startAngle(-Math.PI / 2) // เริ่มที่ -90 องศา
        .endAngle(Math.PI / 2); // จบที่ 90 องศา

      // Background Arc
      svg.append('path')
        .attr('d', arc)
        .attr('fill', '#ccc') // สีพื้นหลังของ arc
        .attr('transform', `translate(${center.x}, ${center.y})`);

      // Create Tick Lines
      const ticks = [0, 25, 50, 75, 100]; // ค่าที่จะวาง tick
      const tickLength = 10;
      const tickWidth = 2;

      const tickGroup = svg.append('g')
        .attr('transform', `translate(${center.x}, ${center.y})`);

      ticks.forEach((tickValue) => {
        const angle = (tickValue / 100) * Math.PI - Math.PI / 2;
        const tickX1 = (this.radius - tickLength) * Math.cos(angle);
        const tickY1 = (this.radius - tickLength) * Math.sin(angle);
        const tickX2 = this.radius * Math.cos(angle);
        const tickY2 = this.radius * Math.sin(angle);

        tickGroup.append('line')
          .attr('x1', tickX1)
          .attr('y1', tickY1)
          .attr('x2', tickX2)
          .attr('y2', tickY2)
          .attr('stroke', '#666')
          .attr('stroke-width', tickWidth);
      });

      // Needle
      svg.append('line')
        .attr('class', 'needle') // เพิ่ม class ให้ needle
        .attr('x1', center.x)
        .attr('y1', center.y)
        .attr('x2', center.x)
        .attr('y2', center.y - this.radius * 0.8)
        .attr('stroke', '#ff0000')
        .attr('stroke-width', 4);

      // Pivot
      svg.append('circle')
        .attr('cx', center.x)
        .attr('cy', center.y)
        .attr('r', 6)
        .attr('fill', '#fff')
        .attr('stroke', '#666')
        .attr('stroke-width', 2);
    },
    updateGauge() {
      // อัปเดตค่าและสีของเข็ม
      setInterval(() => {
        // Randomize ค่าใหม่
        let newValue = this.value + Math.round(Math.random() * 10 - 5);
        if (newValue < 0) newValue = 0; // จำกัดค่าต่ำสุด
        if (newValue > 100) newValue = 100; // จำกัดค่าสูงสุด
        this.value = newValue;

        // คำนวณมุมของเข็ม
        const angle = (this.value / 100) * Math.PI - Math.PI / 2;
        const needleLine = d3.select(this.$refs.gaugeContainer).select('.needle');

        // หมุนเข็ม
        needleLine
          .transition()
          .duration(1000)
          .attr('transform', `rotate(${(angle * 180) / Math.PI}, ${this.width / 2}, ${this.height})`);

        // อัปเดตสีของ arc
        const color = this.value < 50 ? this.col[0] : this.value < 75 ? this.col[1] : this.col[2];
        d3.select(this.$refs.gaugeContainer).select('path').attr('fill', color);
      }, 3000); // อัปเดตทุก 3 วินาที
    },
  },
};
</script>

<style scoped>
#gauge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style> -->

<!-- <template>
  <div id="gauge-container" ref="gaugeContainer">
    <div id="current-value" style="text-align: center; margin-top: 20px;">
      Current Value: <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "D3Gauge",
  data() {
    return {
      value: 0, // ค่าเริ่มต้น
      width: 400,
      height: 200,
      radius: 100,
      warningRange: [75, 85], // ช่วงค่าที่เป็น Warning
      dangerRange: [85, 100], // ช่วงค่าที่เป็น Danger
    };
  },
  mounted() {
    this.createGauge();
    this.updateGauge();
  },
  methods: {
    createGauge() {
      const svg = d3
        .select(this.$refs.gaugeContainer)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .attr("viewBox", `0 0 ${this.width} ${this.height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

      const center = { x: this.width / 2, y: this.height };
      const arc = d3
        .arc()
        .innerRadius(this.radius * 0.6)
        .outerRadius(this.radius)
        // .startAngle(Math.PI*2)
        // .endAngle(0);
        .startAngle(0)
        .endAngle(Math.PI*2);

      // Background Arc
      svg
        .append("path")
        .attr("d", arc)
        .attr("fill", "#ccc")
        .attr("transform", `translate(${center.x}, ${center.y})`)
        .attr("class", "background-arc");

      // Tick Lines and Labels
      const ticks = [0, 75, 85, 100];
      const tickGroup = svg
        .append("g")
        .attr("transform", `translate(${center.x}, ${center.y})`);

      ticks.forEach((tickValue) => {
        const angle = (tickValue / 100) * Math.PI - Math.PI; // แปลงค่าตามตำแหน่ง (-180 ถึง 0 องศา)
        const tickX1 = (this.radius - 10) * Math.cos(angle);
        const tickY1 = (this.radius - 10) * Math.sin(angle);
        const tickX2 = this.radius * Math.cos(angle);
        const tickY2 = this.radius * Math.sin(angle);

        // Tick Lines
        tickGroup
          .append("line")
          .attr("x1", tickX1)
          .attr("y1", tickY1)
          .attr("x2", tickX2)
          .attr("y2", tickY2)
          .attr("stroke", "#666")
          .attr("stroke-width", 2);

        // Labels
        const labelX = (this.radius + 15) * Math.cos(angle);
        const labelY = (this.radius + 15) * Math.sin(angle);
        tickGroup
          .append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("fill", "#333")
          .attr("font-size", 12)
          .text(tickValue);
      });

      // Needle
      svg
        .append("line")
        .attr("class", "needle")
        .attr("x1", center.x)
        .attr("y1", center.y)
        .attr("x2", center.x)
        .attr("y2", center.y - this.radius * 1)
        .attr("stroke", "#ff0000")
        .attr("stroke-width", 4);

      // Pivot
      svg
        .append("circle")
        .attr("cx", center.x)
        .attr("cy", center.y)
        .attr("r", 6)
        .attr("fill", "#fff")
        .attr("stroke", "#666")
        .attr("stroke-width", 2);
    },
    updateGauge() {
      setInterval(() => {
        let newValue = this.value + Math.round(Math.random() * 10 - 5);
        if (newValue < 0) newValue = 0;
        if (newValue > 100) newValue = 100;
        this.value = newValue;

        const angle = (this.value / 100) * Math.PI; // แปลงค่าเป็นมุม (-180 ถึง 0 องศา)
        const needleLine = d3.select(this.$refs.gaugeContainer).select(".needle");

        // Move Needle
        needleLine
          .transition()
          .duration(1000)
          .attr(
            "transform",
            `rotate(${(angle * 180) / Math.PI}, ${this.width / 2}, ${this.height})`
          )
          .on("end", () => {
            // Update Arc Color
            const arcColor =
              this.value >= this.dangerRange[0]
                ? "#ff0000" // Danger (แดง)
                : this.value >= this.warningRange[0]
                ? "#ffff00" // Warning (เหลือง)
                : "#00ff00"; // Normal (เขียว)

            d3.select(this.$refs.gaugeContainer)
              .select(".background-arc")
              .attr("fill", arcColor);

            // Update Current Value
            document.querySelector("#current-value span").textContent = this.value;
          });
      }, 3000);
    },

  },
};
</script>

<style scoped>
#gauge-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style> -->

<template>
  <div id="myChart" class="chart--container"></div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import ZingChart from "zingchart";

export default defineComponent({
  name: "GaugeChart",
  setup() {
    onMounted(() => {
      // ตั้งค่าและกำหนดการแสดงผลของกราฟ
      const chartConfig = {
        type: "gauge",
        globals: {
          fontSize: "25px",
        },
        plot: {
          tooltip: {
            borderRadius: "5px",
          },
          valueBox: {
            text: "%v", // default
            fontSize: "64px",
            placement: "center",
          },
          size: "100%",
        },
        plotarea: {
          marginTop: "80px",
        },
        scaleR: {
          aperture: 180,
          center: {
            visible: false,
          },
          item: {
            offsetR: 0,
            rules: [
              {
                offsetX: "15px",
                rule: "%i == 9",
              },
            ],
          },
          labels: ["0", "", "", "", "", "", "", "1850", "", "1900", "2000"],
          maxValue: 2000,
          minValue: 0,
          ring: {
            rules: [
              {
                backgroundColor: "#29B6F6",
                rule: "%v < 1850",
              },
              {
                backgroundColor: "#FFA726",
                rule: "%v >= 1850 && %v < 1900",
              },
              {
                backgroundColor: "#E53935",
                rule: "%v >= 1900",
              },
            ],
            size: "50px",
          },
          step: 110,
          tick: {
            visible: false,
          },
        },
        refresh: {
          type: "feed",
          url: "feed()",
          interval: 1500,
          resetTimeout: 1000,
          transport: "js",
        },
        series: [
          {
            values: [1850], // starting value
            animation: {
              effect: "ANIMATION_EXPAND_VERTICAL",
              method: "ANIMATION_BACK_EASE_OUT",
              sequence: "null",
              speed: 900,
            },
            backgroundColor: "black",
            indicator: [10, 10, 10, 10, 0.75],
          },
        ],
      };

      // ทำการ render chart
      ZingChart.render({
        id: "myChart",
        data: chartConfig,
        height: "100%",
        width: "100%",
      });
    });
  },
});
</script>

<style scoped>
.chart--container {
  min-height: 530px;
  width: 100%;
  height: 100%;
}
.zc-ref {
  display: none;
}
</style>

