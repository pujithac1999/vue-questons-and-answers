<template>
    <h1> props component</h1>
    <propsComponentVue name="puji" />
    <emitComponentVue @customname = "handle" />
    <p>{{ message }}</p>
</template>
<script lang="ts">
import {ref} from 'vue'
import propsComponentVue from '@/components/propsComponent.vue'
import emitComponentVue from '@/components/emitComponent.vue'
export default {
    components:{
        propsComponentVue,
        emitComponentVue
    },
    setup() {
      const message = ref("waiting for name");
      const handle = (payload: any) => {
        message.value = payload
      }
      return {
        message,
         handle
       }  
    },
}
</script>