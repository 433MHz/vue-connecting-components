<template>
  <div>
    <Child>Child not working</Child>
    <OtherChild>Other child not working</OtherChild>
  </div>
</template>


<script>
import Child from './components/Child.vue'
import OtherChild from './components/OtherChild.vue'
export default {
  components: { Child, OtherChild },
  
}
</script>