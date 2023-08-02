<template>
	<div class="turn__container">
		<div class="turn__item">
			<p class="turn__title">Turn</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.turnCurrent }}</p>
				<p class="turn__total">{{ $store.state.counters.turnsTotal }}</p>
			</div>
		</div>
		<div class="turn__item">
			<p class="turn__title">Player</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.playerCurrent }}</p>
				<p class="turn__total">{{ $store.state.gameSettings.playersTotal }}</p>
			</div>
		</div>
		<div class="turn__item">
			<p class="turn__title">Debug</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.currentStage }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { watch } from 'vue';
export default {
	setup() {
		const store = useStore();
		watch(
			() => store.state.counters.currentStage,
			() => {
				store.state.counters.turnsTotal = 1;

				// Check if stage is Biomes (2), Age of Discovery (10),
				// Age of Empires (13), Age of Collapse (15)
				if (store.state.counters.currentStage == 2) {
					store.state.counters.turnsTotal = 8;
				}

				if (store.state.counters.currentStage == 10) {
					store.state.counters.turnsTotal = store.state.gameSettings.era4;
				}

				if (store.state.counters.currentStage == 13) {
					store.state.counters.turnsTotal = store.state.gameSettings.era5;
				}

				if (store.state.counters.currentStage == 15) {
					store.state.counters.turnsTotal = store.state.gameSettings.era6;
				}

				localStorage.setItem('turnsTotal', store.state.counters.turnsTotal);
			}
		);
	},
};
</script>

<style></style>
