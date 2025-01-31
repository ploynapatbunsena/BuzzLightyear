<template>
  <div class="gasolineTank">
    <h1>Gasoline Tank</h1>
    <div class="tank-container">
      <div class="tank">
        <div class="oil" :style="{ height: oilPercentage + '%' }"></div>
        <div class="percentage">{{ oilPercentage }}%</div>
      </div>
      <div class="details">
        <p>Remaining Volume: {{ remainingVolume }} Lt.</p>
        <p>Total Capacity: {{ totalCapacity }} Lt.</p>
        <!-- <p>Remaining Oil: {{ oilPercentage }}%</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GasolineTank",
  data() {
    return {
      remainingVolume: 9740, // ปริมาณน้ำมันคงเหลือ (Lt.)
      totalCapacity: 14000,  // ปริมาตรสุทธิ (Lt.)
    };
  },
  computed: {
    oilPercentage() {
      // คำนวณเปอร์เซ็นต์น้ำมันคงเหลือ
      return ((this.remainingVolume / this.totalCapacity) * 100).toFixed(2);
    },
  },
};
</script>

<style scoped>
.gasolineTank {
  padding: 24px;
  margin-top: 50%;
  width: 1086px;
  height: 542px;
  font-family: Arial, sans-serif;
  text-align: center;
  border: 1px solid #E9EAF3;
  border-radius: 24px;
  box-shadow: 0 2px 10px 0 rgb(25, 93, 195, 7%);
  /* display: flex; */
}

.tank-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tank {
  position: relative;
  width: 800px;
  height: 320px;
  /* border: 2px solid #000; */
  border: 1px solid #E9EAF3;
  border-radius: 200px;
  background-color: #F9F9FA;
  overflow: hidden;
  display: flex;
  justify-content: center; /* จัดกึ่งกลางในแนวนอน */
  align-items: flex-end;   
}

.oil {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #FEE114;
  transition: height 0.5s ease;
  z-index: 1;
}

.percentage {
  position: absolute;
  z-index: 2;
  /* top: 10px; */
  bottom: 50%;
  left: 50%;
  /* transform: translateX(-50%); */
  transform: translate(-50%, 50%);
  font-size: 96px;
  font-weight: 500;
  color: #333;  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.details {
  margin-left: 16px;
  text-align: left;
}

.details p {
  font-size: 18px;
}
</style>
