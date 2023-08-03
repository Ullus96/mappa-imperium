<template>
	<div class="result__content container">
		<div class="result__img">
			<img
				:src="
					require('../assets/results/' +
						result[data.stage][data.finalAmount].img)
				"
				alt="#"
			/>
		</div>
		<div class="result__info">
			<div class="result__dices">
				<div
					class="result__dice"
					v-for="(dice, index) in data.rolls"
					:key="index"
				>
					<img :src="require(`@/assets/dice-${dice}.svg`)" alt="" />
				</div>
			</div>
			<p class="result__dice-total">Result: {{ data.finalAmount }}</p>
			<p
				class="result__title"
				v-html="result[data.stage][data.finalAmount].title"
			></p>
			<p
				class="result__subtitle"
				v-html="result[data.stage][data.finalAmount].subtitle"
			></p>
			<div
				class="result__description"
				v-html="result[data.stage][data.finalAmount].desc"
			></div>
			<div class="result__extra-btns">
				<component
					v-for="(item, index) in result[data.stage][data.finalAmount]
						.extraBtns"
					:key="index"
					:is="item.component"
					@click="roll(item.data)"
					>{{ item.text }}</component
				>
			</div>
		</div>
	</div>
</template>

<script>
import results from '@/js/results_en.js';
import TheButton from './TheButton.vue';
export default {
	props: ['data'],
	emits: ['roll'],
	components: { TheButton },
	setup(props, context) {
		const result = results;

		function roll(payload) {
			context.emit('roll', payload);
		}

		return { result, roll };
	},
};
</script>

<style></style>
