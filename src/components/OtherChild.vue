<template>
<div id="secondChild">
    <h1>I'm other child</h1>
    <h2>And my value two from index.js is: {{this.$store.state.ValueTwo}}</h2>
    <h2>Or from getter: {{this.$store.getters.MrValueTwo}}</h2>
    <label for="textArea">And here i can change upper child value: </label><input type="text" id="textArea" v-model="text">
    <button v-on:click="ValueOneChange(text)">Change</button>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {

    methods:{
        ...mapActions(['ValueOneChange'])
    },

    computed:{
        ...mapGetters(['ValueTwo', 'MrValueTwo'])
    }
  
}
</script>

<style>
    #secondChild{
        border: solid 2px gray;
    }
</style>