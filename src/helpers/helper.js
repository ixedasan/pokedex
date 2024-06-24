import { getEvolutionsData } from './services'

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

const getDescriptions = data => data.flavor_text_entries[1].flavor_text

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

	const promises = getEvolutionsData(evolutions)

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

export {
	evolutionsInfo,
	formatAbilities,
	formatStats,
	formatTypes,
	getDescriptions,
	getEvotions,
	getPokemonImage,
}
