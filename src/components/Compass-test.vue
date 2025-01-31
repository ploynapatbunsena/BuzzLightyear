<!-- <template>
  <div class="compass-container">
    <div class="compass">
      <div class="arrow" :style="{ transform: `rotate(${direction}deg)` }"></div>
    </div>
    <input type="range" min="0" max="360" v-model="direction" />
    <p>Direction: {{ direction }}°</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 0, // เก็บค่าองศาที่จะหมุน
    };
  },
};
</script>

<style scoped>
.compass-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.compass {
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
}

.arrow {
  width: 2px;
  height: 70px;
  background-color: red;
  position: absolute;
  top: 15px;
  left: 50%;
  transform-origin: bottom center;
}
</style> -->

<!-- <template>
  <div>
    <div ref="compass"></div>
    <p>Current Direction: {{ direction }}°</p>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      direction: 0, // ค่ามุมจากฮาร์ดแวร์
    };
  },
  mounted() {
    const width = 300;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;

    // สร้าง SVG เข็มทิศ
    const svg = d3.select(this.$refs.compass)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // วงกลมด้านนอก
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', 90)
      .attr('stroke', 'black')
      .attr('stroke-width', 4)
      .attr('fill', 'lightgray');

    // สร้างป้ายทิศ (N, E, S, W) ให้อยู่ข้างในวงกลม
    const directions = [
      { text: 'N', x: centerX, y: centerY - 50 },
      { text: 'E', x: centerX + 50, y: centerY },
      { text: 'S', x: centerX, y: centerY + 50 },
      { text: 'W', x: centerX - 50, y: centerY },
    ];

    directions.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '18px')  // ขนาดใหญ่ขึ้นเล็กน้อย
        .attr('font-weight', 'bold')  // เน้นตัวหนา
        .text(d.text);
    });

    // สร้างตัวเลของศารอบนอก
    const degreeLabels = [
      { text: '0°', x: centerX, y: centerY - 120 },
      { text: '90°', x: centerX + 120, y: centerY },
      { text: '180°', x: centerX, y: centerY + 120 },
      { text: '270°', x: centerX - 120, y: centerY },
    ];

    degreeLabels.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '14px')
        .text(d.text);
    });

    // เข็มทิศ (ลูกศรชี้ทิศ)
    const needle = svg.append('line')
      .attr('x1', centerX)
      .attr('y1', centerY)
      .attr('x2', centerX)
      .attr('y2', centerY - 70)
      .attr('stroke', 'red')
      .attr('stroke-width', 4);

    // ฟังก์ชันสำหรับหมุนเข็มทิศ
    const updateNeedle = angle => {
      needle.attr('transform', `rotate(${angle}, ${centerX}, ${centerY})`);
    };

    // อัปเดตเข็มทิศตามค่าที่ได้รับจากฮาร์ดแวร์
    this.$watch('direction', newDirection => {
      updateNeedle(newDirection);
    });

    // จำลองการรับค่าจากฮาร์ดแวร์ เช่น WebSocket หรือ API
    this.simulateHardwareData();
  },
  methods: {
    // ฟังก์ชันจำลองการรับค่าจากฮาร์ดแวร์
    simulateHardwareData() {
      // ใช้ setInterval เพื่อจำลองการรับค่ามุมจากฮาร์ดแวร์ทุกๆ 2 วินาที
      setInterval(() => {
        const newDirection = Math.floor(Math.random() * 360); // จำลองค่าองศาสุ่ม
        this.direction = newDirection; // อัปเดตค่า direction
      }, 2000);
    },
  },
};
</script>

<style scoped>
/* สไตล์เพิ่มเติม */

</style> -->

