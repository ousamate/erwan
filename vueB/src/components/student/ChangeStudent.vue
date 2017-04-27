<template lang="html">
	<div>
		<h3>修改</h3>
		<IuputElement v-model='stu.name'>姓名：</IuputElement>
		<IuputElement v-model='stu.age'>年龄：</IuputElement>
		<SexStudent v-model='stu.gender'></SexStudent>
		<input type='button' value='修改' @click='updata' />
	</div>
</template>

<script>
	import IuputElement from "./IuputElement";
	import SexStudent from "./SexStudent";
	import {ajax} from "@/js/tools";
	export default{
	props:['show','stu','checked'],
			methods:{
				updata:function(){
					ajax({
						type:"post",
						url:"/students/update",
						data:{
							_id:this.stu._id,
							name:this.stu.name,
							gender:this.stu.gender,
							age:this.stu.age
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
