<template>
    <div>Binding</div>
    <p>what is binding ? </p>
    <p>{{ text }}</p><hr>
    <p>what is two way binding ?</p>
    <p>{{ twobinding }}</p><hr>
    <h1>example</h1>
    <input v-model="abc" label="enter name" />
    <p>{{ abc }}</p><hr>
    <div v-html="htmlBinidng"></div><hr>
    <button :class='isPro'>click</button>
</template>
<script lang="ts">
import {ref} from 'vue'
export default{
    setup(){
        const isPro = ref(false);
        const text = "binding text from script";
        const twobinding = "updating the template and script at same time";
        const abc =ref(" ");
        const htmlBinidng =ref('<span> v-html binding </span>');
        // to make a single variable reactive we use ref
        // to make one or more variable reactive we use reactive  
        return {
          text,
          twobinding,
          abc,
          htmlBinidng,
          isPro,
        }
    }
}
</script>
<style scoped>
.Promoted{
    color: red;
}
</style>