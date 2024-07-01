import { IoMdClose } from 'react-icons/io'
import { colorType } from '../constants/colors'
import { PokemonDetail } from "./PokemonDetail"

export const Modal = ({ showModal, closeModal, pokemon }) => {
	return (
		<div
			className={`fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500 ${
				showModal ? 'visible opacity-100' : 'invisible opacity-0'
			} ${colorType[pokemon?.types[0]]}`}
		>
			<button
				onClick={closeModal}
				className='absolute top-5 right-4 bg-white p-1 rounded-lg hover:opacity-80 transition-opacity'
			>
				<IoMdClose size={24} />
			</button>
			<div
				className={`absolute w-full h-[85%] bg-white rounded-t-3xl text-center transition-all duration-500 ${
					showModal ? 'bottom-0' : '-bottom-full'
				}`}
			>
				<PokemonDetail pokemon={pokemon} />
			</div>
		</div>
	)
}
