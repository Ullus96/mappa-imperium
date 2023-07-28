<template>
	<nav-block></nav-block>
	<router-view></router-view>
	<footer-block></footer-block>
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
