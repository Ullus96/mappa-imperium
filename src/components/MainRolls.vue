<template>
	<div class="action__btns-main">
		<the-button @click="clickedCounter('currentStage', 'minus')"
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
		<the-button :type="'highlight'" @click="roll" :disabled="isButtonDisabled"
			>Roll a Dice</the-button
		>
		<the-button @click="clickedCounter('currentStage', 'plus')"
			>Next Turn <i class="fa-solid fa-arrow-right"></i
		></the-button>
	</div>
	isButtonDisabled = {{ isButtonDisabled }}
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import { useStore } from 'vuex';
import { ref, computed, watch } from 'vue';
export default {
	components: { TheButton },
	setup() {
		const store = useStore();
		const currentStage = ref(store.state.counters.currentStage);
		const disabledStages = [0, 3, 14, 16, 18, 19];
		console.log(+currentStage.value);
		const isButtonDisabled = computed(() => {
			return disabledStages.includes(+currentStage.value);
		});

		// Следим за изменениями значения currentStage
		watch(
			() => store.state.counters.currentStage,
			(newValue) => {
				currentStage.value = newValue;
			}
		);
		console.log(isButtonDisabled.value);

		function clickedCounter(name, operation) {
			console.log(name + operation);

			store.commit('toggleTransition');

			setTimeout(() => {
				store.commit('modifyCounter', { name, operation });
			}, 1500);

			setTimeout(() => {
				store.commit('toggleTransition');
			}, 3000);
		}

		return {
			clickedCounter,
			isButtonDisabled,
		};
	},
};
</script>

<style></style>
