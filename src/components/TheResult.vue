<template>
	<!-- Just regular result on any roll -->
	<div class="result__content container" v-if="data.stage">
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

	<!-- Generated Deity -->
	<div class="result__content container" v-if="data.gender">
		<div class="result__img">
			<img
				:src="
					require('../assets/results/4/' +
						Math.floor(Math.random() * 2 + 2) +
						'.jpg')
				"
				alt="#"
			/>
		</div>
		<div class="result__info">
			<div class="result__title result__title--deity">
				Deity of {{ data.title }}
			</div>
			<p class="result__subtitle" v-html="data.subtitle"></p>
			<div class="result__description">
				<p>
					Legends speak of a Deity whose name consists of the following sounds:
					<b>{{ data.nameChunks }}</b
					>.
				</p>
				<p>This powerful deity rules over the domain of {{ data.title }}.</p>
				<p>
					The deity's gender is:
					<b><span v-html="data.gender.icon"></span> {{ data.gender.name }}</b
					>.
				</p>
				<p>
					{{ data.gender.pronoun }} sacred site is <b>{{ data.sacredSite }}</b
					>.
				</p>
			</div>
		</div>
	</div>

	<!-- Generated Faction -->
	<div class="result__content container" v-if="data.colorPrimary">
		<div class="result__img result__faction-flag" @click="flagClickHandler">
			<div class="result__faction-flag--texture"></div>
			<div
				class="result__color-primary"
				:style="{ 'background-color': data.colorPrimary.hex }"
			></div>
			<div
				class="result__color-secondary"
				:style="{
					'background-color': data.colorSecondary.hex,
					left: colorSecondaryPosition.left,
					right: colorSecondaryPosition.right,
					top: colorSecondaryPosition.top,
					bottom: colorSecondaryPosition.bottom,
					transform: colorSecondaryPosition.rotate
						? `rotateZ(${colorSecondaryPosition.rotate})`
						: '',
					'border-radius': colorSecondaryPosition.circle ? '100%' : '',
				}"
			></div>
		</div>
		<div class="result__info">
			<div class="result__title result__title--deity">
				The Faction of {{ data.naming }}
			</div>
			<div class="result__description result__description--faction">
				<p>
					The Faction is renowned for its heraldry, symbolized by
					<b>{{ data.symbol }}</b
					>.
				</p>
				<p>
					The main colors on their banners are
					<b>{{ data.colorPrimary.name }}</b> and
					<b>{{ data.colorSecondary.name }}</b
					>.
				</p>
				<p>
					They known by part of the Faction name, which is
					<b>"{{ data.naming }}"</b>.
				</p>
				<p>You can't quite remember their flag (click on it to generate new)</p>
			</div>
		</div>
	</div>
</template>

<script>
import results from '@/js/results_en.js';
import TheButton from './TheButton.vue';
import { ref, onMounted } from 'vue';
export default {
	props: ['data'],
	emits: ['roll', 'generate'],
	components: { TheButton },
	setup(props, context) {
		const result = results;

		function roll(payload) {
			if (payload.name == 'faction' || payload.name == 'deity') {
				context.emit('generate', payload);
			} else {
				context.emit('roll', payload);
			}
		}

		// Generate random position for result__color-secondary
		const getRandomPosition = () => {
			const positions = [
				{ left: '0', right: '0', top: '40%', bottom: '40%' },
				{ left: '40%', right: '40%', top: '0', bottom: '0' },
				{ left: '0%', right: '65%', top: '0', bottom: '65%' },
				{ left: '0', right: '80%', top: '0', bottom: '0' },
				{
					left: '-100%',
					right: '-100%',
					top: '40%',
					bottom: '40%',
					rotate: '45deg',
				},
				{
					left: '-100%',
					right: '-100%',
					top: '40%',
					bottom: '40%',
					rotate: '-45deg',
				},
				{ left: '25%', right: '25%', top: '25%', bottom: '25%', circle: true },
				{
					left: '-50%',
					right: '-50%',
					top: '65%',
					bottom: '-25%',
					circle: true,
				},
			];

			return positions[Math.floor(Math.random() * positions.length)];
		};

		const colorSecondaryPosition = ref(getRandomPosition());

		onMounted(() => {
			colorSecondaryPosition.value = getRandomPosition();
		});

		function flagClickHandler() {
			colorSecondaryPosition.value = getRandomPosition();
		}

		return { result, roll, colorSecondaryPosition, flagClickHandler };
	},
};
</script>

<style></style>
