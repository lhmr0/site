<template>
   <section class="hero is-black is-fullheight">
  <div class="hero-body  ">
    <div class="container">
      <h1 class="title">
        Acerca de mí
      </h1>
      <h2 class="subtitle">
        Ing. de software, fan del fútbol, del cine, la historia, la política y sobre todo la tecnología, android fanboy, he usado android desde 1.6.
        <br>Puedes ver mi lista de películas favoritas <a href="http://www.imdb.com/list/ls071924674/" target="_blank"><b-icon
                pack="fa"
                icon="film"
                size="is-large"
                type="is-light">
            </b-icon> </a>  
       <br>Juego HoTS, CS:GO
       <br>Maquetación web: HTML5, CSS.
       <br>Programación web: JSP, JS (Vuejs, Angular).
       <br>Programación móvil: Android (Java nativo).
       <br>Lenguajes: Java (Avanzado) uso de Spring, C# (Intermedio), Python (Intermedio), PHP (Intermedio), JS (Intermedio), Go (Intermedio).
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
import axios from 'axios'

export default {
 created(){
    window.document.title = "luishmr0 - about"
  },

    components: {
           
        },
    data () {
          return {                  
                name:'',
                email:'',
                comments:'',
                por:'80%',           
          }
        },
    methods: { // all the actions our app can do
         submitForm: function () {     
            axios.post('http://lhmr0.000webhostapp.com/sendmail.php', {
              name: this.name, email: this.email, comments: this.comments
            }).then(function () {
                alert('email enviado!');
            }, function () {
                alert('e-mail no enviado');
            });
  
    },
    }
    
         
}



</script>

<style scoped>
 .hero {
    background-image:url(https://i.imgur.com/vcEBsws.jpg);
    background-repeat:no-repeat;
    background-attachment:scroll;
    background-position:center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;    
  }
</style>
