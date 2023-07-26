// const results = {
// 	landmass: {
// 		1: {
// 			title: 'Large Continent',
// 			desc: 'An extremely huge landmass',
// 		},
// 		2: {
// 			title: 'Large Island',
// 			desc: 'A pretty large landmass',
// 		},
// 	},

// 	races: {
// 		1: {
// 			title: 'Elves',
// 			subtitle: 'High Elf, Wood Elf, Drow',
// 			desc: 'Elves is a group of races known for their beauty and grace.',
// 		},
// 		2: {
// 			title: 'Seafolk',
// 			subtitle: 'Merfolk, Triton, Crabfolk',
// 			desc: 'Seafolk is a group of races that lives in the waters and on the shores of oceans and seas.',
// 		},
// 	},
// };

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
