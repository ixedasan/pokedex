import axios from 'axios'
import { useEffect, useState } from 'react'
import { colorType } from '../constants/colors'

export const PokemonCard = ({ pokemonURL }) => {
	const [pokemon, setPokemon] = useState({})



	useEffect(() => {
		axios
			.get(pokemonURL)
			.then(({ data }) => setPokemon(data))
			.catch(error => console.error(error))
	}, [])

	return (
		<div className='relative pb-3 bg-white font-semibold text-center capitalize rounded-3xl border border-transparent hover:border-gray-200 shadow-lg shadow-slate-400/10 cursor-pointer group grid gap-2'>
			<div className='h-9'>
				<img
					className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform disable_blur'
					src={pokemon.sprites?.front_default}
					alt={pokemon.name}
				/>
			</div>
			<span className='text-sm text-gray-400'>№ {pokemon?.id}</span>
			<h3 className='text-lg'>{pokemon?.name}</h3>
			<ul className='flex gap-2 justify-center'>
				{pokemon.types?.map(({ type }) => (
					<li className={`text-white text-sm p-1 rounded-md px-2 ${colorType[type.name]}`} key={type.name}>
						{type.name}
					</li>
				))}
			</ul>
		</div>
	)
}