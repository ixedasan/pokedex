import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { Modal } from './components/Modal'
import usePokemonContext from './hooks/usePokemonContext'

function App() {
	const { detail, showDetail, closeDetail, isLoading } = usePokemonContext()

	return (
		<>
			<div className='bg-[#F6F8FC] font-lato h-screen overflow-y-auto overflow-x-hidden'>
				<div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]'>
					<Main />
					<Aside pokemon={detail} isLoading={isLoading} />
					<Modal
						showModal={showDetail}
						closeModal={closeDetail}
						pokemon={detail}
					/>
				</div>
			</div>
		</>
	)
}

export default App
