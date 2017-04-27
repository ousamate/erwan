<template lang="html">
	<div>
		<table>
			<thead>
				<tr>
					<th>姓名</th>
					<th>年龄</th>
					<th>性别</th>
					<th>功能</th>
				</tr>
			</thead\>
			<tbody>
				<TdStudent v-for='student in students' :student='student' :setStudent='setStudent' :checked='checked' :show='show'></TdStudent>
			</tbody>
		</table>
	</div>
</template>

<script>
	import TdStudent from "./TdStudent";
	export default {
		props:["students","setStudent","checked","show"],
			components:{
				TdStudent
		}
	}
</script>
<style lang="css">
<style>