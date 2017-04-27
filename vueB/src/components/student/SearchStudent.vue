<template lang="html">
	<div>
		<h3>搜索</h3>
		<input type='text' v-model= 'name'/>
		<input type='button' value='搜索' @click='seardate' />
	</div>
</template>
<script>
import {ajax} from "@/js/tools";
export default{
	props:['Search'],
	data:function(){
		return{
			name:""
		}
	},
	methods:{
		seardate:function(){
			ajax({
				type:"post",
				url:"/students/find",
				data:{
					name:this.name
				},
				success:function(data){
					this.Search(data)
				}.bind(this)
			});
		}
	}
}
</script>