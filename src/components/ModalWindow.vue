<template>
	<div
		class="modal__cover"
		@click="$store.commit('toggleModal')"
		v-if="$store.state.isModalVisible"
	>
		<div class="modal" @click.stop="">
			<div class="modal__close" @click="$store.commit('toggleModal')">
				<i class="fa-solid fa-xmark"></i>
			</div>
			<h1 class="modal__title">Finish setting game up</h1>
			<div class="modal__settings">
				<div class="modal__item">
					<p class="modal__setting-name">Era IV</p>
					<div class="modal__counters">
						<p
							class="modal__operation"
							@click="changeGameOption('era4', 'minus')"
						>
							-
						</p>
						<p class="modal__current">{{ $store.state.gameSettings.era4 }}</p>
						<p
							class="modal__operation"
							@click="changeGameOption('era4', 'plus')"
						>
							+
						</p>
					</div>
				</div>
				<div class="modal__item">
					<p class="modal__setting-name">Era V</p>
					<div class="modal__counters">
						<p
							class="modal__operation"
							@click="changeGameOption('era5', 'minus')"
						>
							-
						</p>
						<p class="modal__current">{{ $store.state.gameSettings.era5 }}</p>
						<p
							class="modal__operation"
							@click="changeGameOption('era5', 'plus')"
						>
							+
						</p>
					</div>
				</div>
				<div class="modal__item">
					<p class="modal__setting-name">Era VI</p>
					<div class="modal__counters">
						<p
							class="modal__operation"
							@click="changeGameOption('era6', 'minus')"
						>
							-
						</p>
						<p class="modal__current">{{ $store.state.gameSettings.era6 }}</p>
						<p
							class="modal__operation"
							@click="changeGameOption('era6', 'plus')"
						>
							+
						</p>
					</div>
				</div>
			</div>
			<div class="modal__settings">
				<div class="modal__item">
					<p class="modal__setting-name">Players</p>
					<div class="modal__counters">
						<p
							class="modal__operation"
							@click="changeGameOption('playersTotal', 'minus')"
						>
							-
						</p>
						<p class="modal__current">
							{{ $store.state.gameSettings.playersTotal }}
						</p>
						<p
							class="modal__operation"
							@click="changeGameOption('playersTotal', 'plus')"
						>
							+
						</p>
					</div>
				</div>
			</div>
			<div class="action__btns">
				<div class="action__btns-main">
					<the-button @click="startGame">Start new game</the-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import { useStore } from 'vuex';
export default {
	components: { TheButton },
	setup() {
		const store = useStore();
		function changeGameOption(setting, operation) {
			console.log(`setting: ${setting}; operation: ${operation}`);
			if (operation === 'plus') {
				store.state.gameSettings[setting]++;
				localStorage.setItem(setting, store.state.gameSettings[setting]);
			}
			if (operation === 'minus') {
				if (store.state.gameSettings[setting] > 1) {
					store.state.gameSettings[setting]--;
				}
				localStorage.setItem(setting, store.state.gameSettings[setting]);
			}
		}

		function startGame() {
			store.state.counters.currentStage = 1;
			localStorage.setItem('currentStage', 1);
			store.commit('toggleModal');
		}
		return { changeGameOption, startGame };
	},
};
</script>

<style></style>