<!-- <template>
  <div>
    <div ref="compass"></div>
    <p>Current Direction: {{ direction }}°</p>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      direction: 0, // ค่ามุมจากฮาร์ดแวร์
    };
  },
  mounted() {
    const width = 300;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 140;

    // สร้าง SVG เข็มทิศ
    const svg = d3.select(this.$refs.compass)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#000');  // สีพื้นหลังดำ

    // วงกลมกลาง
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius)
      .attr('stroke', '#666')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    // ขีดบอกองศารอบวง
    for (let i = 0; i < 360; i += 10) {
      const angleRad = (i * Math.PI) / 180;
      const x1 = centerX + radius * Math.cos(angleRad);
      const y1 = centerY + radius * Math.sin(angleRad);
      const x2 = centerX + (radius - (i % 30 === 0 ? 15 : 10)) * Math.cos(angleRad);
      const y2 = centerY + (radius - (i % 30 === 0 ? 15 : 10)) * Math.sin(angleRad);
      svg.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#fff')
        .attr('stroke-width', i % 30 === 0 ? 2 : 1);
    }

    // สร้างตัวอักษรทิศ N, E, S, W
    const directions = [
      { text: 'N', x: centerX, y: centerY - radius + 30 },
      { text: 'E', x: centerX + radius - 30, y: centerY },
      { text: 'S', x: centerX, y: centerY + radius - 30 },
      { text: 'W', x: centerX - radius + 30, y: centerY },
    ];

    directions.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '24px')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .text(d.text);
    });

    // ตัวเลของศารอบนอก
    const degreeLabels = [
      { text: '0', x: centerX, y: centerY - radius - 10 },
      { text: '90', x: centerX + radius + 10, y: centerY },
      { text: '180', x: centerX, y: centerY + radius + 20 },
      { text: '270', x: centerX - radius - 20, y: centerY },
    ];

    degreeLabels.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '14px')
        .attr('fill', '#fff')
        .text(d.text);
    });

    // สร้างเข็มทิศ (ลูกศร)
    const needle = svg.append('line')
      .attr('x1', centerX)
      .attr('y1', centerY)
      .attr('x2', centerX)
      .attr('y2', centerY - 100)
      .attr('stroke', '#ff3b30')  // สีแดงสไตล์ Apple
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round');

    // อัปเดตเข็มทิศเมื่อค่า direction เปลี่ยน
    const updateNeedle = angle => {
      needle.attr('transform', `rotate(${angle}, ${centerX}, ${centerY})`);
    };

    // อัปเดตเข็มทิศตามค่าที่ได้รับจากฮาร์ดแวร์
    this.$watch('direction', newDirection => {
      updateNeedle(newDirection);
    });

    // จำลองการรับค่าจากฮาร์ดแวร์
    this.simulateHardwareData();
  },
  methods: {
    simulateHardwareData() {
      setInterval(() => {
        const newDirection = Math.floor(Math.random() * 360); // จำลองค่ามุม
        this.direction = newDirection; // อัปเดตค่ามุมในตัวแปร
      }, 2000);
    },
  },
};
</script>

<style scoped>
/* กำหนด style พื้นฐาน */
</style> -->

<!-- <template>
  <div>
    <div ref="compass"></div>
    <p>Current Direction: {{ direction }}°</p>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      direction: 0, // ค่ามุมจากฮาร์ดแวร์
    };
  },
  mounted() {
    const width = 300;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 140;

    // สร้าง SVG เข็มทิศ
    const svg = d3.select(this.$refs.compass)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // สร้างพื้นหลังวงกลม
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius + 5)  // เพิ่มขนาดรัศมีวงพื้นหลังให้ใหญ่กว่าวงใน
      .attr('fill', '#000');  // สีพื้นหลังเป็นสีดำ

    // วงกลมกลาง
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius)
      .attr('stroke', '#666')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    // ขีดบอกองศารอบวง
    for (let i = 0; i < 360; i += 10) {
      const angleRad = (i * Math.PI) / 180;
      const x1 = centerX + radius * Math.cos(angleRad);
      const y1 = centerY + radius * Math.sin(angleRad);
      const x2 = centerX + (radius - (i % 30 === 0 ? 15 : 10)) * Math.cos(angleRad);
      const y2 = centerY + (radius - (i % 30 === 0 ? 15 : 10)) * Math.sin(angleRad);
      svg.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#fff')
        .attr('stroke-width', i % 30 === 0 ? 2 : 1);
    }

    // สร้างตัวอักษรทิศ N, E, S, W
    const directions = [
      { text: 'N', x: centerX, y: centerY - radius + 30 },
      { text: 'E', x: centerX + radius - 30, y: centerY },
      { text: 'S', x: centerX, y: centerY + radius - 30 },
      { text: 'W', x: centerX - radius + 30, y: centerY },
    ];

    directions.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '24px')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .text(d.text);
    });

    // ตัวเลของศารอบนอก
    const degreeLabels = [
      { text: '0', x: centerX, y: centerY - radius - 10 },
      { text: '90', x: centerX + radius + 10, y: centerY },
      { text: '180', x: centerX, y: centerY + radius + 20 },
      { text: '270', x: centerX - radius - 20, y: centerY },
    ];

    degreeLabels.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '14px')
        .attr('fill', '#fff')
        .text(d.text);
    });

    // สร้างเข็มทิศ (ลูกศร)
    const needle = svg.append('line')
      .attr('x1', centerX)
      .attr('y1', centerY)
      .attr('x2', centerX)
      .attr('y2', centerY - 100)
      .attr('stroke', '#ff3b30')  // สีแดงสไตล์ Apple
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round');

    // อัปเดตเข็มทิศเมื่อค่า direction เปลี่ยน
    const updateNeedle = angle => {
      needle.attr('transform', `rotate(${angle}, ${centerX}, ${centerY})`);
    };

    // อัปเดตเข็มทิศตามค่าที่ได้รับจากฮาร์ดแวร์
    this.$watch('direction', newDirection => {
      updateNeedle(newDirection);
    });

    // จำลองการรับค่าจากฮาร์ดแวร์
    this.simulateHardwareData();
  },
  methods: {
    simulateHardwareData() {
      setInterval(() => {
        const newDirection = Math.floor(Math.random() * 360); // จำลองค่ามุม
        this.direction = newDirection; // อัปเดตค่ามุมในตัวแปร
      }, 2000);
    },
  },
};
</script>

