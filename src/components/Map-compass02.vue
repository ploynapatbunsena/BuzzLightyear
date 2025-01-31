<template>
  <div class="container">
    <div id="map"></div>
    <div class="wind-info">
      <div class="wind-speed">
        <span class="">Wind Speed</span>
        <img :src="require('@/assets/wind-speed.svg')" alt="">
        <p style="font-size: 96px;">9 m/hr</p>
      </div>
      <div class="wind-direction">
        <span class="">Wind Direction</span>
        <img src="" alt="">
        <p style="font-size: 96px;">N0°</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-compass';
import markerIconUrl from '@/assets/ship_location.png';

export default {
  setup() {
    const currentBearing = ref(0);
    const map = ref(null);
    const compassControl = ref(null);

    const currentDirection = computed(() => {
      const angle = currentBearing.value;
      if (angle >= 337.5 || angle < 22.5) return 'N';
      else if (angle >= 22.5 && angle < 67.5) return 'NE';
      else if (angle >= 67.5 && angle < 112.5) return 'E';
      else if (angle >= 112.5 && angle < 157.5) return 'SE';
      else if (angle >= 157.5 && angle < 202.5) return 'S';
      else if (angle >= 202.5 && angle < 247.5) return 'SW';
      else if (angle >= 247.5 && angle < 292.5) return 'W';
      else if (angle >= 292.5 && angle < 337.5) return 'NW';
      return 'N/A';
    });

    onMounted(() => {
      const osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>';

      // Initialize map
      map.value = L.map('map').setView([13.142583, 100.806189], 13);

      // Add tile layer
      L.tileLayer(osmUrl, {
        maxZoom: 20,
        attribution: osmAttrib,
      }).addTo(map.value);

      // Add Leaflet compass
      compassControl.value = L.control.compass({
        autoActive: true,
        showDigit: true,
        position: 'topright',
        textErr: 'ไม่สามารถตรวจจับทิศทางได้',
        onChange: (angle) => {
          updateCompassDirection(angle);
        }
      }).addTo(map.value);

      // Custom icon setup
      const customIcon = L.icon({
        iconUrl: markerIconUrl,
        iconSize: [48, 48],
        iconAnchor: [16, 32],
      });

      // Add markers
      const markers = [
        { position: [13.122581, 100.816189], name: 'Ketsarin 01' },
      ];

      markers.forEach(marker => {
        L.marker(marker.position, { icon: customIcon })
          .addTo(map.value)
          .bindPopup(marker.name);
      });

      // Function to update both compasses
      function updateCompassDirection(angle) {
        currentBearing.value = angle;

        // Update Leaflet compass
        const compassElem = document.querySelector('.leaflet-compass .compass-icon');
        if (compassElem) {
          compassElem.style.transform = `rotate(${angle}deg)`;
        }

        // Update digit display in Leaflet compass with direction
        const digitElem = document.querySelector('.leaflet-compass .compass-digit');
        if (digitElem) {
          digitElem.textContent = `${currentDirection.value}${Math.round(angle)}°`;
        }
      }

      // Handle device orientation
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
          if (event.webkitCompassHeading) {
            // For iOS devices
            updateCompassDirection(event.webkitCompassHeading);
          } else if (event.alpha) {
            // For Android devices
            updateCompassDirection(360 - event.alpha);
          }
        });
      }

      // For testing - update random bearing every 7 seconds
      const testInterval = setInterval(() => {
        const randomBearing = Math.floor(Math.random() * 360); // Random angle between 0 and 359
        updateCompassDirection(randomBearing);
      }, 7000);

      // Cleanup on component unmount
      return () => {
        if (testInterval) {
          clearInterval(testInterval);
        }
        if (map.value) {
          map.value.remove();
        }
      };
    });

    return {
      currentBearing,
      currentDirection,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}

.container {
  display: flex;
  margin: 32px;
  padding: 24px;
  border: 1px solid #D6E6F2;
  border-radius: 40px;
  box-shadow: 0 2px 10px 0 rgb(25 93 194 / 7%);
  position: relative;
  width: 1266px;
  height: 621px;
}

#map {
  border-radius: 16px;
  width: 714px;
  height: 568px;
}

.wind-info {
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 568px;
  margin-left: 32px;
  justify-content: space-between;
}

.wind-direction, .wind-speed {
  width: 100%;
  height: 268px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  border-radius: 16px;
}

/* Override Leaflet compass styles to match custom compass */
:deep(.leaflet-compass .compass-icon) {
  transition: transform 1s ease-out;
  background-image: url(/src/assets/compass.svg);
  background-size: cover;
  width: 100px; 
  height: 100px;
}

:deep(.leaflet-control.leaflet-compass) {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url(/src/assets/scale.svg);
  width: 150px;
  height: 150px;
  box-shadow: none;
  margin: 20px;
}

:deep(.leaflet-compass .compass-button) {
  width: 100px;
  height: 100px;
}

:deep(.leaflet-compass .compass-digit) {
  position: absolute;
  margin-top:32px;
  left: 55%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 16px;
}

:deep(.leaflet-compass .compass-alert) {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
}
</style>