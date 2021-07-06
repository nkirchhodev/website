<template>
    <section class="homepage">
        <light-navbar v-if="colorMode === 'light'" />
        <dark-navbar v-if="colorMode === 'dark'" />
    </section>
</template>

<script>
import DarkNavbar from '../components/dark/Navbar'
import LightNavbar from '../components/light/Navbar'

import { mapState } from 'vuex'

export default {
    components: {
        'light-navbar': LightNavbar,
        'dark-navbar': DarkNavbar
    },

    data () {
        return {

        }
    },

    computed: {
        ...mapState(['colorMode'])
    }
}
</script>

<style scoped>
body {
    background: #4A5568;
    height: 100vh; width: 100vw;
}
</style>
