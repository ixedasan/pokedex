import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { PokemonList } from "./PokemonList"

export const Pokemons = () => {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=50')
			.then(({ data }) => setPokemons(data.results))
			.catch(error => console.error(error))
	}, [])

	return (
		<div className='p-5'>
			<form>
				<div className='flex p-4 bg-white rounded-xl shadow-md text-lg'>
					<input
						className='outline-none flex-1'
						type='text'
						placeholder='Search'
					/>
					<button className='p-2 bg-lime-500 md:hover:bg-lime-600 transition-colors rounded-xl shadow-lime-500/50 shadow-md'>
						<IoIosSearch color='white' size={24} />
					</button>
				</div>
			</form>
			<PokemonList pokemons={pokemons} />
		</div>
	)
}
