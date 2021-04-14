<template>
    <div>
    <h1>I'm parent</h1>
    <label for="textArea">For child: </label> <input type="text" id="textArea" v-model="textForChild"><button v-on:click="DataForChild = textForChild">Send</button>
    <Child :dataInChild = "DataForChild">Child not working</Child>
    </div>
</template>


<script>
import Child from './Child.vue'
export default {
  components: { Child },
    
    data(){
        return{
            DataForChild: ''
        }
    }


}
</script>