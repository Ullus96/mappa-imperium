<template>
	<button
		class="action__btn"
		:class="[
			type === 'animated' ? 'animated' : '',
			type === 'highlight' ? 'highlight' : '',
		]"
		:disabled="$store.state.isInTransition || $store.state.isRolling"
	>
		<span><slot></slot></span>
	</button>
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
