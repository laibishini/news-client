<template>
  <div id="app">
  <loading v-show="loading"></loading>
   
  <NavView v-show='headShow'></NavView>
 <transition name="slide-down">
   
<keep-alive>
    <router-view></router-view>

   
 </keep-alive>
 

 </transition>
  <FooterView></FooterView>
  



  </div>
</template>

<script>
/*引用导航*/
import {mapGetters} from 'vuex'
import  NavView from './components/Nav.vue'
import Home from './components/Home.vue'
import FooterView from './components/Footer.vue'


export default{
 computed:mapGetters([
    'headShow',
    'loading'
     
    ]),
  watch:{

    $route(to){
        var path=to.path.substring(1);
        this.headerChange(path);
       
       
      }
   
    },

  

  methods:{
      headerChange(path){
        if(path=='user-info'){
       
          this.$store.dispatch('hideheader')
        }else {
          this.$store.dispatch('showheader')
        }
      }
    },
  components:{
     NavView,
    
     FooterView
  }
  
}
</script>

<style scoped>
  /* 引入CSS */
  @import './assets/css/index.css';
  .slide-down-enter-active,
  .slide-down-leave-active{
    transition: .4s all ease;
    opacity : 0.5;
    transform:translate3d(0,10em,0);
  }
  .slide-down-enter,
  .slide-down-leave{
    opacity: 1;
    transform:translate3d(0,6em,0);
  }


</style>
