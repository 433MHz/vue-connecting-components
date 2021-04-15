import { setTimeout } from "core-js";
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
 actions: {
     ValueOneChange (context, payload){
         setTimeout(function(){
        context.commit('ChangeValueOne', payload)
         }, 2000)
     },

     ValueTwoChange(context, payload){
         setTimeout(function(){
        context.commit('ChangeValueTwo', payload)
         },2000)
    }
 }
});