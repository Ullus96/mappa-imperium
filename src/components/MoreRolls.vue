<template>
	<div
		class="action__btns-sub"
		:class="[$store.state.isMoreRollsVisible ? '' : 'hide']"
	>
		<the-button>1d6</the-button>
		<the-button>2d6</the-button>
		<the-button>3d6</the-button>
		<the-button>1d100</the-button>
		<the-button>Landmass</the-button>
		<the-button>8 biomes</the-button>
		<the-button>Race</the-button>
		<the-button>Generate Faction</the-button>
		<the-button>Neighbour</the-button>
		<the-button>Neighbour Development</the-button>
		<the-button>Settlement</the-button>
		<the-button>Hero</the-button>
		<the-button>Empire Specialization</the-button>
		<the-button>Era IV</the-button>
		<the-button>Era V</the-button>
		<the-button>Era VI</the-button>
		<the-button>Omen</the-button>
	</div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
export default {
	components: { TheButton },
};
</script>

<style></style>
