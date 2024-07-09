<!-- pass the data from child to parent  -->
<template>
    <h1>emit concept</h1>
    <button @click="nofity">Click</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'emitComponent',
    emits: ['customname'], // Specify the events that can be emitted

    setup(_, { emit }) {
        const nofity = () => {
            emit('customname'); // Emit the custom event
        };

        return {
            nofity
        };
    },
});
</script>
