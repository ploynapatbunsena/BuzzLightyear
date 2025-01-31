<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Default Gauge Title",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      return {
        needleValue: (this.value / 2000) * 100,
        centralLabel: "",
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: [(1850 / 2000) * 100, (1900 / 2000) * 100],
        arcColors: ["rgb(61,204,91)", "rgb(61,204,91)", "rgb(61,204,91)"],
        arcOverEffect: true, // เปิดใช้งานเอฟเฟกต์
        chartWidth: window.innerWidth / 2,
        arcLabels: ["1850", "1900"],
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        hasNeedle: true, // เปิดใช้งานเข็ม
        rangeLabelFontSize: 16,
        centralLabelFontSize: 40,
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
</style> -->

<!-- เอา -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <div class="gauge-wrapper">
      <vue-gauge
        :refid="'_' + Math.random().toString(36).substr(2, 9)"
        :class="'meticsGauge'"
        :options="gaugeOptions"
      />
      <div class="central-label">{{ value }} RPM</div> 
    </div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Default Gauge Title",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      return {
        needleValue: (this.value / 2000) * 100,
        centralLabel: "",
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: [(1850 / 2000) * 100, (1900 / 2000) * 100],
        arcColors: ["rgb(61,204,91)", "rgb(61,204,91)", "rgb(61,204,91)"],
        arcOverEffect: true, // เปิดใช้งานเอฟเฟกต์
        chartWidth: window.innerWidth / 2,
        arcLabels: ["1850", "1900"],
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        hasNeedle: true, // เปิดใช้งานเข็ม
        rangeLabelFontSize: 16,
        centralLabelFontSize: 40,
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
  bottom: 6px; /* ปรับระยะห่างจากด้านล่างของเกจ */
  left: 50%;
  transform: translateX(-50%);
  font-size: 52px;
  font-weight: bold;
}

:deep(text) {
  font-size: 16px;
}

</style> -->


<!-- 1111111111 -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <div class="gauge-wrapper">
      <vue-gauge
        :refid="'_' + Math.random().toString(36).substr(2, 9)"
        :class="'meticsGauge'"
        :options="gaugeOptions"
      />
      <div class="central-label">{{ value }} RPM</div>
    </div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Default Gauge Title",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      // แปลงค่าจาก value ไปเป็นเปอร์เซ็นต์ (จาก 0-2000 เป็น 0-100)
      const needlePercentage = (this.value / 2000) * 100;

      // กำหนดสีของ gauge ตามช่วงค่าของ value
      let colors;
      if (this.value <= 1849) {
        colors = ["rgb(61,204,91)", "#EEEEEE"];  // สีเขียว
      } else if (this.value <= 1899) {
        colors = ["#FFFF00", "#EEEEEE"];  // สีเหลือง
      } else {
        colors = ["#FF0000", "#EEEEEE"];  // สีแดง
      }

      // กำหนดค่า arcDelimiters และสีสำหรับช่วงต่างๆ (ในเปอร์เซ็นต์)
      const delimiters = [(1850 / 2000) * 100, (1900 / 2000) * 100];

      return {
        needleValue: needlePercentage,
        centralLabel: "",
        needleColor: "#9E9E9E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors,
        arcOverEffect: true, // เปิดใช้งานเอฟเฟกต์
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        arcLabels: ["1850", "1900"],
        hasNeedle: true, // เปิดใช้งานเข็ม
        rangeLabelFontSize: 16,
        arcLabelsFontSize: 14, // ขนาดฟอนต์สำหรับ label
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
  bottom: 80px; /* ปรับระยะห่างจากด้านล่างของเกจ */
  left: 50%;
  transform: translateX(-50%);
  font-size: 52px;
  font-weight: bold;
}

:deep(text) {
  font-size: 16px;
}
</style> -->

<!-- Label 1850, 1900 เอา-->
<!-- <template>
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
      const delimiters = [
        (1850 / 2000) * 100,
        (1900 / 2000) * 100,
      ];

      // Arc colors: สีของเกจและสีเทา
      const colors = ["#3DCC5B", "#D3D3D3"]; // สีเขียวและสีเทา

      const labels = ["1850", "1900"];

      return {
        needleValue: needlePercentage,
        centralLabel: "",
        needleColor: "#3DCC5B", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors,
        arcLabels: labels,
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
</style> -->

<!-- 23232323 -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }} RPM</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Default Gauge Title",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      const needlePercentage = (this.value / 2000) * 100;

      const delimiters = [
        (1850 / 2000) * 100,
        (1900 / 2000) * 100,
      ];

      const colors = [
        "rgb(61,204,91)",
        "#FFD54F",
        "#F44336",
      ];

      // const labels = ["1850", "1900"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        // arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        hasNeedle: true,
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

