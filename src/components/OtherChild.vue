<template>
<div>
    <h1>I'm other child</h1>
    <h2>And my value two from index.js is: {{ValueTwoFromIndex}}</h2>
</div>
</template>


<script>
export default {
    data(){
        return{
            ValueTwoFromIndex: ''
        }
    },

    mounted(){
        this.ValueTwoFromIndex = this.$store.state.valueTwo
    }
  
}
</script>