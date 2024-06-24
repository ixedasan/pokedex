import axios from 'axios'

export const getEvolutionsData = evolutions => {
	return evolutions.map(
		async evolution =>
			await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`)
	)
}
