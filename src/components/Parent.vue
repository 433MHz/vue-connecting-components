<template>
    <div>
    <h1>I'm parent</h1>
    <h2>And that's data from child: {{DataFromChild}}</h2>
    <Child @updateParentData="UpdateDataFromChild($event)"></Child>
    </div>
</template>


<script>
import Child from './Child.vue'
export default {
  components: { Child },
    data(){
        return{
            DataFromChild: ''
        }
    },

    methods:{
        UpdateDataFromChild(data){
            this.DataFromChild = data
        }
    }
}
</script>