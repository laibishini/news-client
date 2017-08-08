<template>
	<div class="content mt30">

    <div class="newsList">
      <ul>
            <li v-for="(item,index) in arrlist">
              <a href="conText.html">
                    <h2>{{item.title}}</h2>
                    <p>{{item.detail}}</p>
                </a>
            </li>
            
        </ul>
    </div>
</div>
</template>
<script >
  export default {

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
      this.$http.get('./src/data/follow.data').then(function(result){
         
          that.arrlist = result.data
           console.log(that.arrlist)
      })
    }
  }
  }  


</script>
<style>
    .mt30{
        margin-top: 30px;
    }



</style>