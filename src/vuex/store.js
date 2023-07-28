import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isModalVisible: false,
			isMoreRollsVisible: false,
			counters: {
				turnCurrent: 1,
				turnsTotal: 6,
				playerCurrent: 1,
				currentStage: 0,
			},
			gameSettings: {
				playersTotal: 4,
				era4: 6,
				era5: 6,
				era6: 5,
			},
		};
	},
	mutations: {
		changeMoreRollsVisibility(state) {
			state.isMoreRollsVisible = !state.isMoreRollsVisible;
		},
		toggleModal(state) {
			state.isModalVisible = !state.isModalVisible;
		},
		setTurnsTotal(state) {
			console.log(state);
		},
	},
});
