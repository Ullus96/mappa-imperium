<template>
	<div class="action__btns-main">
		<the-button
			><i class="fa-solid fa-arrow-left"></i> Previous Turn</the-button
		>
		<the-button @click="$store.commit('changeMoreRollsVisibility')"
			>{{ $store.state.isMoreRollsVisible ? 'Hide' : 'Show' }} more rolls
			<i
				class="fa-solid"
				:class="[
					$store.state.isMoreRollsVisible ? 'fa-angle-up' : 'fa-angle-down',
				]"
			></i
		></the-button>
		<the-button :type="'highlight'" @click="roll">Roll a Dice</the-button>
		<the-button>Next Turn <i class="fa-solid fa-arrow-right"></i></the-button>
	</div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
export default {
	components: { TheButton },
};
</script>

<style></style>
