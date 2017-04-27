<template lang="html">
	<div>
		<h3>增加</h3>
		<IuputElement v-model='name'>姓名：</IuputElement>
		<IuputElement v-model='age'>年龄：</IuputElement>
		<SexStudent v-model='gender'></SexStudent>
		<input type='button' value='增加' @click='adddate'/>
	</div>
</template>

<script>
	import IuputElement from "./IuputElement";
	import SexStudent from "./SexStudent";
	import {ajax} from "@/js/tools";
	export default{
		props:["student","show"],
			data:function(){
				return{
					name:"",
					age:"",
					gender:""
				}
			},
			methods:{
				adddate:function(){
					ajax({
						type:"post",
						url:"/students/add",
						data:{
							name:this.name,
							gender:this.gender,
							age:this.age	
						},
						success:function(){
							this.show()
						}.bind(this)
					});
				}
			},
			components:{
				IuputElement:IuputElement,
				SexStudent:SexStudent
			}
	}
</script>

<style lang="css">
<style>
