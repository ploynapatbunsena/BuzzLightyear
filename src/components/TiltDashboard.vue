<template>
  <div class="dashboard-container">
    <div class="ship" :style="{ transform: `perspective(800px) rotateX(${x_axis}deg) rotateY(${y_axis}deg)` }"></div>
    <div class="sea"></div>
    
    <div class="controls">
      <label>X-Axis: {{ x_axis }}°</label>
      <input type="range" min="-30" max="30" v-model="x_axis" />
      
      <label>Y-Axis: {{ y_axis }}°</label>
      <input type="range" min="-30" max="30" v-model="y_axis" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x_axis: 0, // ความเอียงขึ้น-ลง (แกน X)
      y_axis: 0,   // ความหมุนซ้าย-ขวา (แกน Y)
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 300px; /* กำหนดความสูงของพื้นที่แสดง */
  perspective: 800px; /* มุมมอง 3D */
}

.sea {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* ความสูงของน้ำ */
  background-color: rgba(0, 191, 255, 0.6); /* สีน้ำทะเลแบบโปร่งใส */
  z-index: 2; /* กำหนดน้ำให้อยู่ด้านหน้า */
}

.ship {
  width: 100px;
  height: 50px;
  background-color: blue;
  border: 2px solid black;
  position: absolute;
  bottom: 100px; /* วางเรือให้อยู่หลังน้ำ */
  transform-origin: center center;
  transition: transform 0.3s ease; /* ให้การหมุนลื่นไหล */
  z-index: 1; /* กำหนดเรือให้อยู่ด้านหลังน้ำ */
}

.controls {
  position: absolute;
  bottom: -120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-top: 10px;
}
</style>


