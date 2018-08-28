<template lang="html">
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/foo">Reading List</router-link>
            <router-link to="/bar">Links</router-link>
            <router-link to="/bar">About</router-link>
        </nav>

        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="css">
    html,
    body {
        padding: 0;
        margin: 0;
        background: #252525;
        color: #FEFEFE;
        height: 100%;
    }

    nav{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #FEFEFE;
        color: #252525;
    }

    nav a{
        padding: 0 0.5rem;
        color: #252525;
        text-transform: uppercase;
        text-decoration: none;
    }

    nav a.is-active{
        color: #3f4dff;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    #app {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        /*align-items: center;*/
        /*height: 100%;*/
    }

    h1 {
        font-weight: 300;
    }
</style>
