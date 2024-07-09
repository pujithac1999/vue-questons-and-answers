<!-- pass the data from child to parent  -->
<template>
    <h1>emit concept</h1>
    <button @click = "nofity"> Click </button>
</template>
<script lang="ts">
export default {
    name:'emitComponent',
    emit: {
        type:Boolean,
        required : true
    },
    setup(_,{emit}) {
        const nofity = () => {
            emit('customname');
        }
        return {
           nofity
        }
    },
}
</script>