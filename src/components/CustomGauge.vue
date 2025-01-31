<!-- <template>
  <div ref="aap">
    <p>
      <small
        ><center>{{ title }}</center></small
      >
    </p>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :options="myOptions"
    />
  </div>
</template>

<script>
import VueGauge from "vue-gauge";
export default {
  components: { VueGauge },
  props: {
    title: String,
    value: Number,
  },
  data() {
    return {
      myOptions: {
        chartWidth: window.innerWidth / 2,
        needleValue: this.value / 0.6,
        needleColor: "black",
        arcDelimiters: [1850 / 0.6, 1900 / 0.6],
        arcColors: ["rgb(61,204,91)", "rgb(61,204,91)", "rgb(61,204,91)"],
        arcLabels: ["1850", "1900"],
        rangeLabel: ["0", "2000"],
        centralLabel: this.value,
        rangeLabelFontSize: 20,
      },
    };
  },
  mounted() {
    console.log("mounted");
    console.log(window.innerWidth);
    console.log(this.$refs.aap.clientWidth);
  },
};
</script>

<style scoped>
</style> -->

<!-- <template>
  <div ref="aap">
    <p>
      <small><center>{{ title }}</center></small>
    </p>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :options="myOptions"
    />
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge", // เปลี่ยนชื่อ
  components: { VueGauge },
  props: {
    title: String,
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    myOptions() {
      return {
        chartWidth: window.innerWidth / 2,
        needleValue: (this.value / 2000) * 100,
        needleColor: "black",
        arcDelimiters: [(1850 / 2000) * 100, (1900 / 2000) * 100],
        arcColors: ["#28A745", "#28A745", "#28A745"],
        arcLabels: ["1850", "1900"],
        rangeLabel: ["0", "2000"],
        centralLabel: this.value.toString(),
        centralLabelFontSize: 40, // ปรับขนาดฟอนต์ค่า Value
        rangeLabelFontSize: 16,  // ขนาดฟอนต์ของ Range Label
      };
    },
  },
};
</script>

<style scoped>
.vue-gauge text.central-label {
  font-size: 40px;
  fill: #333;
}
</style> -->

<template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <div class="gauge-wrapper">
      <vue-gauge
        :refid="'_' + Math.random().toString(36).substr(2, 9)"
        :class="'metricsGauge'"
        :options="gaugeOptions"
      />
      <div class="central-label">{{ value }} RPM</div>
    </div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "DynamicColorGauge",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Dynamic Color Gauge",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      // คำนวณเปอร์เซ็นต์ตำแหน่งของเข็ม
      const needlePercentage = (this.value / 2000) * 100;

      // Arc delimiters: แบ่งส่วนตามตำแหน่งเข็ม
      const delimiters = [needlePercentage];

      // Arc colors: สีของเกจและสีเทา
      const colors = ["#3DCC5B", "#D3D3D3"]; // สีเขียวและสีเทา

      return {
        needleValue: needlePercentage,
        centralLabel: "",
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors,
        arcOverEffect: true, // เอฟเฟกต์ที่ทำให้เกจดูมีชีวิตชีวา
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        // arcLabels: [this.value.toString()], // แสดงค่าที่ตำแหน่งเข็ม
        hasNeedle: true,
        rangeLabelFontSize: 16,
        arcLabelsFontSize: 14,
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

.gauge-wrapper {
  position: relative;
}

.central-label {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 52px;
  font-weight: bold;
}

:deep(.metricsGauge .arc) {
  transition: stroke 0.5s ease-in-out;
}
</style>



<!-- <template>
  <div ref="aap">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :options="myOptions"
    />
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge",
  components: { VueGauge },
  props: {
    title: String,
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    myOptions() {
      return {
        chartWidth: window.innerWidth / 2,
        needleValue: (this.value / 2000) * 100,
        needleColor: "#355F2E",
        arcDelimiters: [(1850 / 2000) * 100, (1900 / 2000) * 100],
        arcColors: ["rgb(61,204,91)", "#FBC02D", "#D32F2F"],
        arcLabels: ["1850", "1900"],
        rangeLabel: ["0", "2000"],
        centralLabel: this.value.toString(),
        rangeLabelFontSize: 32,  // ขนาดฟอนต์ของ Range Label
      };
    },
  },
};
</script>

<style scoped>
</style> -->


