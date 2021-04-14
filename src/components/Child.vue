<template>
<div>
    <h1>Im child</h1>
    <h2>And that's my data from parent: {{dataFromProps}}</h2>
</div>
</template>

<script>
export default {
    props:['dataInChild'],
    data(){
        return{
            dataFromProps: ''
        }
    },

    watch:{
        dataInChild(){
            this.dataFromProps = this.dataInChild
        }
    }
}
</script>