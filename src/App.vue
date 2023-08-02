<template>
	<div class="app-container">
		<nav-block></nav-block>
		<div class="main-content">
			<router-view></router-view>
		</div>
		<footer-block></footer-block>
	</div>
</template>

<script>
import NavBlock from './components/NavBlock.vue';
import FooterBlock from './components/FooterBlock.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
	components: { NavBlock, FooterBlock },
	setup() {
		const store = useStore();
		onMounted(() => {
			localStorage.getItem('currentStage')
				? (store.state.counters.currentStage =
						localStorage.getItem('currentStage'))
				: (store.state.counters.currentStage = 0);

			localStorage.getItem('playerCurrent')
				? (store.state.counters.playerCurrent =
						localStorage.getItem('playerCurrent'))
				: (store.state.counters.playerCurrent = 1);

			localStorage.getItem('turnCurrent')
				? (store.state.counters.turnCurrent =
						localStorage.getItem('turnCurrent'))
				: (store.state.counters.turnCurrent = 1);

			localStorage.getItem('turnsTotal')
				? (store.state.counters.turnsTotal = localStorage.getItem('turnsTotal'))
				: (store.state.counters.turnsTotal = 1);

			// gameSettings
			localStorage.getItem('playersTotal')
				? (store.state.gameSettings.playersTotal =
						localStorage.getItem('playersTotal'))
				: (store.state.gameSettings.playersTotal = 2);

			localStorage.getItem('era4')
				? (store.state.gameSettings.era4 = localStorage.getItem('era4'))
				: (store.state.gameSettings.era4 = 6);

			localStorage.getItem('era5')
				? (store.state.gameSettings.era5 = localStorage.getItem('era5'))
				: (store.state.gameSettings.era5 = 6);

			localStorage.getItem('era6')
				? (store.state.gameSettings.era6 = localStorage.getItem('era6'))
				: (store.state.gameSettings.era6 = 5);
		});
	},
};
</script>
