import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     valueOne: 'Someone',
     valueTwo: 'SecondSomeone'
 },
 getters: {
     valueOneMr: state => {
         return 'Mr ' + state.valueOne
     },

     valueTwoMr: state => {
         return 'Mr ' + state.valueTwo
     }
 },
 mutations: {},
 actions: {}
});