:deep(text) {
  font-size: 16px;
}
</style> -->

<!-- Water Temp -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }}°</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
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
    gaugeOptions() {
      const needlePercentage = (this.value / 100) * 100;

      const delimiters = [
        (92 / 100) * 100,
        (95 / 100) * 100,
      ];

      const colors = [
        "#3DCC5B",
        "#FFD54F",
        "#F44336",
      ];

      const labels = ["92°", "95°"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "100"], // ช่วงค่าของเกจ
        hasNeedle: true,
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
}

:deep(text) {
  font-size: 20px;
}
</style> -->

<!-- Oil pressure -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }} bar</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
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
    gaugeOptions() {
      const needlePercentage = (this.value / 10) * 100;

      const delimiters = [
        (1 / 10) * 100,
        (2 / 10) * 100,
      ];

      // const colors = [
      //   "#3DCC5B",
      //   "#FFD54F",
      //   "#F44336",
      // ];

      const colors = [
        "#F44336",
        "#FFD54F",
        "#3DCC5B",
      ];

      const labels = ["1", "2"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "10"], // ช่วงค่าของเกจ
        hasNeedle: true,
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
}

:deep(text) {
  font-size: 20px;
}
</style> -->

<!-- RPM -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }} RPM</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
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
    gaugeOptions() {
      const needlePercentage = (this.value / 2000) * 100;

      const delimiters = [
        (1850 / 2000) * 100,
        (1900 / 2000) * 100,
      ];

      const colors = [
        "#3DCC5B",
        "#FFD54F",
        "#F44336",
      ];

      const labels = ["1850", "1900"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        hasNeedle: true,
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
}

:deep(text) {
  font-size: 20px;
}
</style> -->

<!-- Act Power -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }} kW</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
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
    gaugeOptions() {
      const needlePercentage = (this.value / 300) * 100;

      const delimiters = [
        (200 / 300) * 100,
        (250 / 300) * 100,
      ];

      const colors = [
        "#3DCC5B",
        "#FFD54F",
        "#F44336",
      ];

      const labels = ["200", "250"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "300"], // ช่วงค่าของเกจ
        hasNeedle: true,
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
}

:deep(text) {
  font-size: 20px;
}
</style> -->

<!-- X Axis -->
<template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">Y: {{ value }}</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
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
    gaugeOptions() {
      const needlePercentage = (this.value / 8) * 100;

      const delimiters = [
        (1 / 8) * 100,
        (2 / 8) * 100,
        (6 / 8) * 100,
        (7 / 8) * 100,
      ];

      const colors = [
        "#DC2B2B",
        "#FFC107",
        "#28A745",
        "#FFC107",
        "#DC2B2B",
      ];

      const labels = ["-3", "-2", "2", "3"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels,
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["-4", "4"], // ช่วงค่าของเกจ
        hasNeedle: true,
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
}

:deep(text) {
  font-size: 20px;
}
</style>


<!-- label -->
<!-- <template>
  <div class="container">
    <h1>
      <center>{{ title }}</center>
    </h1>
    <vue-gauge
      :refid="'_' + Math.random().toString(36).substr(2, 9)"
      :class="'meticsGauge'"
      :options="gaugeOptions"
    />
    <div class="central-label">{{ value }} RPM</div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "CustomGauge02",
  components: { VueGauge },
  props: {
    title: {
      type: String,
      default: "Default Gauge Title",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gaugeOptions() {
      const needlePercentage = (this.value / 2000) * 100;

      const delimiters = [
        (1850 / 2000) * 100,
        (1855 / 2000) * 100,
        (1900 / 2000) * 100,
        (1905 / 2000) * 100,
      ];

      const colors = [
        "#3DCC5B",
        "#000000",
        "#FFD54F",
        "#000000",
        "#F44336",
      ];

      const labels = ["1850", "","", "1900"];

      return {
        needleValue: needlePercentage,
        needleColor: "#355F2E", // สีของเข็ม
        arcDelimiters: delimiters,
        arcColors: colors, // กำหนดสีของแต่ละช่วง
        arcLabels: labels, // เพิ่ม label ที่ตำแหน่ง 1850 และ 1900
        rangeLabelFontSize: 16,
        arcLabelFontSize: 14, // ขนาดตัวอักษร
        arcOverEffect: true,
        chartWidth: window.innerWidth / 2,
        rangeLabel: ["0", "2000"], // ช่วงค่าของเกจ
        hasNeedle: true,
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

:deep(text) {
  font-size: 16px;
}
</style> -->
