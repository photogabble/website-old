<template lang="html">
    <div id="app">
        <nav>
            <div class="container">
                <router-link to="/">photogabble.co.uk</router-link>
                <router-link to="/bar">articles</router-link>
                <router-link to="/foo">Reading List</router-link>
            </div>
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
        background: #f9f9f9;
        color: #252525;
        height: 100%;
    }

    .container {
        width: 45rem;
    }

    .outer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    nav{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #FFFFFF;
        color: #252525;
        border-top: 5px solid #4d8e27;
        box-shadow: 0 -4px 10px rgba(0,0,0,.7);
    }

    .drop-shadow{
        box-shadow: 0 0 5px rgba(0,0,0,.7);
    }

    nav a{
        padding: 0 0.5rem;
        color: #252525;
        text-transform: uppercase;
        text-decoration: none;
    }

    a, nav a.is-active{
        color: #4d8e27;
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
