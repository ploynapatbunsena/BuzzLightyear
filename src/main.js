import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/style.css";
import 'leaflet/dist/leaflet.css'
import 'leaflet-compass/dist/leaflet-compass.min.css'
import HighchartsVue from "highcharts-vue";

loadFonts()

createApp(App)
  .use(vuetify)
  .use(HighchartsVue)
  .mount('#app')
