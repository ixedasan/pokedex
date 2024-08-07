import axios from 'axios'

const formatStats = stats => {
	const nameTypes = {
		hp: 'HP',
		attack: 'ATK',
		defense: 'DEF',
		'special-attack': 'SpA',
		'special-defense': 'SpD',
		speed: 'SPD',
	}

	const newStats = stats.map(({ stat, base_stat }) => ({
		name: nameTypes[stat.name],
		base_stat,
	}))

	newStats.push({
		name: 'TOT',
		base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc, 0),
	})

	return newStats
}

const formatTypes = types => types.map(type => type.type.name)

const formatAbilities = abilities =>
	abilities.map(ability => ability.ability.name)

const getDescriptions = data => {
	const englishEntry = data.flavor_text_entries.find(
		entry => entry.language.name === 'en'
	)
	if (!englishEntry) {
		return 'No description available'
	}
	// eslint-disable-next-line no-control-regex
	return englishEntry.flavor_text.replace(/[\x00-\x1F\x7F-\x9F]/g, ' ')
}

const getEvotions = async evolution => {
	const evolutions = []
	let chain = evolution.chain

	do {
		const evolutionDetails = chain['evolution_details'][0]

		evolutions.push({
			name: chain.species.name,
			min_level: evolutionDetails?.min_level ?? 1,
		})

		chain = chain['evolves_to'][0]
	} while (chain)

	const promises = evolutions.map(
		async evolution =>
			await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`)
	)

	try {
		const response = await Promise.allSettled(promises)
		evolutionsInfo(response, evolutions)
	} catch (error) {
		console.error(error)
	}

	return evolutions
}

const evolutionsInfo = (response, evolutions) => {
	response.forEach((res, index) => {
		if (res.status === 'fulfilled') {
			evolutions[index].image = res.value.data.sprites.front_default
			evolutions[index].info = res.value.data
		}
	})
}

const getPokemonImage = sprites =>
	sprites.versions?.['generation-v']?.['black-white']?.animated
		?.front_default || sprites.front_default

const getVariations = async species => {
	const variations = await Promise.all(
		species.varieties.slice(1).map(async variety => {
			const { data } = await axios.get(variety.pokemon.url)
			return {
				name: variety.pokemon.name,
				image: data.sprites.front_default,
				info: data,
			}
		})
	)
	return variations
}

export {
	evolutionsInfo,
	formatAbilities,
	formatStats,
	formatTypes,
	getDescriptions,
	getEvotions,
	getPokemonImage,
	getVariations,
}
