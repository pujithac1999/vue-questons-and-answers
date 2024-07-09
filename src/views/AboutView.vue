<template>
  <div class="about">
    <h1>This is an about page</h1>
    <basicComponentVue />
  </div>
</template>
<script lang="ts">
import basicComponentVue from '@/components/basicComponent.vue'
export default {
  components:{
    basicComponentVue
  },
  setup() {
    return {

    }
  },
}
</script>
