<template>
<div>
    <h1>I'm child</h1>
    <h2>And value one from index.js is: {{valueOneFromIndex}}</h2>
</div>
</template>

<script>
export default {
    data(){
        return{
            valueOneFromIndex: '',
        }
    },

    mounted(){
        this.valueOneFromIndex = this.$store.state.valueOne
    }
    
}
</script>