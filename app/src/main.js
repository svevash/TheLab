import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from '@/plugins/vuetify';
import VueMoment from "vue-moment";
import moment from "moment";

moment.locale('ru');

Vue.use(VueMoment, {
  moment
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
