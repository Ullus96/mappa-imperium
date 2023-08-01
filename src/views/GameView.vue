<template>
	<modal-window></modal-window>

	<div class="era__content container" v-if="isPageLoaded">
		<h1 class="era__title">Welcome to Mappa Imperium</h1>
		<h1 class="era__subtitle">
			$store.state.counters.currentStage =
			{{ $store.state.counters.currentStage }} <br />isStageExists.value =
			{{ isStageExists }}
		</h1>
		<div class="era__choice">
			<the-button :disabled="!isStageExists" @click="continueGame"
				>Continue</the-button
			>
			<the-button @click="startNewGame">Start a New Game</the-button>
		</div>
	</div>

	<div class="era__content container" v-else>
		<era-description></era-description>

		<turn-counter v-if="$store.state.counters.currentStage > 0"></turn-counter>

		<div class="action__btns">
			<template v-if="$store.state.counters.currentStage > 0">
				<main-rolls></main-rolls>
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

	<div class="result__outer-container" v-if="true">
		<the-result></the-result>
		<the-result></the-result>
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
import results from '@/js/results_en';
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
	components: {
		EraDescription,
		TurnCounter,
		MoreRolls,
		MainRolls,
		TheButton,
		TheResult,
		ModalWindow,
	},
	setup() {
		const store = useStore();
		const result = results;
		let currentStage = store.state.counters.currentStage;
		console.log(result[currentStage].info);

		function roll() {
			if (store.state.currentStage === 7) {
				console.log(store.state.currentStage);
			}
			const rollResult = d6();
			console.log(result[0][rollResult]);
		}
		function d6() {
			return Math.floor(Math.random() * 6 + 1);
		}

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
		console.log(isStageExists.value);

		if (store.state.counters.currentStage > 0) {
			isStageExists.value = true;
		}

		let isPageLoaded = ref(true);

		function startNewGame() {
			store.commit('modifyCounter', { name: 'currentStage', value: 0 });
			isPageLoaded.value = false;
		}

		function continueGame() {
			if (isStageExists.value) {
				isPageLoaded.value = false;
			}
		}

		return {
			d6,
			roll,
			setGameDuration,
			currentStage,
			result,
			isStageExists,
			isPageLoaded,
			startNewGame,
			continueGame,
		};
	},
};
</script>

<style></style>
