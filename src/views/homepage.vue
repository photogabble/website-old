<template>
    <div id="homepage" class="outer">
        <section class="introduction container">
            <a href="http://pravatar.cc" class="avatar drop-shadow" style="background-image: url(http://i.pravatar.cc/82)"></a>

            <p>Hi, I'm <strong>Simon</strong> and this is my personal blog where I document various things I have learnt or
                are of interest to me.</p>
            <p>The topics I write about here include: <a href="#">programming</a>, <a href="#">games</a>, <a href="#">tutorials</a>,
                <a href="#">blogging</a>, <a href="#">pixel art</a> and <a href="#">useful tools and resources</a>.</p>
            <p>I maintain the static site generator <a href="https://www.tapestry.cloud">Tapestry</a>, a port of <a href="#">isso to PHP</a> and a couple of <a href="#">less ambitious projects</a>.</p>
            <p>Subscribe to <a href="#">RSS</a> or <router-link to="/elsewhere">find me elsewhere</router-link>.</p>
        </section>

        <section class="recent outer">
            <div class="container">
                <strong>Recent Articles</strong>
            </div>
        </section>
    </div>
</template>

<style lang="css">
    #homepage{
        font-size: 1.6rem;
        font-family: serif;
        line-height: 2.3rem;
    }

    .introduction {
        margin-top: 3rem;
    }

    .recent{
        background: #efefef;
        padding: 3rem 0;
        width: 100%;
    }

    .avatar{
        display: inline-block;
        overflow: hidden;
        height: 82px;
        width: 82px;
        border-radius: 50%;
        background-color: #252525;
    }
</style>