<template>
	<!-- <div class="era__content container">
			<h1 class="era__title">Era 0: Initialization</h1>
			<h2 class="era__subtitle">Setting up</h2>
			<div class="era__description">
				<p>
					Divide your sheet of paper equally by the number of players. You can
					draw a line or create a fold to help separate the regions. Each player
					will take control of one of these regions (They will be referred to as
					“Home Regions” going forth)
				</p>
				<p>
					Throughout the course of the game you will be drawing features of your
					world and empire onto the paper; from forests and mountains, to cities
					and monsters.
				</p>
				<p>
					It is recommended to have a Rulebook nearby, you can download it
					<a href="#">HERE <i class="fa-solid fa-arrow-up rotate-45"></i></a>.
				</p>
				<p>
					Now, you need to choose your game length. The number of turns per era
					can be adjusted for longer or shorter games. Be aware, the more
					players & empires you have will greatly increase the playtime
				</p>
			</div>
			<table>
				<caption>
					Number of Dice Rolls per Era
				</caption>
				<tr>
					<th></th>
					<th>Short</th>
					<th>Standart</th>
					<th>Long</th>
					<th>Epic</th>
				</tr>
				<tr>
					<td>Era IV</td>
					<td>3</td>
					<td>6</td>
					<td>8</td>
					<td>11</td>
				</tr>
				<tr>
					<td>Era V</td>
					<td>4</td>
					<td>6</td>
					<td>8</td>
					<td>12</td>
				</tr>
				<tr>
					<td>Era VI</td>
					<td>3</td>
					<td>5</td>
					<td>6</td>
					<td>10</td>
				</tr>
			</table>
			<div class="action__btns">
				<div class="action__btn"><span>Short</span></div>
				<div class="action__btn"><span>Standart</span></div>
				<div class="action__btn"><span>Long</span></div>
				<div class="action__btn"><span>Epic</span></div>
				<div class="action__btn"><span>Custom</span></div>
			</div>
		</div> -->

	<div class="era__content container">
		<h1 class="era__title">Era III: Age of Foundation</h1>
		<h2 class="era__subtitle">Prime Faction</h2>
		<div class="era__description">
			<p>
				Roll to define your Prime Faction. This is the empire you will be
				devoting most of your time to for the majority of the game.
			</p>
			<p>Place a capital somewhere in your Home Region.</p>
		</div>

		<div class="turn__container">
			<div class="turn__item">
				<p class="turn__title">Turn</p>
				<div class="turn__counters">
					<p class="turn__current">1</p>
					<p class="turn__total">1</p>
				</div>
			</div>
			<div class="turn__item">
				<p class="turn__title">Player</p>
				<div class="turn__counters">
					<p class="turn__current">3</p>
					<p class="turn__total">4</p>
				</div>
			</div>
		</div>
		<div class="action__btns">
			<div class="action__btns-main">
				<div class="action__btn animated" title="Left arrow">
					<span><i class="fa-solid fa-arrow-left"></i> Previous Turn</span>
				</div>
				<div class="action__btn animated">
					<span>Show more rolls <i class="fa-solid fa-angle-down"></i></span>
				</div>
				<div class="action__btn highlight" title="Spacebar">
					<span>Roll a Dice</span>
				</div>
				<div class="action__btn animated" title="Right arrow">
					<span>Next Turn <i class="fa-solid fa-arrow-right"></i></span>
				</div>
			</div>

			<more-rolls></more-rolls>
		</div>
	</div>

	<div class="result__content container">
		<div class="result__img">
			<img src="@/assets/results/31/8elves.png" alt="#" />
		</div>
		<div class="result__info">
			<div class="result__dices">
				<div class="result__dice">
					<iconify-icon
						icon="gg:dice-5"
						width="120"
						height="120"
					></iconify-icon>
				</div>
				<div class="result__dice">
					<iconify-icon
						icon="gg:dice-3"
						width="120"
						height="120"
					></iconify-icon>
				</div>
			</div>
			<p class="result__dice-total">Result: 8</p>
			<p class="result__title">Elves</p>
			<p class="result__subtitle">High Elf, Wood Elf, Drow</p>
			<p class="result__description">
				Elves is a group of races known for their beauty and grace. They usually
				live in forests and possess unique abilities such as the ability to
				communicate with animals and use magic to protect nature.
			</p>
		</div>
	</div>

	<div class="result__content container">
		<div class="result__img">
			<img src="@/assets/results/31/8elves.png" alt="#" />
		</div>
		<div class="result__info">
			<div class="result__dices">
				<div class="result__dice">
					<iconify-icon
						icon="gg:dice-5"
						width="120"
						height="120"
					></iconify-icon>
				</div>
				<div class="result__dice">
					<iconify-icon
						icon="gg:dice-3"
						width="120"
						height="120"
					></iconify-icon>
				</div>
			</div>
			<p class="result__dice-total">Result: 8</p>
			<p class="result__title">Elves</p>
			<p class="result__subtitle">High Elf, Wood Elf, Drow</p>
			<p class="result__description">
				Elves is a group of races known for their beauty and grace. They usually
				live in forests and possess unique abilities such as the ability to
				communicate with animals and use magic to protect nature.
			</p>
		</div>
	</div>
</template>

<script>
import MoreRolls from '@/components/MoreRolls.vue';
export default {
	components: { MoreRolls },
};
</script>

<style></style>
