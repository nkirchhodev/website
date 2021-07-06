<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import { mapActions } from 'vuex'

export default {
    name: 'App',

    methods: {
        ...mapActions(['setColorMode'])
    },

    mounted () {
        const colorMode = Cookie.get('color-mode')

        if (colorMode) {
            this.setColorMode(colorMode)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
