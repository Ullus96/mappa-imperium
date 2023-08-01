function img(name) {
	return name + '.jpg';
}

const results = [
	// Initialization 0
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
      <a href="https://nookrium.itch.io/mappa-imperium" target="_blank" class="link"
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
			title: 'Title',
			desc: '<p></p>',
			img: img('1/1'),
		},
		2: {
			title: '1 Large Island + 1 Small Island',
			desc: '<p>A substantial island paired with a smaller island.</p>',
			img: img('1/1'),
		},
		3: {
			title: '1&nbsp;Large&nbsp;Island + 2&nbsp;Small&nbsp;Islands',
			desc: '<p>A grand island accompanied by two picturesque smaller islands.</p>',
			img: img('1/1'),
		},
		4: {
			title: '2&nbsp;Medium&nbsp;Islands',
			desc: '<p>Two mid-sized islands</p>',
			img: img('1/1'),
		},
		5: {
			title: '3&nbsp;Medium&nbsp;Islands',
			desc: '<p>Three mid-sized islands forming a delightful trio.</p>',
			img: img('1/1'),
		},
		6: {
			title: 'Archipelago with at least 4&nbsp;Islands',
			desc: '<p>An enchanting cluster of islands, adorned with four or more captivating isles.</p>',
			img: img('1/1'),
		},
	},
	// Geography (biomes), 2
	{
		info: {
			title: 'Era I: Age of Creation',
			subtitle: 'Geography',
			desc: `
      <p>Each player Rolls 8 times.</p>
			<p>
				You should place these biomes anywhere in your Home Region. They can be
				placed anywhere and on any island, it is up to each player to design
				their own Home Region.
			</p>
			<p>
				Tip: if you don't want to roll each biome separately, you can roll a
				list of 8 biomes with the "8 biomes" button under the More Rolls button.
			</p>`,
		},
		2: {
			title: 'Savanna',
			desc: '<p>The savanna is a vast grassland with scattered trees and shrubs, home to many grazing animals.</p>',
			img: img('2/2'),
		},
		3: {
			title: 'Wetlands',
			desc: '<p>Wetlands are areas of land that are saturated with water.</p>',
			img: img('2/3'),
		},
		4: {
			title: 'Hills',
			desc: '<p>Hills are rolling landscapes covered in grasses and wildflowers.</p>',
			img: img('2/4'),
		},
		5: {
			title: 'Lake',
			desc: '<p>A lake is a large body of water surrounded by land, with some of the deepest and clearest waters in the world.</p>',
			img: img('2/5'),
		},
		6: {
			title: 'River',
			desc: '<p>Rivers are flowing bodies of water that carve through the landscape, shaping the surrounding terrain and providing important sources of irrigation for agriculture.</p>',
			img: img('2/6'),
		},
		7: {
			title: 'Forest',
			desc: '<p>Forests are dense areas of trees and undergrowth, home to a variety of wildlife and important for carbon storage.</p>',
			img: img('2/7'),
		},
		8: {
			title: 'Mountains',
			desc: "<p>Mountains are towering landscapes, an important sources of minerals and other natural resources, and play a crucial role in regulating the earth's climate and weather patterns.</p>",
			img: img('2/8'),
		},
		9: {
			title: 'Desert',
			desc: '<p>Deserts are hot and dry regions with sparse vegetation, home to animals and plants adapted to survive in harsh conditions.</p>',
			img: img('2/9'),
		},
		10: {
			title: 'Jungle',
			desc: '<p>Jungles are dense tropical forests with a high diversity of plant and animal species, often characterized by hot and humid conditions and a variety of sounds.</p>',
			img: img('2/10'),
		},
		11: {
			title: 'Canyon',
			desc: '<p>Canyons are deep, narrow valleys carved by rivers over millions of years, providing unique habitat for plants and animals adapted to steep cliffs and rocky terrain.</p>',
			img: img('2/11'),
		},
		12: {
			title: 'Volcano',
			desc: "<p>Volcanoes are mountains formed by the eruption of molten rock from the earth's crust, shaping the surrounding landscape.</p>",
			img: img('2/12'),
		},
	},
	// Touching up & resources 3
	{
		info: {
			title: 'Era I: Age of Creation',
			subtitle: 'Touching up and placing resources',
			noRoll: true,
			desc: `
      <p>
				Each player may take a moment to touch up and fill any gaps in their
				lands as they see fit. Feel free to add tiny islands, small groves of
				trees, minor rivers & lakes, glaciers, etc.
			</p>
			<p>
				Each player should place 2 different resources or special locations into
				their Home Regions. You can use these to add some fantasy uniqueness to
				your map outside of the typical lumber, stone, clay. These are up to
				each player to decide what to place and where.
			</p>
			<p>
				Use a symbol to represent the resource location. These resources will
				help you decide where events and settlements may take place in your
				world.
			</p>
			<p>
				For example: mana fountains, mithril snails, flying cats, elemental
				crystals, soul shards.
			</p>`,
		},
	},
	// Number of deities 4
	{
		info: {
			title: 'Era II: Age of Myth',
			subtitle: 'Deities',
			desc: `
      <p>What gods and goddesses rule over this world?</p>
			<p>
				In this section, each player will take turns rolling to determine
				number, domain, and symbols for each deity in their home region. These
				are the gods of each player's prime faction. Whether they are
				worshipped, feared, or ignored are up to you and they may help to spark
				imagination of the development and story or your world.
			</p>
			<p>
				While each player will roll up the deities of their own home region,
				they can be shared by everyone throughout the course of the game if
				needed.
			</p>
			<p>
				Now, Roll to decide how much deties would be presented in your Home
				Region. In the next stage you would roll the domains of these deities,
				so make sure to write down information about them.
			</p>`,
		},
		1: {
			title: '1 Deity',
			desc: '<p></p>',
			img: img('4/1'),
		},
		2: {
			title: '2 Deities',
			desc: '<p></p>',
			img: img('4/2'),
		},
		3: {
			title: '2 Deities',
			desc: '<p></p>',
			img: img('4/2'),
		},
		4: {
			title: '3 Deities',
			desc: '<p></p>',
			img: img('4/2'),
		},
		5: {
			title: '3 Deities',
			desc: '<p></p>',
			img: img('4/2'),
		},
		6: {
			title: '4 Deities',
			desc: '<p></p>',
			img: img('4/3'),
		},
	},
	// deity roll (domain, symbol, name, sacred site) 5
	{
		info: {
			title: 'Era II: Age of Myth',
			subtitle: 'Deities details',
			desc: `
      <p>
				In this stage you would define the domains of your deities. You can
				either use your imagination or Roll their personalities below.
			</p>
			<p>Make sure to Roll for each deity you have in your Home Region.</p>
			<p>
				Results would contain following information: domain, symbol, 3 parts of
				name, that you can either combine, or completely ignore and come up with
				your own (or use some websites to randomize them), and also a Sacred
				Site, which you should name and place somewhere in your Home Region.
			</p>
			<p>Write down information somewhere about your deities to not forget.</p>
			<p>Examples:</p>
			<p>
				<i class="fa-solid fa-shield-halved era__symbol"></i> — Velendar, God of
				Protection
			</p>
			<p>
				<i class="fa-solid fa-cloud-bolt era__symbol"></i> — Her'Remea, Goddess of Rain
			</p>
			<p><i class="fa-solid fa-hurricane era__symbol"></i> — Choya, God of Vengeance</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Race 6
	{
		info: {
			title: 'Era III: Age of Foundation',
			subtitle: 'Prime Faction',
			desc: `
      <p>
				The lands have been drawn. The wandering clans of the world are
				beginning to come together and form permanent settlements.
			</p>
			<p>
				This era will create your prime factions and begin to develop them into
				burgeoning empires. Each player will focus solely on their home regions
				and consists of the first 30 years of your faction's story.
			</p>
			<p>
				Now, each player will create their prime faction, this is the empire
				they will be devoting most of their time to for the majority of the
				game. Roll to determine the prominent ancestory of each Prime Faction.
			</p>
			<p>
				Place a capital settlement somewhere in your Home Region on the map.
			</p>`,
		},
		2: {
			title: 'Demonkind',
			subtitle: 'Demonfolk, Imp, Tiefling',
			desc: '<p></p>',
			img: img('6/2'),
		},
		3: {
			title: 'Seafolk',
			subtitle: 'Merfolk, Triton, Crabfolk',
			desc: '<p></p>',
			img: img('6/3'),
		},
		4: {
			title: 'Smallfolk',
			subtitle: 'Halfling, Gnome, Fairy',
			desc: '<p></p>',
			img: img('6/4'),
		},
		5: {
			title: 'Reptilian',
			subtitle: 'Lizardfolk, Kobold, Snakefolk',
			desc: '<p></p>',
			img: img('6/5'),
		},
		6: {
			title: 'Dwarves',
			subtitle: 'Mountain/Hill Dwarves, Duergar',
			desc: '<p></p>',
			img: img('6/6'),
		},
		7: {
			title: 'Humans',
			subtitle: 'Half-elf/orc or any Earth culture',
			desc: '<p></p>',
			img: img('6/7'),
		},
		8: {
			title: 'Elves',
			subtitle: 'High Elf, Wood Elf, Drow',
			desc: '<p></p>',
			img: img('6/8'),
		},
		9: {
			title: 'Greenskins',
			subtitle: 'Orc, Goblin, Hobgoblin',
			desc: '<p></p>',
			img: img('6/9'),
		},
		10: {
			title: 'Animalfolk',
			subtitle: 'Ratfolk, Gnoll, Kenku, Catfolk',
			desc: '<p></p>',
			img: img('6/10'),
		},
		11: {
			title: 'Giantkind',
			subtitle: 'Frost/Fire Giant, Goliath',
			desc: '<p></p>',
			img: img('6/11'),
		},
		12: {
			title: "Player's Choice",
			subtitle: '',
			desc: '<p>Either create your own or reroll until you would be satisfied with a race.</p>',
			img: img('6/12'),
		},
	},
	// Faction Identic 7
	{
		info: {
			title: 'Era III: Age of Foundation',
			subtitle: 'Faction Development',
			desc: `
      <p>
      The following section will take you through the development of your
      Prime Faction. They may not add much detail on the map itself but will
      help build the story of the world. Feel free to skip the rolling and
      design your faction however you wish, but you need, Roll should help
      distinguish them with crest designs, color, theme, and leadership.
    </p>
    <p>
      Results would contain following information: symbol, primary and
      secondary colors (you can use them as you want), suffix/prefix of the
      Faction name.
    </p>
    <p>
      Using the symbol and the colors as inspiration, you can create a theme
      to define the faction, for example:
    </p>
    <p>
      <i class="fa-solid fa-spider era__symbol" id="spider"></i> — Venom
      Kingdom. Theme of spiders / stealthy, poison, assasins. All cities named
      with spider/venomous theme in mind: Thorax, Venom, Web Grove, Orbweaver,
      Recluse.
    </p>
    <p>
      <i class="fa-solid fa-gear era__symbol" id="cog"></i> — Mechanist
      Enclave. Theme of advanced steampunk technology and automatons. Cities
      named after mechanical components, such as Cogsworth, Steamforge,
      Gearsville, Brassborough, and Automata Heights.
    </p>
    <p>
      <i class="fa-solid fa-moon era__symbol" id="moon"></i> — Lupine
      Dominion. Theme of werewolves and shapeshifters. Cities named after wolf
      attributes, like Moonhowl, Fangwood, Wolfsbane, Howlingmoor, and
      Lunarfield.
    </p>
    <p>
      <i
        class="fa-solid fa-icicles fa-flip-vertical era__symbol"
        id="ice"
      ></i>
      — Arctic Dominion. Theme of icy landscapes and frost magic. Cities named
      after cold elements, like Frostpeak, Glacial Keep, Snowdrift, Frostbite,
      and Crystalvale.
    </p>
    <p>
      Someone must have inspired your people into forming this new united
      faction. Whether by war, diplomacy, feats of strength, or charisma.
      Create a name for this hero or group and name a nearby location or
      geography after this first leader
    </p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Neighbors 8
	{
		info: {
			title: 'Era III: Age of Foundation',
			subtitle: 'Neighbors',
			desc: `
      <p>
				Each player takes turns rolling to select
				their neighbors, then places them anywhere in their Home Region. Give
				them a name and draw in an appropriate symbol to designate their
				location (small camp, tower, dragon and etc).
			</p>
			<p>
				Whether they are treated as hostile or friendly, or if that behaviour
				changes throughout the game is up to each player.
			</p>`,
		},
		1: {
			title: 'Hive / Swarm',
			desc: '<p>Examples: Insect, Fungus, Crustacean</p>',
			img: img('8/1'),
		},
		2: {
			title: 'Tribe / Clan',
			desc: '<p></p>',
			img: img('8/2'),
		},
		3: {
			title: 'Minor Kingdom',
			desc: '<p></p>',
			img: img('8/3'),
		},
		4: {
			title: 'Magic User',
			desc: '<p></p>',
			img: img('8/4'),
		},
		5: {
			title: 'Cult / Order / Lair',
			desc: '<p></p>',
			img: img('8/5'),
		},
		6: {
			title: 'Legendary Monster',
			desc: '<p></p>',
			img: img('8/6'),
		},
	},
	// Settlement 9
	{
		info: {
			title: 'Era III: Age of Foundation',
			subtitle: 'Early Settlers',
			desc: `
      <p>
				Each player will take turns rolling, placing new settlements for their
				prime faction. These must all be placed on the same island as their
				capital. Be sure to name and connect each settlement with a road.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Age of Discovery 10
	{
		info: {
			title: 'Era IV: Age of Discovery',
			subtitle: 'Exploration Begins',
			desc: `
      <p>
				The Empires are ready to explore and expand. Scouts and settlers are now
				being sent to explore and colonize the world.
			</p>
			<p>Each player will take turns rolling to explore their nearby shores.</p>
			<p>
				All results can be placed anywhere within each player's Home Region.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Hero Profession (Colonization) 11
	{
		info: {
			title: 'Era IV: Age of Discovery',
			subtitle: 'Colonization',
			desc: `
      <p>
				The factions have stumbled their way out into the world and begun
				forming sprawling nations. In this section you will discover some of the
				important figures, vital to the development of your empire, and begin to
				name the local landmarks to honor these pioneers.
			</p>
			<p>
				Roll a hero, give them a name and name a landmark in your home region
				after them.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Empire Specialization (Prosperity) 12
	{
		info: {
			title: 'Era IV: Age of Discovery',
			subtitle: 'Prosperity',
			desc: `
      <p>
				Every empire has a distinct good, service or profession than
				distinguishes it from its neighbors. Whether it's sword making, fishing,
				wizardry or anything else, this will help distinguish and give each
				empire its own flavor.
			</p>
			<p>
				You can either come up with your own specialization for your empire, or
				Roll to determine what's your empire good at.
			</p>
			<p>
				Either write the results on a separate sheet of paper or in an open
				space near the faction.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Age of Empires 13
	{
		info: {
			title: 'Era V: Age of Empires',
			subtitle: 'Worldwide Expansion',
			desc: `
      <p>
				Your empires have gained a foothold and perhaps even expanded onto
				neighboring islands. Now it's time to flex their might and expand, or
				perhaps, fight their way across the seas.
			</p>
			<p>From now, all results can be placed in any region of the map.</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Neighbors Develop (make a sub-array of results, depends of which should be rolled) 14
	{
		info: {
			title: 'Era V: Age of Empires',
			subtitle: 'Neighbors Develop',
			desc: `
      <p>
				Each player will roll for every non-prime faction in their Home Region.
				Roll once for each neighbor.
			</p>
			<p>
				On this stage, button "Roll" would be unavaliable. Instead, use the 6
				different buttons below:
			</p>`,
			extraBtns: [
				{ component: 'TheButton', text: 'Minor Faction' },
				{ component: 'TheButton', text: 'Tribe/Bandits/Pirates' },
				{ component: 'TheButton', text: 'Hive' },
				{ component: 'TheButton', text: 'Magic User' },
				{ component: 'TheButton', text: 'Cult/Lair/Order' },
				{ component: 'TheButton', text: 'Monster' },
			],
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Age of Collapse 15
	{
		info: {
			title: 'Era VI: Age of Collapse',
			subtitle: 'Final Era',
			desc: `
      <p>
				With every rising empire there is a falling one. Open land is quickly
				diminishing and with that, wars, famine & rebellions become a common
				occurrence.
			</p>
			<p>All results can be placed anywhere on the map.</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Iconic Landmarks 16
	{
		info: {
			title: 'Era VI: Age of Collapse',
			subtitle: 'Iconic Landmarks',
			desc: `
      <p>
				Each player will take a moment to name one location on the map that was
				an important part of their Prime faction's story.
			</p>
			<p>
				This may be a nearby forest where disaster struck, grassland where a
				decisive battle was fought, or mountain that ended up being an important
				religious site.
			</p>
			<p>
				Name these iconic locations, whether by a name of a hero, deity or maybe
				even a nearby monster. These may be placed anywhere on map.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Omens 17
	{
		info: {
			title: 'Era VI: Age of Collapse',
			subtitle: 'Omens',
			desc: `
      <p>
				How does your story end? As this world age comes to a close, what omen
				will bring this world into a new era?
			</p>
			<p>All players will select one player to Roll the Omen.</p>
			<p>
				This should be either the player that created the most interesting
				story, or who all decide ended with the most powerful faction.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// Finalizing 18
	{
		info: {
			title: 'Era VI: Age of Collapse',
			subtitle: 'Finalizing',
			desc: `
      <p>
				The map is almost complete. Finish off by naming any important features
				that haven't been named yet (geography, war sites, lair locations, etc).
				Then, draw in some accents for final touches, like compass rose, ships
				in open water, sea monsters and etc.
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
		},
	},
	// End of the game 19
	{
		info: {
			title: 'End of the Game',
			subtitle: 'It was a great story',
			desc: `
      <p>
				Your journey through Mappa Imperium has come to an end! Crafting this
				fantasy world led to an exciting story. From forming the map to creating
				landscapes and resources.
			</p>
			<p>
				The tale was fascinating, with empires clashing, alliances forming, and
				new stories unfolding. Every faction and dominion played a big part in
				the story of this world.
			</p>
			<p>&nbsp;</p>
			<p>
				If you liked your journey, leave a comment on the
				<a
					href="https://nookrium.itch.io/mappa-imperium"
					target="_blank"
					class="link"
					>Itch.io page <i class="fa-solid fa-arrow-up rotate-45"></i></a
				>. Your thoughts will encourage others!
			</p>
			<p>
				Thank you for playing this game. May your empires' legacy inspire future
				adventurers. Goodbye, until our next imaginative adventure!
			</p>`,
		},
		1: {
			title: 'Title',
			desc: '<p></p>',
			img: img(''),
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
