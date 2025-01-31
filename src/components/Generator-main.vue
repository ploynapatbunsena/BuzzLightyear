<template>
  <div class="grid-container">
    <div class="grid-item" v-for="i in 12" :key="i">
      <div class="box-top">
        Top Box
      </div>
      <div class="box-bottom">
        Bottom Box
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridExample',
}
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 คอลัมน์ */
  grid-template-rows: repeat(2, auto);  /* 2 แถว */
  gap: 72px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  height: 200px;
}

.box-top {
  background-color: #add8e6;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-bottom {
  background-color: #90ee90;
  flex: 1; /* กล่องล่างขนาดเล็กกว่า */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
