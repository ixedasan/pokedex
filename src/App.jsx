import { Aside } from './components/Aside'
import { Pokemons } from './components/Pokemons'

function App() {
	return (
		<>
			<div className='bg-[#F6F8FC] font-lato h-screen overflow-y-auto'>
				<div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] '>
					<Pokemons />
					<Aside />
				</div>
			</div>
		</>
	)
}

export default App
