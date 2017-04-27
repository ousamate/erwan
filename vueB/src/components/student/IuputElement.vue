<template lang="html">
	<div class="font">
		<label><slot></slot></label>
			<input type='text' :value='value' @input='updataValue'/>
		<span></span>
	</div>
</template>

<script>
	export default{
		props:['value','info'],
		methods:{
			updataValue:function(e){
				this.$emit("input",e.target.value);
			}
		}
	}
	</script>

<style lang="css">
</style>