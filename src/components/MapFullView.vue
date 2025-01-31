<template>
  <div id="map" ref="map"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapView',
  setup() {
    const map = ref(null);

    onMounted(() => {
      // สร้างแผนที่และตั้งค่าพิกัดเริ่มต้น (กรุงเทพฯ)
      map.value = L.map('map').setView([13.7563, 100.5018], 10);

      // เพิ่ม Tiles จาก OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map.value);

      // เพิ่ม Marker ลงในแผนที่
      // L.marker([13.7563, 100.5018]).addTo(map.value)
      //   .bindPopup('กรุงเทพมหานคร')
      //   .openPopup();
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
/* ตั้งค่าแผนที่ให้เต็มหน้าจอ */
#map {
  height: 100vh;
  width: 100vw;
}
</style>
