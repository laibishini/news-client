



import getters from './getters'


const state = {
	header:true,
	loading:false
};

const mutations={
	showheader(state){
		
		
		state.header = true
	},
	hideheader(state){
		state.header = false
	},
	hideLoading(state){
		state.loading = false
	},
	showLoading(state){
		state.loading = true
	}
}





export default {
	state,
	mutations,
	getters
}

