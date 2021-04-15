<template>
<div id="firstChild">
    <h1>I'm child</h1>
    <h2>And value one from index.js is: {{ValueOne}}</h2>
    <h2>Or from getter: {{MrValueOne}}</h2>
    <label for="textArea">Here I can change value of bottom child: </label><input type="text" v-model="text">
    <button v-on:click="ValueTwoChange(text)">Change</button>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex'

export default {

    methods:{
        ...mapActions(['ValueTwoChange'])
    },

    computed:{
        ...mapGetters(['ValueOne', 'MrValueOne'])
    }
    
}
</script>

<style>
    #firstChild{
        border: solid 2px gray;
    }
</style>