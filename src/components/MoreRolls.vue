<template>
	<div
		class="action__btns-sub"
		:class="[$store.state.isMoreRollsVisible ? '' : 'hide']"
	>
		<div class="action__btns-sub--row">
			<the-button @click="roll(27, 1)">1d6</the-button>
			<the-button @click="roll(27, 2)">2d6</the-button>
			<the-button @click="roll(27, 3)">3d6</the-button>
			<the-button @click="rollAllBiomes(2, 2)">8 biomes</the-button>
			<the-button @click="generate('deity')">Generate Deity</the-button>
			<the-button @click="generate('faction')">Generate Faction</the-button>
		</div>
		<div class="action__btns-sub--row">
			<the-button @click="roll(1, 1)">Landmass</the-button>
			<the-button @click="roll(2, 2)">Geography</the-button>
			<the-button @click="roll(6, 2)">Race</the-button>
			<the-button @click="roll(8, 1)">Define Neighbor</the-button>
			<the-button @click="roll(21, 1)">Minor Kingdom</the-button>
			<the-button @click="roll(22, 1)">Tribe / Bandits / Pirates</the-button>
			<the-button @click="roll(23, 1)">Hive / Swarm</the-button>
			<the-button @click="roll(24, 1)">Magic User</the-button>
			<the-button @click="roll(25, 1)">Cult / Order / Lair</the-button>
			<the-button @click="roll(26, 1)">Legendary Monster</the-button>
			<the-button @click="roll(9, 1)">Settlement</the-button>
			<the-button @click="roll(11, 3)">Hero</the-button>
			<the-button @click="roll(12, 3)">Empire Specialization</the-button>
			<the-button @click="roll(10, 3)">Era IV: Age of Discovery</the-button>
			<the-button @click="roll(13, 3)">Era V: Age of Empires</the-button>
			<the-button @click="roll(15, 3)">Era VI: Age of Collapse</the-button>
			<the-button @click="roll(17, 2)">Omen</the-button>
			<the-button @click="roll(20, 1)">War</the-button>
		</div>
	</div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import { useStore } from 'vuex';
export default {
	components: { TheButton },
	emits: ['roll', 'generate'],
	setup(props, context) {
		const store = useStore();
		function roll(stage, amount) {
			context.emit('roll', {
				stage,
				amount,
				clearRolls: true,
			});
		}

		function rollAllBiomes(stage, amount) {
			store.commit('toggleRolling');
			context.emit('roll', {
				stage,
				amount,
				clearRolls: true,
			});

			for (let i = 0; i < 7; i++) {
				context.emit('roll', {
					stage,
					amount,
					clearRolls: false,
				});
			}

			setTimeout(() => {
				store.commit('toggleRolling');
			}, 3000);
		}

		function generate(name) {
			context.emit('generate', name);
		}
		return { roll, rollAllBiomes, generate };
	},
};
</script>

<style></style>
