<template>
	<div :class="[$store.state.isInTransition ? 'transition' : '']">
		<h1
			class="era__title"
			v-html="result[$store.state.counters.currentStage].info.title"
		></h1>
		<h2
			class="era__subtitle"
			v-html="result[$store.state.counters.currentStage].info.subtitle"
		></h2>
		<div class="era__description-wrapper">
			<div
				class="era__description"
				v-html="result[$store.state.counters.currentStage].info.desc"
			></div>
			<div class="era__buttons">
				<component
					v-for="(item, index) in result[$store.state.counters.currentStage]
						.info.extraBtns"
					:key="index"
					:is="item.component"
					>{{ item.text }}</component
				>
			</div>
		</div>
	</div>
</template>

<script>
import TheButton from './TheButton.vue';
import results from '@/js/results_en';
export default {
	components: { TheButton },
	setup() {
		const result = results;
		return { result };
	},
};
</script>

<style></style>
