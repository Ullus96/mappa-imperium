<template>
	<div class="action__btns-main">
		<the-button
			@click="
				clickedCounter('playerCurrent', 'minus');
				turnButtonClicked();
			"
			:disabled="
				isFirstTurn || $store.state.isInTransition || $store.state.isRolling
			"
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
			:disabled="
				isButtonDisabled ||
				$store.state.isInTransition ||
				$store.state.isRolling
			"
			>Roll a Dice</the-button
		>
		<the-button
			@click="
				clickedCounter('playerCurrent', 'plus');
				turnButtonClicked();
			"
			>Next Turn <i class="fa-solid fa-arrow-right"></i
		></the-button>
	</div>
	<div class="debug__content" v-if="false">
		<p>isFirstTurn = {{ isFirstTurn }}</p>
		<p>
			store.state.counters.currentStage =
			{{ $store.state.counters.currentStage }}
		</p>
		<p>
			store.state.counters.playerCurrent =
			{{ $store.state.counters.playerCurrent }}
		</p>
		<p>
			store.state.counters.turnCurrent =
			{{ $store.state.counters.turnCurrent }}
		</p>
		<p>gameSettings:</p>
		<p>
			store.state.gameSettings.playersTotal =
			{{ $store.state.gameSettings.playersTotal }}
		</p>
		<p>
			store.state.gameSettings.era4 =
			{{ $store.state.gameSettings.era4 }}
		</p>
		<p>
			store.state.gameSettings.era5 =
			{{ $store.state.gameSettings.era5 }}
		</p>
		<p>
			store.state.gameSettings.era6 =
			{{ $store.state.gameSettings.era6 }}
		</p>
	</div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import { useStore } from 'vuex';
import { ref, computed, watch, onMounted } from 'vue';
export default {
	emits: ['roll', 'generate', 'turnButtonClicked'],
	components: { TheButton },
	setup(props, context) {
		const store = useStore();
		const currentStage = ref(store.state.counters.currentStage);
		const disabledStages = [0, 3, 14, 16, 18, 19];

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

			localStorage.setItem('turnCurrent', store.state.counters.turnCurrent);

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
				store.commit('toggleTransition');

				setTimeout(() => {
					store.commit('modifyCounter', {
						name: 'currentStage',
						operation: 'minus',
					});
				}, 1500);

				setTimeout(() => {
					store.state.counters.turnCurrent = store.state.counters.turnsTotal;
					localStorage.setItem('turnCurrent', store.state.counters.turnCurrent);
				}, 1501);

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

		// Roll
		// 1d6 - 1, 4, 8, 9
		// 2d6 - 2, 6, 17
		// 3d6 - 10, 11, 12, 13, 15
		// Generators - 5, 7
		// Sub-arrays - 14
		function getDicesAmount(stage) {
			if ([1, 4, 8, 9].includes(stage)) {
				return 1;
			}
			if ([2, 6, 17].includes(stage)) {
				return 2;
			}
			if ([10, 11, 12, 13, 15].includes(stage)) {
				return 3;
			}

			return 1;
		}
		function roll() {
			if (+store.state.counters.currentStage === 5) {
				context.emit('generate', { name: 'deity', clearRolls: true });
			} else if (+store.state.counters.currentStage === 7) {
				context.emit('generate', { name: 'faction', clearRolls: true });
			} else {
				context.emit('roll', {
					stage: +store.state.counters.currentStage,
					amount: getDicesAmount(+store.state.counters.currentStage),
					clearRolls: true,
				});
			}
		}

		function turnButtonClicked() {
			context.emit('turnButtonClicked');
		}
		return {
			clickedCounter,
			isButtonDisabled,
			isFirstTurn,
			roll,
			turnButtonClicked,
		};
	},
};
</script>

<style></style>
