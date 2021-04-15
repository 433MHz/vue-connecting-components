<template>
<div id="secondChild">
    <h1>I'm other child</h1>
    <h2>And my value two from index.js is: {{this.$store.state.ValueTwo}}</h2>
    <h2>Or from getter: {{this.$store.getters.MrValueTwo}}</h2>
    <label for="textArea">And here i can change upper child value: </label><input type="text" id="textArea" v-model="text">
    <button v-on:click="ChangeValueOne(text)">Change</button>
</div>
</template>

<script>
export default {
    methods:{
        ChangeValueOne(text){
            this.$store.dispatch('ValueOneChange', text)
        }
    }
  
}
</script>

<style>
    #secondChild{
        border: solid 2px gray;
    }
</style>