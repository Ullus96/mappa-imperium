<template>
	<h1
		class="era__title"
		v-html="result[$store.state.counters.currentStage].info.title"
	></h1>
	<h2
		class="era__subtitle"
		v-html="result[$store.state.counters.currentStage].info.subtitle"
	></h2>
	<div
		class="era__description"
		v-html="result[$store.state.counters.currentStage].info.desc"
	></div>
</template>

<script>
import results from '@/js/results_en';
export default {
	setup() {
		const result = results;
		return { result };
	},
};
</script>

<style></style>
