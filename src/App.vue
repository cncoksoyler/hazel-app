
<template>

  <nav>
    <router-link to="/">Ana sayfa</router-link> |
    <router-link to="/theta">ThetaHealing®</router-link> |
    <router-link to="/numeroloji">Numeroloji</router-link> |
    <router-link to="/hizmetler">Hizmetler</router-link> |
    <router-link to="/about">Hakkimda</router-link> |
    <router-link to="/iletisim">Iletisim</router-link>
  </nav>
  <router-view/>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
