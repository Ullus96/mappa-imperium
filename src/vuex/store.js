import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isModalVisible: false,
			isMoreRollsVisible: false,
			isInTransition: false,
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
		toggleTransition(state) {
			state.isInTransition = !state.isInTransition;
		},
		modifySetting(state, payload) {
			if (!payload) return false;
		},
		modifyCounter(state, payload) {
			if (!payload) return false;
			if (!payload.operation && payload.value) {
				state.counters[payload.name] = payload.value;
				localStorage.setItem(payload.name, state.counters[payload.name]);
			}

			if (payload.operation == 'plus') {
				state.counters[payload.name]++;
				localStorage.setItem(payload.name, state.counters[payload.name]);
			}
			if (payload.operation == 'minus') {
				state.counters[payload.name]--;
				localStorage.setItem(payload.name, state.counters[payload.name]);
			}
		},
		setTurnsTotal(state) {
			console.log(state);
		},
	},
});
