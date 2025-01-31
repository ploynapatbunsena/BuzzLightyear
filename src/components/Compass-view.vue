<template>
  <div class="compass-overlay" ref="compassOverlay">
    <div class="compass-rose">
      <div class="compass-labels">
        <span class="compass-n">N</span>
        <span class="compass-e">E</span>
        <span class="compass-s">S</span>
        <span class="compass-w">W</span>
      </div>
      <div class="compass-arrow" :style="{ transform: `rotate(${bearing}deg)` }"></div>
    </div>
    <div class="compass-degree">{{ formattedBearing }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'CompassComponent',
  props: {
    bearing: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const formattedBearing = computed(() => {
      const angle = ((props.bearing % 360) + 360) % 360;
      if (angle >= 337.5 || angle < 22.5) return `N ${Math.round(angle)}°`;
      else if (angle >= 22.5 && angle < 67.5) return `NE ${Math.round(angle)}°`;
      else if (angle >= 67.5 && angle < 112.5) return `E ${Math.round(angle)}°`;
      else if (angle >= 112.5 && angle < 157.5) return `SE ${Math.round(angle)}°`;
      else if (angle >= 157.5 && angle < 202.5) return `S ${Math.round(angle)}°`;
      else if (angle >= 202.5 && angle < 247.5) return `SW ${Math.round(angle)}°`;
      else if (angle >= 247.5 && angle < 292.5) return `W ${Math.round(angle)}°`;
      else if (angle >= 292.5 && angle < 337.5) return `NW ${Math.round(angle)}°`;
      return `N/A`;
    });

    return {
      formattedBearing
    };
  }
};
</script>


<style scoped>
.compass-overlay {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 100px; /* ขยายขนาดวงกลม */
  height: 100px; /* ขยายขนาดวงกลม */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.compass-rose {
  position: relative;
  width: 80px; /* ขยายขนาดเพื่อให้เข็มอยู่กลาง */
  height: 80px; /* ขยายขนาดเพื่อให้เข็มอยู่กลาง */
}

.compass-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 30px;
  background: red;
  transform-origin: bottom center;
  transform: translate(-50%, -100%); /* แก้ไขเพื่อให้เข็มอยู่ตรงกลาง */
  clip-path: polygon(50% 0, 100% 100%, 50% 85%, 0 100%);
}

.compass-labels {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.compass-labels span {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
}

.compass-n { top: 5px; left: 50%; transform: translateX(-50%); }
.compass-e { right: 5px; top: 50%; transform: translateY(-50%); }
.compass-s { bottom: 5px; left: 50%; transform: translateX(-50%); }
.compass-w { left: 5px; top: 50%; transform: translateY(-50%); }

.compass-degree {
  position: absolute;
  top: 110px; /* ปรับตำแหน่งให้ย้ายอยู่ด้านนอกวงกลม */
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
