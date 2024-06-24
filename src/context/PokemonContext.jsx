import axios from 'axios'
import { createContext, useState } from 'react'
import {
	formatAbilities,
	formatStats,
	formatTypes,
	getDescriptions,
	getEvotions,
	getPokemonImage,
} from '../helpers/helper'

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
	const [detail, setDetail] = useState(null)
	const [showDetail, setShowDetail] = useState(false)

	const showPokemon = async info => {
		const { data: dataSpecies } = await axios.get(info.species.url)
		const { data: dataEvolution } = await axios.get(
			dataSpecies.evolution_chain.url
		)

		const { id, name, height, weight, stats, types, abilities } = info
		const evolutions = await getEvotions(dataEvolution)

		setDetail({
			id,
			name,
			height,
			weight,
			stats: formatStats(stats),
			types: formatTypes(types),
			abilities: formatAbilities(abilities),
			description: getDescriptions(dataSpecies),
			evolutions,
			image: getPokemonImage(info.sprites),
		})
		setShowDetail(true)
	}

	const closeDetail = () => {
		setShowDetail(false)
	}

	return (
		<PokemonContext.Provider
			value={{
				detail,
				showDetail,
				showPokemon,
				closeDetail,
			}}
		>
			{children}
		</PokemonContext.Provider>
	)
}

export { PokemonContext, PokemonProvider }
