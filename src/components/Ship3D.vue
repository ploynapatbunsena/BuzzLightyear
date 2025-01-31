<!-- Ship3D.vue -->
<template>
  <div class="views">
    <div ref="frontView" class="view"></div>
    <div ref="sideView" class="view"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  name: 'Ship3D',
  data() {
    return {
      frontRenderer: null,
      sideRenderer: null,
      frontCamera: null,
      sideCamera: null,
      scene: new THREE.Scene(),
      shipModel: null,
    };
  },
  mounted() {
    this.initThree();
    this.loadModel();
    this.animate();
  },
  methods: {
    initThree() {
      // สร้าง renderer สำหรับ front view
      this.frontRenderer = new THREE.WebGLRenderer();
      this.frontRenderer.setSize(window.innerWidth / 2, window.innerHeight);
      this.$refs.frontView.appendChild(this.frontRenderer.domElement);

      // สร้าง renderer สำหรับ side view
      this.sideRenderer = new THREE.WebGLRenderer();
      this.sideRenderer.setSize(window.innerWidth / 2, window.innerHeight);
      this.$refs.sideView.appendChild(this.sideRenderer.domElement);

      // สร้างกล้องสำหรับ front view และ side view
      this.frontCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.sideCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.frontCamera.position.set(0, 0, 5);
      this.sideCamera.position.set(5, 0, 0);
      this.sideCamera.lookAt(0, 0, 0);
    },
    loadModel() {
      const loader = new GLTFLoader();
      loader.load(
        '/models/scene1.glb',
        (gltf) => {
          // สร้าง Scene ใหม่สำหรับโมเดล
          const modelScene = new THREE.Scene();
          this.shipModel = gltf.scene;
          modelScene.add(this.shipModel);
          
          // เพิ่มโมเดลลงใน Scene หลัก
          this.scene.add(modelScene);
          console.log('Model loaded:', this.shipModel);
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    },
    updateRotation(xTilt, yTilt) {
      if (this.shipModel) {
        this.shipModel.rotation.x = THREE.Math.degToRad(xTilt);
        this.shipModel.rotation.y = THREE.Math.degToRad(yTilt);
      }
    },
    animate() {
      requestAnimationFrame(this.animate.bind(this)); // แน่ใจว่าใช้ bind
      this.frontRenderer.render(this.scene, this.frontCamera);
      this.sideRenderer.render(this.scene, this.sideCamera);
    }
  },
  watch: {
    // รับข้อมูลความเอียงจาก WebSocket หรือ API แล้วอัปเดตการหมุน
    tiltData(newData) {
      const { xTilt, yTilt } = newData;
      this.updateRotation(xTilt, yTilt);
    },
  },
};
</script>

<style scoped>
.views {
  display: flex;
}
.view {
  width: 50%;
}
</style>
