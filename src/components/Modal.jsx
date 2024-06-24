import { IoMdClose } from 'react-icons/io'

export const Modal = ({ showModal, closeModal }) => {
	return (
		<div
			className={`fixed top-0 left-0 right-0 h-screen bg-lime-400 transition-all duration-500 ${
				showModal ? 'visible opacity-100' : 'invisible opacity-0'
			}`}
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
				pokemon
			</div>
		</div>
	)
}
