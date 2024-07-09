<template>
    <h1>props</h1>
    <p>{{ name }}</p>
</template>
<script lang="ts">
// passing data from parent to child
export default {
    props:{
        name : {
            type : String , 
            required : true
        }
    },
    setup() {
        return {
        }
    },
}
</script>