<template lang="html">
	<div>
		<label>性别：</label>
		<input type='radio' value='男' name='sex' :checked="value=='男'" @change = 'updataValue' /><label>男</label>
		<input type='radio' value='女' name='sex' :checked="value=='女'" @change = 'updataValue' /><label>女</label>
	</div>	
</template>

<script>
	export default{
		props:["value"],
			methods:{
				updataValue:function(e){
				this.$emit('input',e.target.value);
			}
		}	
	}
</script>

<style lang="css">
</style>