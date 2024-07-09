<template>
    <h1>template</h1>
    <p v-for="movie in movies" :key="movie.id">{{ movie }}</p><hr>

    <div v-if="isAbc"><p>we are in if </p></div>
    <div v-else-if="isAbcd"><p>we are in else-if block</p></div>
    <div v-else>we are in else</div><hr>

    <div v-show="isVis"><p>i am very bad</p></div>
    <button @click="toggle">toggle button</button><hr>

    <table border="2">
        <tr><th>v-if</th><th>v-show</th></tr>
        <tr>
            <td>it is useful while the condition is completely true or false</td>
            <td>it is useful while the conditon is not sure may be true or false</td>
        </tr>
        <tr>
            <td>the data will render if the condition is true</td>
            <td>the data will render if the condition is true or false</td>
        </tr>
    </table>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
    setup() {
        const isVis = ref(true);
        const isAbc = ref(false);
        const isAbcd = ref(false);
        const movies =ref(["kalki", "GS" , "iron man" , "captain"]);
        console.log(movies.value)
        function toggle(){
            isVis.value = !isVis.value;
        }
        return {
          movies,
          isAbc,
          isAbcd,
          toggle,
          isVis 
        }
    },
}
</script>
