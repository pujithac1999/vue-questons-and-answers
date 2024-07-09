<template>
    <h1>computed</h1>
    <h2>{{ fullName }}</h2>
</template>
<script lang="ts">
import { computed, ref } from 'vue';
// this is also one of the way to display data in UI
// we can used for composing new data from exiting data .
// it updated where their dependencies changes are needed .
// it also clear the cache 
// main used for cache calucations 
export default {
    setup() {
        const firstName = ref("abc");
        const lastName = ref("bcd");
        const fullName = computed (() => {
            return `${firstName.value} ${lastName.value}`;
        })
        return{
        fullName
        }
    },
}
</script>
