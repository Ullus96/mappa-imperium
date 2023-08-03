<template>
	<div :class="`result__dice ${animationClass}`">
		<img :src="require(`@/assets/dice-${randomizedNumber}.svg`)" alt="" />
	</div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
	setup() {
		const randomizedNumber = ref(1);
		const animationClass = ref('');

		const startAnimation = () => {
			animationClass.value = 'result__dice-animation';
		};

		const delay = Math.random() * 500;

		onMounted(() => {
			setTimeout(startAnimation, delay);
		});

		const interval = setInterval(() => {
			randomizedNumber.value = Math.floor(Math.random() * 6) + 1;
		}, 250);

		onBeforeUnmount(() => {
			clearInterval(interval);
		});

		return { randomizedNumber, animationClass };
	},
};
</script>

<style></style>
