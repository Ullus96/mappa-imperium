<template>
	<modal-window></modal-window>

	<div class="era__content container" v-if="isPageLoaded">
		<h1 class="era__title">Welcome to Mappa Imperium</h1>
		<!-- <h1 class="era__subtitle">
			$store.state.counters.currentStage =
			{{ $store.state.counters.currentStage }} <br />isStageExists.value =
			{{ isStageExists }}
		</h1> -->
		<div class="era__choice">
			<the-button :disabled="!isStageExists" @click="continueGame"
				>Continue</the-button
			>
			<the-button @click="startNewGame">Start a New Game</the-button>
		</div>
	</div>

	<div class="era__content container" v-else>
		<era-description></era-description>

		<turn-counter
			v-if="
				$store.state.counters.currentStage > 0 &&
				$store.state.counters.currentStage != 19
			"
		></turn-counter>

		<div class="action__btns" v-if="$store.state.counters.currentStage != 19">
			<template v-if="$store.state.counters.currentStage > 0">
				<main-rolls
					@roll="roll"
					@turnButtonClicked="turnButtonClicked"
				></main-rolls>
				<more-rolls></more-rolls>
			</template>

			<template v-else>
				<div
					class="action__btns-main"
					:class="[$store.state.isInTransition ? 'transition' : '']"
				>
					<the-button @click="setGameDuration(3, 4, 3)">Short</the-button>
					<the-button @click="setGameDuration(6, 6, 5)">Standart</the-button>
					<the-button @click="setGameDuration(8, 8, 6)">Long</the-button>
					<the-button @click="setGameDuration(11, 12, 10)">Epic</the-button>
					<the-button @click="setGameDuration(6, 6, 5)">Custom</the-button>
				</div>
			</template>
		</div>
	</div>

	<div class="result__rolling-action" v-if="$store.state.isRolling">
		<div class="result__dices">
			<dice-random-shifting
				v-for="(dice, index) in 3"
				:key="index"
			></dice-random-shifting>
		</div>
	</div>
	<div class="result__outer-container" v-if="!isPageLoaded">
		<the-result
			v-for="(item, index) in rolledResults"
			:key="`${index}-${Date.now()}`"
			:data="item"
			@roll="roll"
		></the-result>
	</div>
</template>

<script>
import EraDescription from '@/components/EraDescription.vue';
import TurnCounter from '@/components/TurnCounter.vue';
import MoreRolls from '@/components/MoreRolls.vue';
import MainRolls from '@/components/MainRolls.vue';
import TheButton from '@/components/TheButton.vue';
import TheResult from '@/components/TheResult.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import DiceRandomShifting from '@/components/DiceRandomShifting.vue';
import results from '@/js/results_en';
import { useStore } from 'vuex';
import { ref, reactive } from 'vue';
export default {
	components: {
		EraDescription,
		TurnCounter,
		MoreRolls,
		MainRolls,
		TheButton,
		TheResult,
		ModalWindow,
		DiceRandomShifting,
	},
	setup() {
		const store = useStore();
		const result = results;

		function setGameDuration(era4, era5, era6) {
			store.commit('toggleModal');
			const gameSettings = store.state.gameSettings;
			gameSettings.era4 = era4;
			gameSettings.era5 = era5;
			gameSettings.era6 = era6;
			localStorage.setItem('era4', era4);
			localStorage.setItem('era5', era5);
			localStorage.setItem('era6', era6);
		}

		let isStageExists = ref(false);

		if (store.state.counters.currentStage > 0) {
			isStageExists.value = true;
		}

		let isPageLoaded = ref(true);

		function startNewGame() {
			store.state.counters.currentStage = 0;
			store.state.counters.playerCurrent = 1;
			store.state.counters.turnCurrent = 1;
			isPageLoaded.value = false;
		}

		function continueGame() {
			if (isStageExists.value) {
				isPageLoaded.value = false;
			}
		}

		// Rolls and results
		let rolledResults = reactive([]);

		function roll(payload) {
			console.log(rolledResults);
			console.log(payload);
			store.commit('toggleRolling');

			if (payload.clearRolls) {
				rolledResults.splice(0, rolledResults.length);
			}

			let rolls = [];
			for (let i = 0; i < payload.amount; i++) {
				rolls.push(d6());
			}

			let finalAmount = 0;
			rolls.forEach((e) => {
				finalAmount += e;
			});

			let packedResults = {
				stage: payload.stage,
				rolls,
				finalAmount,
			};

			// final results
			console.log(packedResults);

			setTimeout(() => {
				store.commit('toggleRolling');
				rolledResults.push(packedResults);
			}, 3000);
		}

		function d6() {
			// return Math.floor(Math.random() * 6 + 1);
			return 3;
		}

		function turnButtonClicked() {
			console.log('turnButtonClicked on parent');
			rolledResults.splice(0, rolledResults.length);
		}

		return {
			d6,
			roll,
			setGameDuration,
			result,
			isStageExists,
			isPageLoaded,
			startNewGame,
			continueGame,
			rolledResults,
			turnButtonClicked,
		};
	},
};
</script>

<style></style>
