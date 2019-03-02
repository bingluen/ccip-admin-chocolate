import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';
import router from './router';
import config from '../config.json';

Vue.mixin({
  data() {
    return {
      get globalAppConfig() {
        return config;
      },
    };
  },
});

Vue.use(VueMaterial);

// https://github.com/vuematerial/vue-material/issues/1977
Vue.use(VueRouter);
Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
