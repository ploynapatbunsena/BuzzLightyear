<template>
  <v-app>
    <!-- <NavigateBar></NavigateBar> -->
    <!-- <GeneratorMain></GeneratorMain>
    <CompassTest :size="300"></CompassTest>
    <TiltDashboard></TiltDashboard>
    <GasolineTank></GasolineTank>  -->
    <!-- <GuageView></GuageView> -->
    <!-- <MapView></MapView> -->
    <!-- <MapCompass></MapCompass> -->
    <!-- <HourMeter></HourMeter> -->
    <!-- <MapFullView></MapFullView> -->
    <!-- <MapCompass02></MapCompass02> -->
    <!-- <RPMSpeed></RPMSpeed> -->
    <GaugeChart></GaugeChart>
    <!-- <CustomGauge02 /> -->
     <!-- <CustomGauge03></CustomGauge03> -->
    <!-- <CustomGauge04></CustomGauge04> -->
    <!-- <CustomGauge05></CustomGauge05> -->
  </v-app>
</template>

<script>
// import NavigateBar from './components/Navigate-bar.vue';
// import GeneratorMain from './components/Generator-main.vue';
// import TiltDashboard from './components/TiltDashboard.vue';
// import CompassTest from './components/Compass-test.vue';
// import GasolineTank from './components/Gasoline-tank.vue';
// import MapView from './components/Compass-view.vue';
// import GuageView from './components/Guage-view.vue';
// import MapCompass from './components/Map-compass.vue';
// import HourMeter from './components/HourMeter.vue';
// import MapFullView from './components/MapFullView.vue';
// import MapCompass02 from './components/Map-compass02.vue';
// import RPMSpeed from './components/Report-RPM-Speed.vue';
import GaugeChart from './components/Gauge-chart.vue';
// import CustomGauge02 from './components/CustomGauge02.vue';
// import CustomGauge03 from './components/CustomGauge03.vue';
// import CustomGauge04 from './components/CustomGauge04.vue';
// import CustomGauge05 from './components/CustomGauge05.vue';

export default {
  name: 'App',
  
  components: {
    // NavigateBar,
    // GeneratorMain,
    // CompassTest,
    // TiltDashboard,
    // GasolineTank,
    // MapView,
    // GuageView,
    // MapCompass,
    // HourMeter,
    // MapFullView,
    // MapCompass02,
    // RPMSpeed,
    GaugeChart,
    // CustomGauge02,
    // CustomGauge03,
    // CustomGauge04,
    // CustomGauge05
  },

  data: () => ({
    //
  }),
}
</script>

<style>
/* body {
  margin: 64px;
  font-family: "Poppins";
  background-color: #F7F9FC;
} */
</style>


