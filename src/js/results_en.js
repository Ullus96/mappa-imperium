const results = [
	// Initialization
	{
		info: {
			title: 'Era 0: Initialization',
			subtitle: 'Setting up',
			desc: `<p>
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
      <a href="#" class="link"
        >here <i class="fa-solid fa-arrow-up rotate-45"></i></a
      >.
      </p>
      <p>
      Now, you need to choose your game length. The number of turns per era
      can be adjusted for longer or shorter games. Be aware, the more players
      & empires you have will greatly increase the playtime
      </p>
      <div>
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
			</div>`,
		},
	},
	// landmass, stage 1
	{
		info: {
			title: 'Era I: Age of Creation',
			subtitle: 'Create the lands',
			desc: `<p>Roll, and then take turns drawing islands into your Home Region. If two or more players wish to combine islands to create a large continent that spreads over multiple home regions they may do so.</p>
      <p>Alternate Pangea Rule: All players subtract 1 island from their results and place 1 massive continent spanning the center of the map across every player's home region.</p>`,
		},
		1: {
			title: 'Large Continent',
			desc: '<p>An enormous landmass covering vast regions.</p>',
		},
		2: {
			title: '1 Large Island + 1 Small Island',
			desc: '<p>A substantial island paired with a smaller island.</p>',
		},
		3: {
			title: '1&nbsp;Large&nbsp;Island + 2&nbsp;Small&nbsp;Islands',
			desc: '<p>A grand island accompanied by two picturesque smaller islands.</p>',
		},
		4: {
			title: '2&nbsp;Medium&nbsp;Islands',
			desc: '<p>Two mid-sized islands</p>',
		},
		5: {
			title: '3&nbsp;Medium&nbsp;Islands',
			desc: '<p>Three mid-sized islands forming a delightful trio.</p>',
		},
		6: {
			title: 'Archipelago with at least 4&nbsp;Islands',
			desc: '<p>An enchanting cluster of islands, adorned with four or more captivating isles.</p>',
		},
	},

	// races
	{
		1: {
			title: 'Elves',
			subtitle: 'High Elf, Wood Elf, Drow',
			desc: 'Elves is a group of races known for their beauty and grace.',
		},
		2: {
			title: 'Seafolk',
			subtitle: 'Merfolk, Triton, Crabfolk',
			desc: 'Seafolk is a group of races that lives in the waters and on the shores of oceans and seas.',
		},
	},
];

export default results;

/*
<template>
  <div>
    <button @click="handleRollButtonClick">Roll</button>
    <p>{{ resultTitle }}</p>
    <p>{{ resultDesc }}</p>
    <button @click="handleRollHeroButtonClick">Roll a Hero</button>
    <p>{{ heroTitle }}</p>
    <p>{{ heroSubtitle }}</p>
    <p>{{ heroDesc }}</p>
  </div>
</template>

export default {
  data() {
    return {
      counter: 1, // Значение 1 соответствует категории "landmass", 2 - "races", и т.д.
      heroCounter: 1, // Значение 1 соответствует категории 'male', 2 - 'female'
      results: {
        landmass: {
          1: {
            title: 'Large Continent',
            desc: 'An extremely huge landmass',
          },
          2: {
            title: 'Large Island',
            desc: 'A pretty large landmass',
          },
        },
        races: {
          1: {
            title: 'Elves',
            subtitle: 'High Elf, Wood Elf, Drow',
            desc: 'Elves is a group of races known for their beauty and grace.',
          },
          2: {
            title: 'Seafolk',
            subtitle: 'Merfolk, Triton, Crabfolk',
            desc: 'Seafolk is a group of races that lives in the waters and on the shores of oceans and seas.',
          },
        },
        hero: {
          1: {
            title: 'male',
            subtitle: 'Male Hero',
            desc: 'A brave male hero.',
          },
          2: {
            title: 'female',
            subtitle: 'Female Hero',
            desc: 'A courageous female hero.',
          },
        },
        // Add more categories here
      },
    };
  },
  computed: {
    randomResult() {
      const category = this.counter === 1 ? 'landmass' : 'races'; // Определяем выбранную категорию на основе значения counter
      const elements = Object.values(this.results[category]); // Получаем все элементы внутри выбранной категории
      const randomElement = elements[Math.floor(Math.random() * elements.length)]; // Выбираем случайный элемент из выбранной категории

      return randomElement;
    },
    randomHero() {
      const category = this.heroCounter === 1 ? 'male' : 'female'; // Определяем выбранную категорию героев на основе значения heroCounter
      const elements = Object.values(this.results.hero); // Получаем все элементы внутри выбранной категории героев
      const randomElement = elements[Math.floor(Math.random() * elements.length)]; // Выбираем случайного героя из выбранной категории

      return randomElement;
    },
    resultTitle() {
      return this.randomResult.title;
    },
    resultDesc() {
      return this.randomResult.desc;
    },
    heroTitle() {
      return this.randomHero.title;
    },
    heroSubtitle() {
      return this.randomHero.subtitle;
    },
    heroDesc() {
      return this.randomHero.desc;
    },
  },
  methods: {
    handleRollButtonClick() {
      this.counter = Math.floor(Math.random() * 2) + 1; // Пример изменения значения counter (может быть иным в вашем коде)
    },
    handleRollHeroButtonClick() {
      this.heroCounter = Math.floor(Math.random() * 2) + 1; // Пример изменения значения heroCounter (может быть иным в вашем коде)
    },
  },
};

*/
