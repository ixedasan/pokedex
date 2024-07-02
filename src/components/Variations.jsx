import usePokemonContext from '../hooks/usePokemonContext'

export const Variations = ({ variations }) => {
	const { showPokemon } = usePokemonContext()

	if (variations.length === 0) {
		return (
			<p className='text-gray-400 normal-case mb-4'>
				Pokemon has no variations
			</p>
		)
	}

	return (
		<div className='flex justify-center items-center flex-wrap'>
			{variations.map((variation, index) => (
				<div key={index}>
					<button
						className='rounded-2xl hover:bg-gray-100 transition-colors'
						onClick={() => showPokemon(variation.info)}
					>
						<div className='flex gap-2 items-center'>
							<img src={variation.image} alt='' />
							<div className='bg-gray-100 font-bold text-sm p-2 rounded-2xl'>
								<p className='capitalize'>{variation.name}</p>
							</div>
						</div>
					</button>
				</div>
			))}
		</div>
	)
}
