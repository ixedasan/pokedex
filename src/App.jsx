import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { Modal } from './components/Modal'
import usePokemonContext from './hooks/usePokemonContext'

function App() {
	const { showDetail, closeDetail } = usePokemonContext()

	return (
		<>
			<div className='bg-[#F6F8FC] font-lato h-screen overflow-y-auto'>
				<div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] '>
					<Main />
					<Aside />
					<Modal showModal={showDetail} closeModal={closeDetail} />
				</div>
			</div>
		</>
	)
}

export default App
