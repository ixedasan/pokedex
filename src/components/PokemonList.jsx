import usePokemonContext from '../hooks/usePokemonContext'
import { PokemonCard } from './PokemonCard'

export const PokemonList = ({ pokemons }) => {
	const { showPokemon } = usePokemonContext()

	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] pt-16 gap-4 gap-y-14'>
			{pokemons.map(pokemon => (
				<PokemonCard
					key={pokemon.url}
					pokemonURL={pokemon.url}
					onClick={showPokemon}
				/>
			))}
		</div>
	)
}
