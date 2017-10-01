<template>
    <section class="hero is-black is-fullheight">
  <div class="hero-body">
    <div class="container">
       <img src="https://hmr0.me/darth.png" alt="hmr0" height="155" width="153">
      <h1 class="title page-title">
        hmr0
      </h1>
      <h2 class="subtitle">
      software engineering, football, games, movies
      </h2>
      <h2 class="subtitle">
        encuéntrame @
      </h2>
      <a href="http://twitter.com/luis_hmr0" target="_blank">                    
             <b-icon
                pack="fa"
                icon="twitter"
                size="is-large"
                class="fa"
                type="is-light">
            </b-icon></a>
            <a href="http://github.com/luishmr0" target="_blank">                    
             <b-icon
                pack="fa"
                icon="github"
                size="is-large"
                class="fa"
                type="is-light">
            </b-icon></a>
            <a href="https://www.facebook.com/luis.hmro" target="_blank">                    
             <b-icon
                pack="fa"
                icon="facebook"
                size="is-large"
                class="fa"
                type="is-light">
            </b-icon></a>
            <a href="http://steamcommunity.com/id/luishmr0/" target="_blank">                    
             <b-icon
                pack="fa"
                icon="steam"
                size="is-large"
                class="fa"
                type="is-light">
            </b-icon></a>
    </div>
  </div>
</section>
</template>

<script>
export default {
  created(){
    window.document.title = "luishmr0 - home"
  }
}
</script>

<style scoped>
  .hero {
    background-image:url(https://i.imgur.com/5jT9BIS.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;  
  }
  .page-title{
    font-family: "Open Sans",sans-serif;
    margin: 10px 0;
    font-size: 4rem;
    letter-spacing: -2px;
    font-weight: 700;    
}
  .page-title:hover, .subtitle:hover{
    transition: 1.2s;
    color: #c62525;
  }
  .fa:hover {
    transition: 0.7s;
    transform: scale(1.4);
    color: #c62525;
}
</style>