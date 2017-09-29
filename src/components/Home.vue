<template>
    <section class="hero is-black is-fullheight">
  <div class="hero-body  ">
    <div class="container">
      <h1 class="title">
        Hola!
      </h1>
      <h2 class="subtitle">
        soy Luis, software engineering, football, bookworm, gamer, movies
      </h2>
      <h2 class="subtitle">
        encuéntrame en
      </h2>
      <a href="http://twitter.com/luis_hmr0" target="_blank">                    
             <b-icon
                pack="fa"
                icon="twitter"
                size="is-large"
                type="is-light">
            </b-icon></a>
            <a href="http://github.com/luishmr0" target="_blank">                    
             <b-icon
                pack="fa"
                icon="github"
                size="is-large"
                type="is-light">
            </b-icon></a>
            <a href="https://www.facebook.com/luis.hmro" target="_blank">                    
             <b-icon
                pack="fa"
                icon="facebook"
                size="is-large"
                type="is-light">
            </b-icon></a>
            <a href="http://steamcommunity.com/id/luishmr0/" target="_blank">                    
             <b-icon
                pack="fa"
                icon="steam"
                size="is-large"
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
    background-image:url(https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/rogue-one-a-star-wars-story-international-trailer-2-darth-vader.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;    
  }
</style>