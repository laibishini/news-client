


export default [
	{path:'/home',component:Home},
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	{path:'/user-info',component:UserInfo},
	{path:'*',redirect:'/home'},
	{path:'/acticle/:id',component:actile},
	{path:'/acticle/user-info',component:UserInfo}

	
]

 import Home from './components/Home.vue'
 import Follow from './components/Follow.vue'
 import Column from './components/Column.vue'
 import actile from './components/Aticle.vue'

 import UserInfo from './components/UserInfo.vue'

