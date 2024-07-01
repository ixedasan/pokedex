import axios from 'axios'
import { useEffect, useMemo, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { PokemonList } from './PokemonList'

const INITIAL_LIMIT = 40
const INCREASE_LIMIT = 20

export const Main = () => {
	const [pokemons, setPokemons] = useState([])
	const [search, setSearch] = useState('')
	const [limit, setLimit] = useState(INITIAL_LIMIT)

	const loadMoreRef = useRef()
	const entry = useIntersectionObserver(loadMoreRef, {})
	const isVisible = !!entry?.isIntersecting

	const filteredPokemons = useMemo(
		() => pokemons.filter(pokemon => pokemon.name.includes(search)),
		[pokemons, search]
	)

	const handleChangeSearch = e => setSearch(e.target.value.toLowerCase().trim())

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=1302')
			.then(({ data }) => setPokemons(data.results))
			.catch(error => console.error(error))
	}, [])

	useEffect(() => {
		const maxLimit = filteredPokemons.length
		if (isVisible && maxLimit !== 0) {
			const newLimit = limit + INCREASE_LIMIT
			newLimit > maxLimit ? setLimit(maxLimit) : setLimit(newLimit)
		}
	}, [isVisible])

	useEffect(() => {
		setLimit(INITIAL_LIMIT)
	}, [search])

	return (
		<div className='p-5'>
			<form>
				<div className='flex p-4 bg-white rounded-xl shadow-md text-lg'>
					<input
						className='outline-none flex-1'
						type='text'
						autoComplete='off'
						name='search'
						placeholder='Search'
						onChange={handleChangeSearch}
					/>

					<button
						type='button'
						className='p-2 bg-lime-500 md:hover:bg-lime-600 transition-colors rounded-xl shadow-lime-500/50 shadow-md lg:hidden '
					>
						<IoIosSearch color='white' size={24} />
					</button>
				</div>
			</form>
			<PokemonList pokemons={filteredPokemons.slice(0, limit)} />
			<span ref={loadMoreRef}></span>
		</div>
	)
}
