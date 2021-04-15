import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    strict: true,
 state: {
     ValueOne: 'Someone',
     ValueTwo: 'SecondSomeone'
 },

 getters: {
     MrValueOne : state => {
         return 'Mr ' + state.ValueOne
     },

     MrValueTwo: state => {
         return 'Mr ' + state.ValueTwo
     }
 },

 mutations: {
     ChangeValueOne (state, value){
        state.ValueOne = value
     },

     ChangeValueTwo (state, valueTwo){
        state.ValueTwo = valueTwo
     }
 },
 actions: {}
});