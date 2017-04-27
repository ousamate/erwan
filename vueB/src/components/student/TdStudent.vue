<template lang="html">
	<tr>
		<td>{{student.name}}</td>
		<td>{{student.age}}</td>
		<td>{{student.gender}}</td>
		<td>
			<input type='button' value='修改' @click='showById(student._id)'/>
			<input type='button' value='删除' @click='delById(student._id)' :show='show'/>
		</td>
	</tr>
</template>
<script>
import {ajax} from "@/js/tools";
export default{
		props:["student","setStudent","show"],
		methods:{
		showById:function(id){
			ajax({
				type:"get",
				url:"/students/find",
				data:{
					_id:id
				},
				success:function(data){
					this.setStudent(data);
				}.bind(this)
			});
		},
		delById:function(id){
			ajax({
				type:"get",
				url:"/students/del",
				data:{
					_id:id
				},
				success:function(data){
					this.setStudent(data),
					this.show()
				}.bind(this)
			});
		}
	}
}
</script>