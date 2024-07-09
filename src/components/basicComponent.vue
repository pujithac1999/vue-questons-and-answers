<template>
    <h1>provide and injects</h1>
    props 
data pass from parent to child
app --> aboutview
parent --> app 
child --> aboutview


emit 
data pass from child to parent
app --> aboutview 
parent --> app 
child --> aboutview


provide
data pass from parent to child 
app --> aboutview --> basiccomponent
1. parent --> app (root)
2. child --> aboutview (let consider parent --> child (basiccomponent))

inject 
data pass from child to parent
app --> aboutview --> basiccomponent

<h1>state management </h1>
manage the state of application , other name vuex 
vuex is collection of states, getters, mutations , actions 
state : define global state properties --> $store.state.variable
getter: getting the state and mutations --> $store.getters[`$[variable]`]
mutations : the only modify a variable or source state --> $store.commit(variable)
actions : fetch and process date before having a mutations commit that changes --> $store.dispatch("action_name",payload);

<h1>lifecycle</h1>
updare the changes in DOM 

render --> api init --> mounted --> unmounted 

(vue2)mounted --> created and isert to DOM
unmounted --> remove the data from DOM

(vue3)onmounted 
<code>
    onmounted (() => {
        // insert the data to DOM
    })

    onunmounted (() => {
        // remove the data from DOM
    })
</code>
onunmounted 


</template>
<script lang="ts">
export default {
    setup() {

        return {

        }
    },
}
</script>



