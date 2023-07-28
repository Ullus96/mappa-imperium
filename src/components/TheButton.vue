<template>
	<div
		class="action__btn"
		:class="[type === 'animated' ? 'animated' : 'highlight']"
	>
		<span><slot></slot></span>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'animated',
		},
	},
};
</script>

<style></style>
