<template>
  <section class="hero is-black is-fullheight">
  <!-- Hero header: will stick at the top -->
  <HeaderCine></HeaderCine>

  <!-- Hero content: will be in the middle -->

 <div  class="bod">
    <router-view></router-view>
</div>

  <!-- Hero footer: will stick at the bottom -->
  


</section>
  
</template>

<script>
import HeaderCine from './components/HeaderL.vue'
 export default {
   components:{HeaderCine}

 }
 

</script>


