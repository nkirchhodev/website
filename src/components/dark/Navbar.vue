<template>
    <section class="dark-navbar">
        <ul class="left-nav">
            <li>Catégorie 1</li>
            <li>Catégorie 2</li>
            <li>Catégorie 3</li>
        </ul>

        <img src="/static/logo-light.png" v-on:click="switchColorMode" alt="nkirchho.dev">

        <ul class="right-nav">
            <li>Catégorie 1</li>
            <li>Catégorie 2</li>
            <li>Catégorie 3</li>
        </ul>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {

        }
    },

    methods: {
        ...mapActions(['switchColorMode'])
    }
}
</script>

<style scoped>
.dark-navbar {
    position: absolute;
    top: 0; left: 0;
    height: 50px;
    width: 100%;
    background: #2D3748;
    border-bottom: 1px solid #718096;

    display: flex;
    justify-content: center;
    align-items: center;
}

.dark-navbar > ul {
    color: #E2E8F0;
    list-style: none;

    font-family: 'Roboto', sans-serif;

    width: calc(45% - 30px);
    font-size: 12pt;
}

.dark-navbar > img {
    width: 60px;
    height: 60px;

    margin-top: 20px;
}

.dark-navbar > ul > li {
    display: inline-block;

    padding: 0 5%;
}

</style>
