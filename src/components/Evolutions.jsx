import usePokemonContext from '../hooks/usePokemonContext'

export const Evolutions = ({ evolutions }) => {
	const { showPokemon } = usePokemonContext()

	return (
		<div className='flex justify-center items-center flex-wrap'>
			{evolutions.map((evolution, index) => (
				<div key={index}>
					<button
						className='rounded-2xl hover:bg-gray-100 transition-colors'
						onClick={() => showPokemon(evolution.info)}
					>
						<div className='flex gap-2 items-center'>
							<div className='bg-gray-100 font-bold text-sm p-2 rounded-2xl'>
								<p className='capitalize'>
									{evolution.name}{' '}
									<span className='italic'>Lv.{evolution.min_level}</span>
								</p>
							</div>
							<img src={evolution.image} alt={evolution.name} />
						</div>
					</button>
				</div>
			))}
		</div>
	)
}
