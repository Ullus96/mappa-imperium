<template>
	<div class="result__content container">
		<div class="result__img">
			<img :src="require('../assets/results/' + result[1][3].img)" alt="#" />
		</div>
		<div class="result__info">
			<div class="result__dices">
				<div class="result__dice">
					<img src="@/assets/dice-3.svg" alt="" />
				</div>
			</div>
			<p class="result__dice-total">Result: 3</p>
			<p class="result__title" v-html="result[1][3].title"></p>
			<p class="result__subtitle" v-html="result[1][3].subtitle"></p>
			<div class="result__description" v-html="result[1][3].desc"></div>
		</div>
	</div>
</template>

<script>
import results from '@/js/results_en.js';
export default {
	setup() {
		const result = results;
		const dices = {
			1: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"/><path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4Zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" clip-rule="evenodd"/></g></svg>',
			2: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><g fill="currentColor"><path d="M17.2 14.943a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM5.055 7.055a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"/><path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4Zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"/></g></svg>',
		};

		return { dices, result };
	},
};
</script>

<style></style>
