<template lang="html">
	<div>
		<h1>学生管理</h1>
		<AddStudent :student='student' :show='show' ></AddStudent>
		<ChangeStudent :student='student' :show='show' :stu='stu'></ChangeStudent>
		<SearchStudent :Search='Search'></SearchStudent>
		<TabelStudent :students='data.rows' :show='show' :setStudent='setStudent'></TabelStudent>
	</div>
</template>

<script>
import AddStudent from "./AddStudent";
import ChangeStudent from "./ChangeStudent";
import SearchStudent from "./SearchStudent";
import TabelStudent from "./TabelStudent";
import {ajax} from "@/js/tools";
export default{
	data:function(){
		return{
			data:{},
			student:{},
			stu:{}
		}
	},
	created:function(){
		this.show();
	},
	methods:{
		show:function(page){
			ajax({
				type:"get",
				url:"/students/find",
				data:{
					page:page,
					rows:50
				},
				success:function(data){
					this.data = data;
					console.log(data);
				}.bind(this)
			});
		},
		setStudent:function(student){
			this.stu=student;
			console.log(this.stu);
		},
		Search:function(name){
			ajax({
				type:"get",
				url:"/students/find",
				data:name[0],
				success:function(data){
					this.data = data;
					console.log(data);
				}.bind(this)
			});
		}
	
	},
	components:{
		AddStudent:AddStudent,
		ChangeStudent:ChangeStudent,
		SearchStudent:SearchStudent,
		TabelStudent
	},
}
</script>

<style>
</style>
