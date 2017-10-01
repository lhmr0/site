<template>
    <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
             <router-link to="/" class="navbar-item" tag="a">
                    <img src="https://hmr0.me/darth.png" alt="hmr0">
                    <strong>  luishmr0! </strong>
             </router-link>            
          </a>
        </div>
       <button class="button navbar-burger is-black" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
        <div id="navMenu" class="navbar-menu is-black">
                <div @click="reload" class="navbar-end">
                    <router-link class="navbar-item " to="/" exact>Home</router-link>
                    <router-link class="navbar-item" to="/about" >About</router-link>
                    <a class="navbar-item" href="http://b.hmr0.me" target="_blank">
                    Blog
                    </a>
                    <a class="navbar-item" href="http://github.com/luishmr0" target="_blank">
                    Proyectos
                    </a>

                </div>
            </div>
      </div>
    </header>
  </div>


</template>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {
                // Get the target from the "data-target" attribute

                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');


            });
        });
    }

});




export default {
    methods: {
        reload() {
            var $toggle = $(".navbar-menu")
            var $menu = $(".navbar-burger")

            $toggle.toggleClass('is-active');
            $menu.toggleClass('is-active');
        }

    }
}

</script>

