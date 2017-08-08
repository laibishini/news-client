<template>
	
   
   <div class="content">
  <BannerView></BannerView>
    <div class="newsList">
      <ul>
            <li v-for="(item ,index) in arrlist">
            <!--   <a href="conText.html">
                    <h2>{{index}}{{item.title}}</h2>
                    <p>{{item.detail}}</p>
                </a>  绑定数据要加冒号-->
                  
                <router-link :to="'/acticle/'+ item.id"> 
                      
                    <h2>{{index}}{{item.id}}{{item.title}}</h2>
                    <p>{{item.detail}}</p>
                </a>
              

                </router-link>
            </li>
            
        </ul>
    </div>
</div> 

</template>

<script >

  
import BannerView from './Banner.vue'

export default {

  components:{
    BannerView
  },
  data(){
    return{
      arrlist:[]
    }
  },
      mounted(){
      this.fachData()
     
 },
    methods:{
    fachData(){
      var that = this
      this.$http.get('./src/data/index.data').then(function(result){
         
          that.arrlist = result.data
           console.log(that.arrlist)
      })
    }
  }
}

</script>
<style scoped>
  


</style>