<template>
<div>
    <h1>Im child</h1>
    <label for="textArea">Wpisz coś: </label> <input type="text" id="textArea" placeholder="Wpisz coś" v-model="text"> 
    <button v-on:click="UpdateParentValue(text)">Zatwierdź</button>
</div>
</template>

<script>
export default {
    methods:{
        UpdateParentValue(text){
            this.$emit('updateParentData', text)
        }
    }
}
</script>