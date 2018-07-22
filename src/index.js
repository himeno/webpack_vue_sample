import Vue from 'vue';
import App from './components/App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.scss';

new Vue({
  el: '#app',
  render: h => h(App),
});