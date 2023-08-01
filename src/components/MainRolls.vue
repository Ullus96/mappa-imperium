<template>
	<div class="action__btns-main">
		<the-button
			@click="clickedCounter('playerCurrent', 'minus')"
			:disabled="isFirstTurn || $store.state.isInTransition"
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
		<the-button
			:type="'highlight'"
			@click="roll"
			:disabled="isButtonDisabled || $store.state.isInTransition"
			>Roll a Dice</the-button
		>
		<the-button @click="clickedCounter('playerCurrent', 'plus')"
			>Next Turn <i class="fa-solid fa-arrow-right"></i
		></the-button>
	</div>
	isFirstTurn = {{ isFirstTurn }}<br />
	store.state.counters.currentStage = {{ $store.state.counters.currentStage
	}}<br />
	store.state.counters.playerCurrent = {{ $store.state.counters.playerCurrent
	}}<br />
	store.state.counters.turnCurrent =
	{{ $store.state.counters.turnCurrent }}
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import { useStore } from 'vuex';
import { ref, computed, watch, onMounted } from 'vue';
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

		function clickedCounter(name, operation) {
			console.log(name + operation);

			store.commit('modifyCounter', { name, operation });

			if (store.state.counters.turnCurrent > store.state.counters.turnsTotal) {
				store.state.counters.turnCurrent = 1;
				store.commit('toggleTransition');

				setTimeout(() => {
					store.commit('modifyCounter', {
						name: 'currentStage',
						operation: 'plus',
					});
				}, 1500);

				setTimeout(() => {
					store.commit('toggleTransition');
				}, 3000);
			}

			if (store.state.counters.turnCurrent === 0) {
				store.state.counters.turnCurrent = store.state.counters.turnsTotal;
				store.commit('toggleTransition');

				setTimeout(() => {
					store.commit('modifyCounter', {
						name: 'currentStage',
						operation: 'minus',
					});
				}, 1500);

				setTimeout(() => {
					store.commit('toggleTransition');
				}, 3000);
			}
		}

		// Check if it's the first turn of first stage,
		// to prevent users of switching to 0 stage
		const isFirstTurn = ref('');

		// Here on switching counters
		watch(
			[
				() => store.state.counters.turnCurrent,
				() => store.state.counters.playerCurrent,
				() => store.state.counters.currentStage,
			],

			([turnCurrent, playerCurrent, currentStage]) => {
				if (turnCurrent == 1 && playerCurrent == 1 && currentStage == 1) {
					isFirstTurn.value = true;
				} else {
					isFirstTurn.value = false;
				}
			}
		);

		// And here after loading the page
		onMounted(() => {
			const { turnCurrent, playerCurrent, currentStage } = store.state.counters;
			if (turnCurrent == 1 && playerCurrent == 1 && currentStage == 1) {
				isFirstTurn.value = true;
			} else {
				isFirstTurn.value = false;
			}
		});

		return {
			clickedCounter,
			isButtonDisabled,
			isFirstTurn,
		};
	},
};
</script>

<style></style>
