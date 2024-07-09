<template>
    <h1>watcher</h1>

    <h2>{{ volume }}</h2>
    <button @click="increaseVolume()"> vol ++</button>
    <button @click="decreaseVolume()"> vol --</button>
</template>
<script lang="ts">
import { ref , watch } from 'vue';
export default {
    setup() {
        const volume = ref(0);
        const increaseVolume = () => {
           return  volume.value++;
        }
        const decreaseVolume =() => {
            return volume.value--;
        }
        watch(volume,(newvalue) => {
            if (newvalue > 15 || newvalue <= 0){
                alert("high vol ");
            }
        })

        return {
           volume,
           increaseVolume,
           decreaseVolume
        }
    },
}
</script>