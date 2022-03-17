import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery/dist/jquery.min';
global.jQuery = jQuery;
global.$ = jQuery;
let Bootstrap = require('bootstrap/dist/js/bootstrap.min');
import Popper from 'popper.js/dist/popper';
import jQueryEasing from 'jquery.easing/jquery.easing.min';
import jQueryWaypoints from 'jquery-waypoints/waypoints.min';
let jQueryStellar  = require('jquery.stellar/jquery.stellar');
let Carousel  = require('owl.carousel/dist/owl.carousel');
import MagnificPopup from 'magnific-popup/dist/jquery.magnific-popup';
import AOS from 'aos/dist/aos';
// import AOS from 'aos'
let AnimateNumber = require('jquery.animate-number/jquery.animateNumber');
import  Scrollax from 'scrollax/scrollax.min';
// let MainJs =  require('./assets/js/main');
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/assets/css/animate.css';
import '@/assets/css/aos.css';
import '@/assets/css/bootstrap-datepicker.css';
import '@/assets/css/flaticon.css';
import '@/assets/css/icomoon.css';
import '@/assets/css/ionicons.min.css';
import '@/assets/css/jquery.timepicker.css';
import '@/assets/css/magnific-popup.css';
import '@/assets/css/open-iconic-bootstrap.min.css';
import '@/assets/css/owl.theme.default.min.css';
import '@/assets/css/style.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
