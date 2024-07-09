<template>
  <nav>
    <router-link class="routerlink" to="/">Home</router-link> |
    <router-link class="routerlink" to="/about">About</router-link>
    <router-link class="routerlink" to="/bind">Bind</router-link>
    <router-link class="routerlink" to="/vfor">v-for-concept</router-link>
    <router-link class="routerlink" to="/comp">computed</router-link>
    <router-link class="routerlink" to="/watch">watcher</router-link>
    <router-link class="routerlink" to="/props">props concept</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.routerlink {
  margin: 5px;
}
</style>
