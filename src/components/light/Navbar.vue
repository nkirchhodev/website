<template>
    <section class="light-navbar">
        <ul class="left-nav">
            <li>Catégorie 1</li>
            <li>Catégorie 2</li>
            <li>Catégorie 3</li>
        </ul>

        <img src="/static/logo-dark.png" v-on:click="switchColorMode" alt="nkirchho.dev">

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
.light-navbar {
    position: absolute;
    top: 0; left: 0;
    height: 50px;
    width: 100%;
    background: #E2E8F0;
    border-bottom: 1px solid #CBD5E0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.light-navbar > ul {
    color: #2D3748;
    font-family: 'Roboto', sans-serif;
    font-size: 12pt;
    list-style: none;

    width: calc(45% - 30px);
}

.light-navbar > img {
    width: 60px;
    height: 60px;

    margin-top: 20px;
}

.light-navbar > ul > li {
    display: inline-block;

    padding: 0 5%;
}

</style>