<style scoped>
/* กำหนด style พื้นฐาน */
</style> -->

<template>
  <div>
    <div ref="compass"></div>
    <p>Current Direction: {{ currentDirection }} ({{ direction }}°)</p>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      direction: 0, // ค่ามุมจากฮาร์ดแวร์
    };
  },
  computed: {
  currentDirection() {
    const angle = this.direction;
    // แปลงค่ามุมให้เป็นทิศทาง
    if (angle >= 337.5 || angle < 22.5) {
      return 'N';
    } else if (angle >= 22.5 && angle < 67.5) {
      return 'NE';
    } else if (angle >= 67.5 && angle < 112.5) {
      return 'E';
    } else if (angle >= 112.5 && angle < 157.5) {
      return 'SE';
    } else if (angle >= 157.5 && angle < 202.5) {
      return 'S';
    } else if (angle >= 202.5 && angle < 247.5) {
      return 'SW';
    } else if (angle >= 247.5 && angle < 292.5) {
      return 'W';
    } else if (angle >= 292.5 && angle < 337.5) {
      return 'NW';
    }
    return 'N/A'; 
  },
},

  mounted() {
    const width = 300;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 140;

    // สร้าง SVG เข็มทิศ
    const svg = d3.select(this.$refs.compass)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // สร้างพื้นหลังวงกลม
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius + 5)  // เพิ่มขนาดรัศมีวงพื้นหลังให้ใหญ่กว่าวงใน
      .attr('fill', '#000');  // สีพื้นหลังเป็นสีดำ

    // วงกลมกลาง
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius)
      .attr('stroke', '#666')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    // ขีดบอกองศารอบวง
    for (let i = 0; i < 360; i += 5) {
      const angleRad = (i * Math.PI) / 180;
      const x1 = centerX + radius * Math.cos(angleRad);
      const y1 = centerY + radius * Math.sin(angleRad);
      const x2 = centerX + (radius - (i % 30 === 0 ? 15 : 10)) * Math.cos(angleRad);
      const y2 = centerY + (radius - (i % 30 === 0 ? 15 : 10)) * Math.sin(angleRad);
      svg.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#fff')
        .attr('stroke-width', i % 30 === 0 ? 2 : 1);
    }

    // สร้างตัวอักษรทิศ N, E, S, W, NW, NE, SW, SE
    const directions = [
      { text: 'N', x: centerX, y: centerY - radius + 30 },
      // { text: 'NE', x: centerX + radius / Math.sqrt(2) - 10, y: centerY - radius / Math.sqrt(2) + 10 },
      { text: 'E', x: centerX + radius - 30, y: centerY },
      // { text: 'SE', x: centerX + radius / Math.sqrt(2) - 10, y: centerY + radius / Math.sqrt(2) - 10 },
      { text: 'S', x: centerX, y: centerY + radius - 30 },
      // { text: 'SW', x: centerX - radius / Math.sqrt(2) + 10, y: centerY + radius / Math.sqrt(2) - 10 },
      { text: 'W', x: centerX - radius + 30, y: centerY },
      // { text: 'NW', x: centerX - radius / Math.sqrt(2) + 10, y: centerY - radius / Math.sqrt(2) + 10 },
    ];

    directions.forEach(d => {
      svg.append('text')
        .attr('x', d.x)
        .attr('y', d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '24px')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold')
        .text(d.text);
    });

    // สร้างเข็มทิศ (ลูกศร)
    // const needle = svg.append('line')
    //   .attr('x1', centerX)
    //   .attr('y1', centerY)
    //   .attr('x2', centerX)
    //   .attr('y2', centerY - 100)
    //   .attr('stroke', '#ff3b30')  // สีแดงสไตล์ Apple
    //   .attr('stroke-width', 3)
    //   .attr('stroke-linecap', 'round');
    const needle = svg.append('polygon')
      .attr('points', `${centerX},${centerY - 20} ${centerX - 10},${centerY} ${centerX + 10},${centerY}`) // รูปทรงลูกศร
      .attr('fill', '#ff3b30')  // สีแดงแบบ Apple
      .attr('stroke', '#ff3b30')
      .attr('stroke-width', 1);

    // อัปเดตเข็มทิศเมื่อค่า direction เปลี่ยน
    const updateNeedle = angle => {
      needle.attr('transform', `rotate(${angle}, ${centerX}, ${centerY})`);
    };

    // อัปเดตเข็มทิศตามค่าที่ได้รับจากฮาร์ดแวร์
    this.$watch('direction', newDirection => {
      updateNeedle(newDirection);
    });

    // จำลองการรับค่าจากฮาร์ดแวร์
    this.simulateHardwareData();
  },
  methods: {
    simulateHardwareData() {
      setInterval(() => {
        const newDirection = Math.floor(Math.random() * 360); // จำลองค่ามุม
        this.direction = newDirection; // อัปเดตค่ามุมในตัวแปร
      }, 2000);
    },
  },
};
</script>

<style scoped>
/* กำหนด style พื้นฐาน */
* {
  margin: 64px;
}
</style>
