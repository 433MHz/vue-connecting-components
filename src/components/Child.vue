<template>
<div id="firstChild">
    <h1>I'm child</h1>
    <h2>And value one from index.js is: {{this.$store.state.ValueOne}}</h2>
    <h2>Or from getter: {{this.$store.getters.MrValueOne}}</h2>
    <label for="textArea">Here I can change value of bottom child: </label><input type="text" v-model="text">
    <button v-on:click="ChangeValueTwo(text)">Change</button>
</div>
</template>

<script>
export default {
    
    methods:{
        ChangeValueTwo(text){
            this.$store.commit('ChangeValueTwo', text)
        }
    }
    
}
</script>

<style>
    #firstChild{
        border: solid 2px gray;
    }
</style>