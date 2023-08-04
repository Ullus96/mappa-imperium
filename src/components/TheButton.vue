<template>
	<button
		class="action__btn"
		:class="[
			type === 'animated' ? 'animated' : '',
			type === 'highlight' ? 'highlight' : '',
		]"
		:disabled="$store.state.isInTransition || $store.state.isRolling"
		@click="setYCoordinate"
	>
		<span><slot></slot></span>
	</button>
</template>

<script>
import { useStore } from 'vuex';
export default {
	props: {
		type: {
			type: String,
			default: 'animated',
		},
	},
	setup() {
		const store = useStore();
		function setYCoordinate(event) {
			const yCoordinate = event.pageY;
			if (yCoordinate > window.innerHeight) {
				store.commit('setSsRollClickedBelowInnerHeight', true);
			} else {
				store.commit('setSsRollClickedBelowInnerHeight', false);
			}
		}
		return { setYCoordinate };
	},
};
</script>

<style></style>
