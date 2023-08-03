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
			title: '1 Large Continent',
			desc: '<p>An enormous landmass covering vast regions</p>',
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
			desc: '<p>A single powerful and divine being worshipped and revered.</p>',
			img: img('4/1'),
		},
		2: {
			title: '2 Deities',
			desc: '<p>A divine duo, complementary or conflicting, representing various aspects of existence, shaping the lives of their followers.</p>',
			img: img('4/2'),
		},
		3: {
			title: '2 Deities',
			desc: '<p>A divine duo, complementary or conflicting, representing various aspects of existence, shaping the lives of their followers.</p>',
			img: img('4/2'),
		},
		4: {
			title: '3 Deities',
			desc: '<p>A divine triad, each member contributing to the divine harmony, representing fundamental forces or virtues.</p>',
			img: img('4/2'),
		},
		5: {
			title: '3 Deities',
			desc: '<p>A divine triad, each member contributing to the divine harmony, representing fundamental forces or virtues.</p>',
			img: img('4/2'),
		},
		6: {
			title: '4 Deities',
			desc: '<p>A powerful quartet of gods presiding over the realms, each deity ruling with domain and might, entwined in divine intrigue.</p>',
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
			desc: '<p>Demonkind is a group of races with infernal ties and otherworldly origins. They bear the marks of demonic heritage, each possessing unique abilities and characteristics inherited from their abyssal ancestors. Though diverse in appearance and abilities, all members of demonkind share a connection to the realms of darkness and chaos.</p>',
			img: img('6/2'),
		},
		3: {
			title: 'Seafolk',
			subtitle: 'Merfolk, Triton, Crabfolk',
			desc: '<p>Seafolk comprises aquatic races, at home in the depths of oceans and seas. They have adapted to underwater environments, possessing webbed appendages, gills, or crustacean features. These water-dwelling beings often exhibit a deep affinity for the sea, embodying its mysteries and commanding its creatures.</p>',
			img: img('6/3'),
		},
		4: {
			title: 'Smallfolk',
			subtitle: 'Halfling, Gnome, Fairy',
			desc: "<p>Smallfolk includes diminutive and agile races known for their cleverness and elusive nature. They are characterized by their small stature and dexterity, often excelling in stealth and ingenuity. Despite their size, they are spirited adventurers, weaving their way through the world's wonders with a touch of charm.</p>",
			img: img('6/4'),
		},
		5: {
			title: 'Reptilian',
			subtitle: 'Lizardfolk, Kobold, Snakefolk',
			desc: '<p>Reptilian races exhibit characteristics akin to reptiles, adapting to various environments. They are versatile and resilient, displaying reptilian traits such as scales, claws, and serpentine features. Their affinity for nature and cunning instincts make them formidable beings, both as allies and foes.</p>',
			img: img('6/5'),
		},
		6: {
			title: 'Dwarves',
			subtitle: 'Mountain/Hill Dwarves, Duergar',
			desc: '<p>Dwarves are a sturdy and industrious group of races with an inherent connection to the earth and underground realms. They possess resilience, craftsmanship, and an affinity for mining and forging. These stout beings are renowned for their strong sense of community and their prowess in craftsmanship and combat.</p>',
			img: img('6/6'),
		},
		7: {
			title: 'Humans',
			subtitle: 'Half-elf/orc or any Earth culture',
			desc: '<p>Humans are a diverse and adaptable race, hailing from various cultural backgrounds and regions. Whether half-elves or half-orcs, or originating from any Earth culture, humans display a wide range of skills, abilities, and appearances. As the most numerous and versatile of the races, they forge their destinies through ambition, creativity, and resilience.</p>',
			img: img('6/7'),
		},
		8: {
			title: 'Elves',
			subtitle: 'High Elf, Wood Elf, Drow',
			desc: '<p>Elves are elegant and mystical races with a profound connection to nature and the arcane. They embody different aspects of elven nature, be it their regal presence, their harmonious existence with woodlands, or their enigmatic and shadowy demeanor. Gifted with long lives and magical aptitude, elves leave an indelible mark on the world around them.</p>',
			img: img('6/8'),
		},
		9: {
			title: 'Greenskins',
			subtitle: 'Orc, Goblin, Hobgoblin',
			desc: '<p>Greenskins are a group of formidable and diverse races with green-tinted or rugged appearances. Orcs, Goblins, and Hobgoblins boast strength, ferocity, and a warrior spirit. While each race might vary in culture and temperament, they share a tenacity that makes them formidable foes and stalwart allies.</p>',
			img: img('6/9'),
		},
		10: {
			title: 'Animalfolk',
			subtitle: 'Ratfolk, Gnoll, Kenku, Catfolk',
			desc: '<p>Animalfolk is a collection of races embodying traits of various creatures. Ratfolk, Gnolls, Kenku, and Catfolk possess characteristics reminiscent of their respective animal counterparts. Whether it be rat-like cunning, hyena-like ferocity, bird-like mimicry, or feline grace, these races bring a touch of the wild to the world of fantasy.</p>',
			img: img('6/10'),
		},
		11: {
			title: 'Giantkind',
			subtitle: 'Frost/Fire Giant, Goliath',
			desc: '<p>Giantkind comprises imposing and colossal races, towering over the other inhabitants of the world. They exhibit strength and endurance befitting their enormous size. Legends and tales often speak of their grand deeds, and their presence alone can shape the fates of those around them.</p>',
			img: img('6/11'),
		},
		12: {
			title: "Player's Choice",
			subtitle: 'Divine Forge',
			desc: '<p>Embrace the role of a celestial craftsman, and shape your very own race. Will they be wise spider-like beings weaving intricate webs of magic, or winged harpies dwelling on cliffs? Unleash your imagination and let it guide you in creating a race that mirrors the essence of your dreams. Or keep rolling until you find a creation that truly captures the essence of your imagination and desires.</p>',
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
			subtitle: 'Insect, Fungus, Crustacean',
			desc: '<p>An intricate society of insectoid creatures, mysterious fungus, or resilient crustaceans working in perfect harmony as a single, organized entity. Insects construct towering hives, fungi spread their sprawling mycelium networks, and crustaceans build expansive colonies, all displaying unparalleled coordination and discipline.</p>',
			img: img('8/1'),
		},
		2: {
			title: 'Tribe / Clan',
			subtitle: 'Primitive Society',
			desc: '<p>Tight-knit communities united by familial bonds or shared heritage. Within their enchanting borders, culture and traditions intertwine, creating unique societies that often thrive in harmony with nature or excel in craftsmanship.</p><p>Roll their race using button below:</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Race',
					data: { stage: 6, amount: 2, clearRolls: false },
				},
			],
			img: img('8/2'),
		},
		3: {
			title: 'Minor Kingdom',
			subtitle: 'Feudal Realm',
			desc: '<p>Realms governed by noble rulers or councils. These kingdoms exude enchantment, often embracing art, magic, and diplomacy to maintain harmony with neighboring lands and the ethereal realms.</p><p>Roll to determine their race, place the Capital somewhere in your Home Region, then Roll additional Settlement:</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Race',
					data: { stage: 6, amount: 2, clearRolls: false },
				},
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('8/3'),
		},
		4: {
			title: 'Magic User',
			subtitle: 'Sorcerers, Wizards, Warlocks, Necromancers',
			desc: '<p>Individuals wielding the arcane arts, whether through innate power, scholarly study, or otherworldly pacts. Sorcerers command raw magical energy with innate talent, Wizards delve into ancient tomes to master spells, Warlocks forge pacts with otherworldly beings, gaining access to eldritch powers beyond mortal comprehension, and malevolent Necromancers wield dark magic to manipulate the forces of life and death for their sinister purposes.</p>',
			img: img('8/4'),
		},
		5: {
			title: 'Cult / Order / Lair',
			subtitle: 'Dark Cults, Paladin Orders, Dragon Lairs',
			desc: '<p>Groups devoted to sinister deities, upholding noble values, or guarding hoards of treasures and arcane knowledge. Dark Cults perform dark rituals to appease malevolent entities, Paladin Orders uphold noble virtues and protect the innocent, and mighty Dragons establish their lairs in hidden caverns, safeguarding their wealth and ancient secrets.</p>',
			img: img('8/5'),
		},
		6: {
			title: 'Legendary Monster',
			subtitle: 'Kraken, Phoenix, Sphinx',
			desc: '<p>Majestic and awe-inspiring creatures like the monstrous Kraken that roams the depths of the seas, the mystical Phoenix that rises from its ashes, or the enigmatic Sphinx that guards ancient riddles. Surrounded by myths and legends, these legendary monsters leave a profound impact on the world and become formidable adversaries or rare allies to those who dare cross their path.</p>',
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
			title: 'Food',
			subtitle: 'Farm, Fish, Forage',
			desc: '<p>A settlement focused on sustenance and agriculture. Farms cultivate fertile lands to grow various crops, ensuring a steady supply of food. Fishermen brave the waters to provide fresh catches, while foragers explore the wilderness to gather valuable resources. These settlements form the backbone of civilization, nourishing its inhabitants and supporting other endeavors.</p>',
			img: img('9/1'),
		},
		2: {
			title: 'Mining',
			subtitle: 'Stone Quarry, Clay Pit, Metal Mine',
			desc: '<p>A settlement driven by mining and extraction. Stone quarries yield sturdy building materials, clay pits provide raw materials for ceramics and pottery, and metal mines unearth precious ores for crafting. These industrious communities delve deep into the earth to extract valuable resources, which serve as the foundation for construction, trade, and further development.</p>',
			img: img('9/2'),
		},
		3: {
			title: 'Industry',
			subtitle: 'Goods Production, Textile, Factory',
			desc: '<p>A settlement focused on various industries and craftsmanship. Skilled artisans and craftsmen engage in goods production, creating a diverse range of items and products. Textile workshops spin fibers into fine fabrics and textiles. In more advanced settlements, factories hum with the rhythm of machinery, revolutionizing production. These bustling centers drive trade and innovation.</p>',
			img: img('9/3'),
		},
		4: {
			title: 'Trade',
			subtitle: 'Market, Port, Caravan Stop',
			desc: '<p>A settlement flourishing with commerce and trade. Markets buzz with activity as merchants and traders exchange goods and services. Ports serve as vital hubs for maritime trade, connecting distant lands. Caravan stops provide essential rest and resupply points for traders journeying across vast territories. These settlements facilitate the exchange of wealth, knowledge, and culture.</p>',
			img: img('9/4'),
		},
		5: {
			title: 'Military',
			subtitle: 'Frontier Fort, Barracks, Academy',
			desc: '<p>A settlement with a strong military focus. Frontier forts guard the borders, ensuring security from external threats. Barracks house well-trained soldiers ready to defend their homeland. Academies train the next generation of warriors and strategists. These robust settlements play a crucial role in maintaining peace and protecting the realm from potential adversaries.</p>',
			img: img('9/5'),
		},
		6: {
			title: 'Religion',
			subtitle: 'Monastery, Temple, Shrine',
			desc: '<p>A settlement centered around religious practices and beliefs. Monasteries serve as retreats for devoted monks and scholars seeking spiritual enlightenment. Temples stand as grand places of worship, revering deities and offering solace to the faithful. Shrines, often found in remote and sacred places, act as points of spiritual connection. These pious communities cultivate faith, rituals, and devotion.</p>',
			img: img('9/6'),
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
		3: {
			title: 'Magical Event',
			subtitle: 'Arcane Revelation',
			desc: '<p>Something magical, powerful, or otherworldly has been discovered. Describe and draw this relic, be sure to give it and the location where it was discovered a name.</p><p>For example: Tome of Undeath, Wand of Power, Divine Weapon.</p>',
			img: img('10/3'),
		},
		4: {
			title: 'Evil Lair or Hive',
			subtitle: 'Awakening Evil',
			desc: '<p>In the midst of exploration, malevolent forces lurk in the shadows, awakening from their slumber. Is it demons, twisted abominations, giant spiders? Draw in this new hostile neighbor with an appropriate settlement.</p>',
			img: img('10/4'),
		},
		5: {
			title: 'New Island',
			subtitle: 'Amidst the Mists',
			desc: '<p>Your sea explorers have discovered a new island shrouded in the mist! Draw 1 small island, Roll twice to discover what Biomes are on this island located. Place them on it, or near the new island, then name the island after the explorer that discovered it.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Biome',
					data: { stage: 2, amount: 2, clearRolls: false },
				},
			],
			img: img('10/5'),
		},
		6: {
			title: 'Ancient Ruins',
			subtitle: 'Forgotten Remnants',
			desc: '<p>Your scouts have made a historic discovery – the ruins of a lost civilization. Draw the ruins and place a new cult, hive, mage, or tribe nearby. </p>',
			img: img('10/6'),
		},
		// ======= FILL EXTRA BTNS WITH NEIGHBORS =========
		7: {
			title: 'Neighbors Develop',
			subtitle: 'Rising Factions',
			desc: '<p>The Era of Discoveries has set neighboring factions on a path of development. Select any neighbor and roll on the appropriate Neighbor Type below to witness the unfolding of new powers and influences:</p>',
			img: img('10/7'),
		},
		8: {
			title: 'Bandits / Pirates',
			subtitle: 'Rogue Marauders',
			desc: '<p>As the world becomes emboldened by exploration, brigands have been raiding merchants and caravans. Place a new hostile camp on a trade route or bay, then give them a name and banner, for they threaten the stability of the realm.</p>',
			img: img('10/8'),
		},
		9: {
			title: 'Minor Kingdom',
			subtitle: 'Emerging Realm',
			desc: "<p>Scouts have discovered another kingdom! As this new realm emerges, alliances and rivalries form, shaping the political landscape of the region.</p><p>Roll their Race, then place their Capital and Roll 2 Settlements. Don't forget to give them a banner and a name!</p>",
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Race',
					data: { stage: 6, amount: 2, clearRolls: false },
				},
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('10/9'),
		},
		10: {
			title: 'Colonization',
			subtitle: 'Expanding Horizons',
			desc: '<p>Your empire is growing, and its reach extends to distant shores. Establish a new coastal settlement on the same or nearby island, as your people venture into uncharted territories and strive to forge a new future.</p>',
			img: img('10/10'),
		},
		11: {
			title: 'Expansion',
			subtitle: 'Expanding Borders',
			desc: '<p>Your Empire continues to expand its influence. Roll and place a new Settlement, as you assert your authority over new territories</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('10/11'),
		},
		12: {
			title: 'Hostiles',
			subtitle: 'Encountering Foes',
			desc: '<p>Your explorers have made contact with hostiles. Roll to determine what Neighbors they encounter, as the clash of ideologies and ambitions unfolds. Diplomacy, war, or uneasy coexistence may lie ahead as you navigate the complexities of these newfound interactions.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Neighbor',
					data: { stage: 8, amount: 1, clearRolls: false },
				},
			],
			img: img('10/12'),
		},
		13: {
			title: 'Military Expansion',
			subtitle: 'Mighty Legions',
			desc: "<p>Your Empire's might knows no bounds. Draw in a new military settlement nearby, as your military prowess expands, ensuring security and projecting power across the realm.</p>",
			img: img('10/13'),
		},
		14: {
			title: 'Neighbor Expands',
			subtitle: 'Growing Neighbors',
			desc: "<p>Choose one neighboring faction and add a new settlement for them.</p><p>If it's a Minor Kingdom, you can Roll their Settlement type:</p>",
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('10/14'),
		},
		15: {
			title: 'New Resource',
			subtitle: 'Bountiful Discovery',
			desc: '<p>Your Explorers have discovered a valuable new recource! Place a new resource symbol in your Home Region.</p>',
			img: img('10/15'),
		},
		16: {
			title: 'Fantastic Landmark',
			subtitle: 'Mystic Wonder',
			desc: "<p>Scouts have stumbled upon a mystic wonder. Is it a strange rock formation, a lone monolith, or is it a magical grove? Draw it in, then place a Tribe nearby. Roll the Tribe's Race.</p>",
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Race',
					data: { stage: 6, amount: 2, clearRolls: false },
				},
			],
			img: img('10/16'),
		},
		17: {
			title: 'Roaming Herds',
			subtitle: 'Majestic Beasts',
			desc: '<p>Strange and magnificent beasts have been spotted. Are they terrifyingly large, agressive or tasty? Draw their symbol and give these creatures a name, as their presence adds a touch of untamed wonder to the world.</p>',
			img: img('10/17'),
		},
		18: {
			title: 'Monster Awakens',
			subtitle: 'Awoken Legend',
			desc: '<p>Your scouts have disturbed and awakened a legendary monster. Draw in a new monster and give it a name, such as The Onyx Dragon, Titan of the North, or Swamp Hydra. Brace yourself for the impact of this awakened legend, as it becomes a central force in your realm.</p>',
			img: img('10/18'),
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
			</p>
			<p>Feel free to use their advantages to make your Empire stronger. Each individual plays a vital role in shaping the destiny of your realm. An Inventor? Perhaps your Empire has unlocked a new mode of transportation, revolutionizing travel and trade. A Diplomat? You've forged a strong alliance with a neighboring Kingdom, fostering peace and mutual prosperity. An Explorer? Your daring journeys have led to the discovery of new lands, expanding your Empire's influence.</p>
			<p>Embrace the potential of these extraordinary individuals and harness their skills to enhance your Empire's prosperity and safeguard its future. Each title holds a wealth of possibilities, and the choices you make will define the legacy of your civilization.</p>`,
		},
		3: {
			title: 'Musician',
			subtitle: 'Melody Weaver',
			desc: '<p>A Musician is a melody weaver, using their art to evoke emotions and create harmonies that resonate with the hearts of the people. Their music brings joy, solace, and inspiration to the citizens of the Empire.</p>',
			img: img('11/1'),
		},
		4: {
			title: 'Sculptor',
			subtitle: 'Stone Carver',
			desc: "<p>A Sculptor is a stone carver and master artisan, creating breathtaking sculptures that immortalize the Empire's history and beauty. Their works of art adorn public spaces and serve as symbols of cultural pride.</p>",
			img: img('12/3'),
		},
		5: {
			title: 'Artist',
			subtitle: 'Creative Visionary',
			desc: '<p>An Artist is a creative visionary and painting prodigy, capturing the essence of life and beauty on canvas. Their expressive art reflects the diverse aspects of the Empire and stirs the soul of those who behold it.</p>',
			img: img('11/1'),
		},
		6: {
			title: 'Poet',
			subtitle: 'Word Master',
			desc: "<p>A Poet is a word weaver, crafting verses that enchant and captivate the hearts of listeners. Their rhapsodic verses tell tales of heroism, love, and adventure, leaving an everlasting impact on the Empire's culture.</p>",
			img: img('11/1'),
		},
		7: {
			title: 'Author',
			subtitle: 'Storytelling Wordsmith',
			desc: "<p>An Author is a literary scribe and storytelling wordsmith, penning tales that transport readers to fantastical realms and ignite their imaginations. Their written works enrich the Empire's literary heritage.</p>",
			img: img('11/1'),
		},
		8: {
			title: 'Historian',
			subtitle: 'Keeper of Lore',
			desc: "<p>A Historian is the keeper of lore and custodian of the Empire's history. They chronicle tales of valor, victories, and defeats, ensuring that the Empire's legacy and knowledge are preserved for future generations</p>",
			img: img('11/2'),
		},
		9: {
			title: 'Military Leader',
			subtitle: 'Tactical Commander',
			desc: "<p>A Military Leader is a tactical commander and strategic general, leading the Empire's armies with skill and valor. Their martial prowess and strategic acumen ensure the defense and expansion of the Empire.</p>",
			img: img('11/3'),
		},
		10: {
			title: 'City Leader',
			subtitle: 'Esteemed Leader',
			desc: "<p>A City Leader is a respected mayor and esteemed leader of an important city in the Empire. They oversee the city's administration, promote its growth, and ensure the well-being of its inhabitants.</p>",
			img: img('11/3'),
		},
		11: {
			title: 'Explorer',
			subtitle: 'Frontier Pioneer',
			desc: "<p>An Explorer is a daring adventurer, venturing into uncharted territories to uncover hidden wonders and unlock the Empire's potential. Their discoveries expand the Empire's knowledge and influence.</p>",
			img: img('11/3'),
		},
		12: {
			title: 'Adventurer',
			subtitle: 'Fearless Journeyer',
			desc: '<p>An Adventurer is a daring hero and perilous wanderer, embarking on fearless journeys to face the unknown and protect the Empire from threats. Their courage inspires others to face challenges with valor.</p>',
			img: img('11/3'),
		},
		13: {
			title: 'Inventor',
			subtitle: 'Creative Innovator',
			desc: "<p>An Inventor is a creative innovator and ingenious tinkerer, developing groundbreaking technologies that enhance the Empire's industries and way of life. Their inventions drive progress and prosperity.</p>",
			img: img('12/3'),
		},
		14: {
			title: 'Diplomat',
			subtitle: 'Smooth Negotiator',
			desc: '<p>A Diplomat is a smooth negotiator and skilled mediator, fostering peaceful relations and resolving disputes between the Empire and other nations. Their diplomatic prowess strengthens international ties.</p>',
			img: img('11/2'),
		},
		15: {
			title: 'Trader',
			subtitle: 'Prosperous Dealer',
			desc: "<p>A Trader is a shrewd merchant and savvy negotiator, facilitating prosperous trade and economic growth for the Empire. Their commerce connects distant lands and enriches the Empire's treasury.</p>",
			img: img('13/12'),
		},
		16: {
			title: 'Humanitarian',
			subtitle: 'Empathetic Samaritan',
			desc: "<p>A Humanitarian is a compassionate helper and philanthropic champion, dedicating themselves to improving the welfare of the Empire's citizens. Their empathy and selflessness bring hope and relief to those in need.</p>",
			img: img('11/2'),
		},
		17: {
			title: 'Mage',
			subtitle: 'Arcane Sorcerer',
			desc: '<p>A Mage is an arcane sorcerer of great power and mystical knowledge. They wield the forces of magic to serve the Empire, protecting it from arcane threats and providing aid in times of need.</p>',
			img: img('11/4'),
		},
		18: {
			title: 'Beast Tamer',
			subtitle: 'Animal Whisperer',
			desc: '<p>A Beast Tamer is an animal whisperer and fierce guardian, forming bonds with wild creatures and using their skills to protect the Empire from dangerous beasts. Their affinity with animals is a unique asset to the Empire.</p>',
			img: img('12/6'),
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
		3: {
			title: 'Music',
			subtitle: 'Melodic Arts',
			desc: '<p>Your Empire is renowned for its musical talents, producing exquisite compositions that resonate with hearts across the realm. The enchanting melodies can inspire and uplift your citizens, fostering a harmonious and contented society. Embrace the power of music to bring unity and joy to your Empire.</p>',
			img: img('11/1'),
		},
		4: {
			title: 'Alchemy / Brew',
			subtitle: 'Mystical Elixirs',
			desc: "<p>Your Empire has mastered the ancient art of alchemy, concocting powerful elixirs and brews that hold the secrets of life and transformation. These potions can heal, empower, or even grant special abilities to your people. Embrace the wonders of alchemy to bolster your Empire's strength and resilience.</p>",
			img: img('12/1'),
		},
		5: {
			title: 'Artistic Trinkets',
			subtitle: 'Masterful Craftsmanship',
			desc: "<p>Your Empire takes great pride in its artistic trinkets, crafted with exceptional skill and attention to detail. These unique artifacts add elegance and beauty to your culture, attracting admiration from all corners. Embrace the artistry to enrich your Empire's culture and leave a lasting legacy of creativity.</p>",
			img: img('12/1'),
		},
		6: {
			title: 'Mining',
			subtitle: 'Precious Metals',
			desc: '<p>Your Empire excels in mining, unearthing vast deposits of valuable resources and precious metals. These bountiful resources fuel your economy and provide a strong foundation for growth and expansion. Embrace the wealth beneath your lands to develop a prosperous and flourishing Empire.</p>',
			img: img('12/5'),
		},
		7: {
			title: 'Explorers',
			subtitle: 'Pioneering Spirits',
			desc: "<p>Your Empire boasts a brave cadre of explorers who venture into the unknown, mapping uncharted territories and uncovering hidden wonders. Their daring endeavors expand your Empire's horizons and reveal new opportunities for growth and expansion. Embrace the spirit of exploration to chart the path to a boundless future.</p>",
			img: img('12/2'),
		},
		8: {
			title: 'Seafarers',
			subtitle: 'Masters of the Waves',
			desc: "<p>Your Empire has a rich tradition of seafarers, skilled sailors who navigate the vast oceans with expertise. Their mastery of the waves facilitates maritime trade, opens new trade routes, and fosters connections with distant lands. Embrace the sea to expand your Empire's influence and form maritime alliances.</p>",
			img: img('12/2'),
		},
		9: {
			title: 'Fine Carpentry',
			subtitle: 'Exquisite Woodwork',
			desc: '<p>Your Empire takes pride in its fine carpentry, producing exquisite woodwork and artisan furniture that adds elegance and refinement to your surroundings. The craftsmanship of your carpenters is unmatched, and their creations adorn the halls of your Empire. Embrace the art of fine carpentry to create a visually stunning and sophisticated Empire.</p>',
			img: img('12/3'),
		},
		10: {
			title: 'Type of Weaponry',
			subtitle: 'Legendary Arms',
			desc: "<p>Your Empire is known for its masterful weaponry, forged by legendary smiths. These formidable arms bolster the might of your military, providing your troops with the tools to protect and defend your realm. Embrace the art of forging to equip your Empire's warriors with legendary weapons.</p>",
			img: img('12/5'),
		},
		11: {
			title: 'Metal Industry',
			subtitle: 'Industrial Forge',
			desc: '<p>Your Empire boasts an advanced metal industry, harnessing the power of fire and metalworking to create marvels of engineering and innovation. The metalwork of your artisans fuels your technological advancements, contributing to the progress and prosperity of your realm. Embrace the metal industry to forge a powerful and technologically advanced Empire.</p>',
			img: img('12/5'),
		},
		12: {
			title: 'Type of Food',
			subtitle: 'Gastronomic Mastery',
			desc: "<p>Your Empire revels in its culinary delights, offering a diverse array of delectable dishes that delight the palate and nourish the body. The bountiful harvests and gastronomic mastery ensure your people are well-fed and content. Embrace the art of cooking to foster a culture of culinary excellence and satisfy the appetites of your Empire's citizens.</p>",
			img: img('12/4'),
		},
		13: {
			title: 'Fighting Style',
			subtitle: 'Battle Techniques',
			desc: '<p>Your Empire has honed a unique and formidable fighting style, instilling your warriors with martial prowess, tactical acumen, and unyielding discipline. This distinct approach to combat grants your troops a strategic advantage on the battlefield. Embrace the art of warfare to develop an elite fighting force and safeguard your Empire from threats.</p>',
			img: img('11/3'),
		},
		14: {
			title: 'Magic Training',
			subtitle: 'Mystical Sages',
			desc: '<p>Your Empire is a center of magical knowledge and training, nurturing arcane apprentices and mystical sages who wield powerful spells and incantations. The magical prowess of your practitioners can be harnessed for protection, growth, and prosperity. Embrace the art of magic to unlock the full potential of your Empire and wield the forces of the arcane.</p>',
			img: img('11/4'),
		},
		15: {
			title: 'Trade',
			subtitle: 'Thriving Commerce',
			desc: "<p>Your Empire thrives on trade, facilitating flourishing markets and prosperous exchanges that fuel economic growth and cultural exchange. The trade routes established by your merchants connect distant lands, enriching your realm with valuable resources and diverse goods. Embrace the art of trade to expand your Empire's economic influence and establish a network of prosperous partnerships.</p>",
			img: img('12/2'),
		},
		16: {
			title: 'Horsemanship',
			subtitle: 'Noble Cavalry',
			desc: '<p>Your Empire takes pride in its horsemanship, training expert riders who demonstrate equestrian prowess and forge a bond with noble steeds. The speed and agility of your horsemen provide a tactical advantage in both military campaigns and peaceful endeavors. Embrace the art of horsemanship to build a formidable cavalry and ensure swift transportation across your Empire.</p>',
			img: img('12/6'),
		},
		17: {
			title: 'Metal Work',
			subtitle: 'Masters of Metallurgy',
			desc: '<p>Your Empire excels in metalwork, boasting masters of metallurgy who create durable and artistic metalcraft. These exquisite works of art adorn your cities and fortifications, showcasing the creativity and skill of your metalworkers. Embrace the art of metalwork to enhance the beauty and resilience of your Empire.</p>',
			img: img('12/5'),
		},
		18: {
			title: 'Beast Raising',
			subtitle: 'Fierce Companions',
			desc: '<p>Your Empire has a deep connection with the wild beasts, as your skilled beast tamers tame and bond with fierce creatures. These formidable companions provide invaluable support in various aspects, from military endeavors to resource gathering. Embrace the art of beast raising to strengthen your Empire with loyal and powerful allies from the animal kingdom.</p>',
			img: img('12/6'),
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
		3: {
			title: 'The King is Dead',
			subtitle: 'Heirless Crisis',
			desc: '<p>Leader of your Empire has died without a proper heir, plunging your realm into anarchy. The Empire is now divided into at least 3 factions, each vying for control. You must create new names and banners for these factions. You can make any on this Empires your new Prime Faction.</p>',
			img: img('13/3'),
		},
		4: {
			title: 'Overthrown',
			subtitle: "People's Revolt",
			desc: '<p>One of your settlements has grown tired of your rule and overthrown the ruling class. This new "free" city emerges with its own identity and aspirations. You must rename this city and create a new faction with a name and banner that represents the aspirations of its people.</p>',
			img: img('13/4'),
		},
		5: {
			title: 'Shrine',
			subtitle: 'Divine Sanctuary',
			desc: '<p>A nearby location has come to be seen as sacred grounds to your people. They have built a shrine or temple to honor the deity worshipped here. Choose an existing deity or create a new one. This holy site may become a center of pilgrimage and spirituality.</p>',
			img: img('13/5'),
		},
		6: {
			title: 'Hero Arrives',
			subtitle: 'Fabled Figure',
			desc: "<p>A powerful hero has emerged in the Empire, captivating the hearts of your people. Their arrival signifies a turning point in the Empire's fate. What did they do for your Empire? Draw a statue, monument, or name a geography near your capital or the location of this event to commemorate this legendary figure and their impact on the Empire.</p>",
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Hero',
					data: { stage: 11, amount: 3, clearRolls: false },
				},
			],
			img: img('13/6'),
		},
		7: {
			title: 'Hostile Attack',
			subtitle: 'Invaders Strike',
			desc: '<p>A nearby hostile force has launched a sudden attack! As a result, one of your forts or settlements has been destroyed, leaving it in ruins. Alternatively, you can choose to claim the location for the invading faction, solidifying their presence in the area.</p>',
			img: img('13/7'),
		},
		8: {
			title: 'War!',
			subtitle: 'Conflict Erupts',
			desc: '<p>Your mighty army is marching forth to claim new territory! Select any settlement not already owned by you and roll the dice to determine the outcome of the war. Will your forces triumph, or will your ambitions be thwarted? The result will shape the future of your Empire.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'To Arms!',
					data: { stage: 20, amount: 1, clearRolls: false },
				},
			],
			img: img('13/8'),
		},
		9: {
			title: 'Neighbors Develop',
			subtitle: 'Rivals Evolve',
			desc: '<p>Select any neighbor and Roll on appropriate Neighbor Type. This shift in the geopolitical landscape may present new challenges or opportunities for your Empire. Handle your relations with tact and strategy as you navigate these changes.</p>',
			img: img('10/7'),
		},
		10: {
			title: 'Expedition',
			subtitle: 'Overseas Expansion',
			desc: "<p>A fleet of ships or military caravan has set out on a grand expedition to gain a foothold in distant lands. As part of this endeavor, you must establish a new coastal fort or frontier outpost. Consider placing it in another faction's Home Region to signify your Empire's expansion beyond its borders.</p>",
			img: img('13/10'),
		},
		11: {
			title: 'Expand',
			subtitle: 'Territorial Growth',
			desc: '<p>Your Empire is on the rise, and its boundaries are expanding. Roll the Settlement to determine the its type and place it anywhere on the map. This expansion will bolster your influence and grant new opportunities for development.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('10/14'),
		},
		12: {
			title: 'Prosperity',
			subtitle: 'Burgeoning Growth',
			desc: "<p>People are flocking to your Empire, drawn by its prosperity and opportunities. In response, you must grow your cities, add more farmlands, and draw ships into the ports to accommodate the influx of residents and visitors. Additionally, build a magnificent monument or construction to showcase your Empire's wealth and achievements. As a testament to your leader's vision, name a nearby geography after them.</p>",
			img: img('13/12'),
		},
		13: {
			title: 'Trade',
			subtitle: 'Thriving Commerce',
			desc: '<p>Your Empire is experiencing economic prosperity, and trade is the lifeblood that sustains it. Build a road connecting your Empire to another faction, fostering trade routes and commercial connections. Along this road, establish a trade post that takes advantage of resource locations to maximize trade benefits. If there are no feasible road connections, establish a new coastal trade post to facilitate maritime trade.</p>',
			img: img('13/13'),
		},
		14: {
			title: 'Military Power',
			subtitle: 'Guardian Forces',
			desc: '<p>Your Empire prioritizes stability and security. As a result, you must construct a fort, city walls, or a barracks to strengthen your military forces and fortify strategic locations. These military installations will provide your Empire with the necessary defenses to withstand potential threats.</p>',
			img: img('10/13'),
		},
		15: {
			title: 'Gifted Academy',
			subtitle: 'Realm of Knowledge',
			desc: '<p>Your Empire has cultivated a new craft, art, or ability. Are they spellcasters, researchers, monks, druids? Build a new academy, sanctuary, or library for this group and place this new settlement. Embrace the potential of these talented individuals to drive progress and advancement within your Empire.</p>',
			img: img('13/15'),
		},
		16: {
			title: 'Disaster / Famine',
			subtitle: 'Catastrophic Calamity',
			desc: '<p>Something terrible has struck your Empire, be it a natural disaster or a magical catastrophe, a famine, or a disease outbreak. As a result, one of your settlements has fallen victim to this disaster and is now left in ruins. Confront these challenges head-on to recover and rebuild your Empire.</p>',
			img: img('13/16'),
		},
		17: {
			title: 'Feed the People',
			subtitle: 'Agricultural Growth',
			desc: '<p>Your growing Empire needs a stable food supply to sustain its population. As a solution, place either a new farming town or fishing village to bolster your agricultural output. This will ensure that your people are well-fed and content, contributing to the continued prosperity of your realm.</p>',
			img: img('13/17'),
		},
		18: {
			title: 'Revolution',
			subtitle: "Dissent's Triumph",
			desc: '<p>Your Empire faces a formidable uprising as half of its territory splits away to form a new faction. Bestow upon this insurgent group a name and banner, symbolizing their quest for autonomy. They are now considered a hostile neighbor challenging your authority.</p>',
			img: img('13/18'),
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
		3: {
			title: 'Dug Too Deep',
			subtitle: 'Menace from Underworld',
			desc: '<p>A monstrous horror has risen from the depths of the earth, wreaking havoc upon one of your settlements. The once-prosperous settlement now lies in ruins as a consequence of this calamity. Draw a new monstrous entity on the map, and give it a name to commemorate the terror it has brought upon your Empire.</p>',
			img: img('15/3'),
		},
		4: {
			title: 'Arcane Disturbance',
			subtitle: 'Mystic Unleashing',
			desc: "<p>An arcane disturbance has been unleashed within your Empire. A portal to another realm has opened, or a mad wizard's tower is causing peculiar phenomena. Embrace the mystical and sketch a manifestation of this magical occurrence on the map, be it a towering structure or a mystical crater.</p>",
			img: img('15/4'),
		},
		5: {
			title: 'Royalty',
			subtitle: 'Palatial Residence',
			desc: '<p>Your rulers require a place to live! Construct a grand palace near the capital or a significant location within your Empire to serve as the dwelling of your monarchs. Honor the ruling family by naming this region on the map after them.</p>',
			img: img('15/5'),
		},
		6: {
			title: 'Piety',
			subtitle: 'Divine Devotion',
			desc: '<p>A new religion has gained prominence in your Empire. Evoke the reverence for this faith by selecting an existing deity, or Roll a new one, and erect a cathedral or majestic temple in its honor anywhere within your lands.</p>',
			img: img('15/6'),
		},
		7: {
			title: 'Refugees',
			subtitle: 'Fleeing Souls',
			desc: '<p>A tide of refugees is flocking to your city, seeking sanctuary from war, monster attacks, or devastating disasters. Accommodate these displaced souls by either expanding your capital or establishing a new small village to provide for their needs.</p>',
			img: img('15/7'),
		},
		8: {
			title: 'Rising Empire',
			subtitle: 'Prosperous Expansion',
			desc: '<p>Despite the times, your Empire thrives and expands. Embrace this growth by Rolling and drawing in a new Settlement or enhancing an existing one with farmlands, defensive walls, and other developments.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('15/8'),
		},
		9: {
			title: 'Neighboring War',
			subtitle: 'Conflict Arises',
			desc: '<p>Select any two neighboring factions, designating one as the aggressor and the other as the defender. Then Roll the War result to determine the outcome of this confrontation.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 20, amount: 1, clearRolls: false },
				},
			],
			img: img('15/9'),
		},
		10: {
			title: 'War!',
			subtitle: 'March of Conquest',
			desc: '<p>Your mighty army is marching forth to claim new territory! Select any settlement not already owned by you and roll the dice to determine the outcome of the war. Will your forces triumph, or will your ambitions be thwarted? The result will shape the future of your Empire. This can be against any faction, tribe, or hostile force on the map.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'To Arms!',
					data: { stage: 20, amount: 1, clearRolls: false },
				},
			],
			img: img('13/8'),
		},
		11: {
			title: 'Neighbors Develop',
			subtitle: 'Geopolitical Shift',
			desc: '<p>Select any neighbor and Roll on appropriate Neighbor Type. This shift in the geopolitical landscape may present new challenges or opportunities for your Empire. Handle your relations with tact and strategy as you navigate these changes.</p>',
			img: img('10/7'),
		},
		12: {
			title: 'Mobilize',
			subtitle: 'Fortification Rise',
			desc: "<p>Draw a new fort or military settlement, bolstering your Empire's defense and strategic capabilities. The might of your armies and military prowess are showcased through this new addition.</p>",
			img: img('15/12'),
		},
		13: {
			title: 'Disaster',
			subtitle: 'Unfortunate Misfortune',
			desc: '<p>Something terrible has struck your Empire, be it a natural disaster, a malevolent magical event, famine, or disease. The severity of this misfortune varies, ranging from a mere inconvenience to a severe catastrophe. Roll to determine the severity (1 is weak, 6 is most severe). Remove at least 1 settlement and replace it with a ruin, marking the impact of this disaster on your Empire.</p>',
			img: img('15/13'),
		},
		14: {
			title: 'Evil Lurks',
			subtitle: 'Sinister Presence',
			desc: '<p>Darkness envelops a nearby ruin, and something sinister claims it as its lair. Whether it is a cult, tribe, mage, hive, or monstrous creature, this malevolent force now lurks within the ruins. If no empty ruin is available, find a suitable location on the map for them.</p>',
			img: img('15/14'),
		},
		15: {
			title: 'Vassalage',
			subtitle: 'United Empire',
			desc: '<p>A neighboring faction has chosen to join your Empire, strengthening your ties and unity. Celebrate this alliance by creating a distinctive Alliance Banner and giving your new united Empire a name that represents the combined strength of both factions.</p>',
			img: img('15/15'),
		},
		16: {
			title: 'Revolution',
			subtitle: 'Call for Freedom',
			desc: '<p>Your Empire faces a formidable uprising as half of its territory secedes to form a new faction. This revolutionary movement demands autonomy, and its members now stand as hostile neighbors challenging your authority. Bestow upon this insurgent group a name and banner, symbolizing their relentless quest for independence and self-governance.</p>',
			img: img('13/4'),
		},
		17: {
			title: 'Nightmares',
			subtitle: 'Terrifying Presence',
			desc: "<p>Something dreadful lurks in the depths of the forest or another geographical location. Whether it's lycanthropy, demonic spiders, a mad druid, or rodents of unusual size, treat them as a hostile faction. The location where they dwell takes on an ominous name, reflecting the fear they instill in the hearts of your people.</p>",
			img: img('15/17'),
		},
		18: {
			title: 'Cataclysm',
			subtitle: 'Apocalyptic Devastation',
			desc: '<p>Total devastation strikes your home region, as something cataclysmic occurs, such as an island being destroyed, a comet impacting, or the fury of the Gods unleashed. Engulfed in mythical tragedy, a large section of your home region is now in ruins. Immortalize the tale of this catastrophic event and its aftermath.</p>',
			img: img('15/18'),
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
	},
	// Extra rolls
	// ==== WAR (20) ====
	{
		1: {
			title: 'Devastating Loss & Counterattack',
			desc: '<p>Defender crushes the attacker. Defender makes an immediate counterattack against a settlement they choose. Now rolling as the attacker. Defender also places a monument to their new War Hero.</p>',
			img: img('20/1'),
		},
		2: {
			title: 'Failed Attack',
			desc: '<p>Defender fights off the attackers, maintaining control of the settlement.</p>',
			img: img('20/1'),
		},
		3: {
			title: 'Stalemate',
			desc: '<p>After many losses on both sides, the attack fails.</p>',
			img: img('20/1'),
		},
		4: {
			title: 'Successful Assault',
			desc: '<p>Attacker wins and takes control of the settlement.</p>',
			img: img('20/1'),
		},
		5: {
			title: 'Great Victory',
			desc: '<p>Attacker easily overpowers the defender and takes control of the settlement, then places a new fort nearby.</p>',
			img: img('20/1'),
		},
		6: {
			title: 'Great Campaign',
			desc: '<p>Attacker crushes the enemy, then immediately makes another attack against another settlement. Create a monument to the new hero that emerged from this war.</p>',
			img: img('20/1'),
		},
	},
	// ==== Minor Faction (21) ====
	{
		1: {
			title: 'Expand',
			subtitle: 'Territorial Growth',
			desc: '<p>Add a settlement. If you want, you can Roll its type:</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'Settlement',
					data: { stage: 9, amount: 1, clearRolls: false },
				},
			],
			img: img('8/3'),
		},
		2: {
			title: 'Colonize',
			subtitle: 'Coastal Endeavor',
			desc: '<p>Build a new coastal settlement.</p>',
			img: img('8/3'),
		},
		3: {
			title: 'Militarize',
			subtitle: 'Fortified Strength',
			desc: '<p>Draw in a new fort or military settlement.</p>',
			img: img('8/3'),
		},
		4: {
			title: 'Union',
			subtitle: 'Harmonious Merger',
			desc: '<p>Select a nearby tribe and merge them into the minor faction, becoming one nation.</p>',
			img: img('8/3'),
		},
		5: {
			title: 'Epic Construction',
			subtitle: 'Monumental Achievement',
			desc: '<p>A new academy, altar, tower? Draw in a new construction.</p>',
			img: img('8/3'),
		},
		6: {
			title: 'Expand',
			subtitle: 'Trade Ventures',
			desc: '<p>Connect a road to a neighbor and build a trade settlement on that road. Or create a new coastal trading port.</p>',
			img: img('8/3'),
		},
	},
	// ==== Tribe / Bandits / Pirates (22) ====
	{
		1: {
			title: 'Monster!',
			subtitle: 'Legendary Terror',
			desc: '<p>A new Legendary Monster has been discovered. Create one now and draw it in.</p>',
			img: img('8/2'),
		},
		2: {
			title: 'Warpath',
			subtitle: 'Raid and Conquer',
			desc: '<p>War! Select a neighbor and Roll the War results.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 20, amount: 1, clearRolls: false },
				},
			],
			img: img('8/2'),
		},
		3: {
			title: 'Advancement',
			subtitle: 'Rising Power',
			desc: '<p>Strong leadership has taken control of the tribe. Upgrade to a Minor Faction by giving a banner and name.</p>',
			img: img('8/2'),
		},
		4: {
			title: 'Expand',
			subtitle: 'Territorial Gain',
			desc: '<p>Add a settlement.</p>',
			img: img('8/2'),
		},
		5: {
			title: 'Floating Village',
			subtitle: 'Marine Outpost',
			desc: '<p>Strap some ships together and create a floating village in a nearby sea or lake.</p>',
			img: img('8/2'),
		},
		6: {
			title: 'Invasion',
			subtitle: 'Mighty Conquest',
			desc: '<p>A mighty leader has mustered together enough force to attack and take a town. Take one nearby settlement and switch control to the tribe.</p>',
			img: img('8/2'),
		},
	},
	// ==== Hive (23) ====
	{
		1: {
			title: 'Swarm',
			subtitle: 'Hive Pulse',
			desc: '<p>A new queen has taken a large group to settle a new hive. Place a new hive somewhere else on the map.</p>',
			img: img('8/1'),
		},
		2: {
			title: 'Expand',
			subtitle: 'Hive Growth',
			desc: '<p>Add a new hive settlement/den/nest nearby.</p>',
			img: img('8/1'),
		},
		3: {
			title: 'Raid',
			subtitle: 'Territorial Onslaught',
			desc: '<p>Attack a nearby settlement. Roll 1d6 for result. Odd = settlement destroyed, Even = town defended.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 27, amount: 1, clearRolls: false },
				},
			],
			img: img('8/1'),
		},
		4: {
			title: 'Infest',
			subtitle: 'Assimilation Complete',
			desc: '<p>Attack and replace a nearby settlement with a new nest/settlement of the hive.</p>',
			img: img('8/1'),
		},
		5: {
			title: 'Spawn',
			subtitle: 'Legendary Brood',
			desc: '<p>The hive has bred an incredible new foe. Create a new Legendary Monster.</p>',
			img: img('8/1'),
		},
		6: {
			title: 'Expand',
			subtitle: 'Hive Territory',
			desc: '<p>Add a new hive settlement/den/nest nearby.</p>',
			img: img('8/1'),
		},
	},
	// ==== Magic User (24) ====
	{
		1: {
			title: 'Minions',
			subtitle: 'Minions Unite',
			desc: '<p>A group of followers has joined. Build a settlement camp nearby.</p>',
			img: img('8/4'),
		},
		2: {
			title: 'Raid',
			subtitle: 'Sorcerous Raid',
			desc: '<p>Attack a nearby settlement. Roll 1d6 for result. Odd = settlement destroyed, Even = town defended.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 27, amount: 1, clearRolls: false },
				},
			],
			img: img('8/4'),
		},
		3: {
			title: 'Expand',
			subtitle: 'Enchanting Expansion',
			desc: '<p>Followers are flocking to the power (choice or force?), build a new resource camp settlement nearby.</p>',
			img: img('8/4'),
		},
		4: {
			title: 'Construction',
			subtitle: 'Arcane Constructions',
			desc: '<p>A monolith, shrine or portal? Draw in a new construction.</p>',
			img: img('8/4'),
		},
		5: {
			title: 'Alter Land',
			subtitle: 'Twisted Terraforming',
			desc: '<p>Eternal winter, forest grow, burned lands? Alter the lands nearby by adding a geography or destroying part of one.</p>',
			img: img('8/4'),
		},
		6: {
			title: 'Corruption',
			subtitle: 'Veil of Corruption',
			desc: '<p>Foul or corrupted magic is tainting the land. Darken the land, kill the forests, or spoil the water supplies nearby.</p>',
			img: img('8/4'),
		},
	},
	// ==== Cult / Lair / Order (25) ====
	{
		1: {
			title: 'Expand',
			subtitle: "Cult's Dominion",
			desc: '<p>Add a settlement.</p>',
			img: img('8/5'),
		},
		2: {
			title: 'Worship',
			subtitle: 'Divine Devotion',
			desc: '<p>Draw a new Temple nearby and select a deity or create a new one.</p>',
			img: img('8/5'),
		},
		3: {
			title: 'Epic Construction',
			subtitle: 'Occult Marvels',
			desc: '<p>A new dungeon, tower, altar to a God? Draw in a new contruction nearby.</p>',
			img: img('8/5'),
		},
		4: {
			title: 'Infiltrate',
			subtitle: 'Infiltration Scheme',
			desc: '<p>The Cult has taken control of a nearby settlement, switch faction control to the cult.</p>',
			img: img('8/5'),
		},
		5: {
			title: 'Ransack',
			subtitle: 'Plundered Riches',
			desc: '<p>A nearby settlement has something valuable (gems, weapons, people). Draw in a camp nearby and describe the theft.</p>',
			img: img('8/5'),
		},
		6: {
			title: 'Expand',
			subtitle: "Cult's Dominion",
			desc: '<p>Add a settlement.</p>',
			img: img('8/5'),
		},
	},
	// ==== Monster (26) ====
	{
		1: {
			title: 'Raid',
			subtitle: 'Rampaging Assault',
			desc: '<p>Attack a nearby settlement. Roll 1d6 for result. Odd = settlement destroyed, Even = town defended.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 27, amount: 1, clearRolls: false },
				},
			],
			img: img('8/2'),
		},
		2: {
			title: 'Treasure',
			subtitle: 'Hoarded Riches',
			desc: '<p>Whether by offering, sacrifice or assault, the moster has accumulated vast amounts of wealth. Draw in a tresure hold or gold laden lair.</p>',
			img: img('8/2'),
		},
		3: {
			title: 'Raid',
			subtitle: 'Terrifying Onslaught',
			desc: '<p>Attack a nearby settlement. Roll 1d6 for result. Odd = settlement destroyed, Even = town defended.</p>',
			extraBtns: [
				{
					component: 'TheButton',
					text: 'War!',
					data: { stage: 27, amount: 1, clearRolls: false },
				},
			],
			img: img('8/2'),
		},
		4: {
			title: 'Ascension',
			subtitle: 'Divine Reverence',
			desc: "<p>Fantastic stories are being spread about the monster. Add it to the list of Gods and select a domain and symbol for it (give it a name if you haven't yet).</p>",
			img: img('8/2'),
		},
		5: {
			title: 'Lair Building',
			subtitle: 'Monstrous Abode',
			desc: '<p>The moster is settling in. They or their followers are creating a proper lair or den. Draw in a home, cave, tower or sanctum.</p>',
			img: img('8/2'),
		},
		6: {
			title: 'Fury',
			subtitle: 'Wrathful Havoc',
			desc: '<p>The monster has unleashed its rage onto a nearby settlement. Destroy and replace it with a ruin.</p>',
			img: img('8/2'),
		},
	},
	// ==== d6 (27) ====
	{
		1: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		2: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		3: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		4: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		5: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		6: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		7: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		8: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		9: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		10: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		11: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		12: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		13: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		14: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		15: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		16: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		17: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
		18: {
			title: '',
			subtitle: '',
			desc: '<p></p>',
			img: img('8/2'),
		},
	},
	// ==== End of Extra rolls ====
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
