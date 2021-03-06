import Vue from 'vue';
import Vuex from 'vuex';
import lab from "./modules/lab";
import osc from "./modules/oscilog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lab,
    osc
  }
});
