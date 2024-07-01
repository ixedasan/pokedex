import { PokemonDetail } from './PokemonDetail'

export const Aside = ({ pokemon, isLoading }) => {
	return (
		<div className='h-screen sticky hidden lg:block top-0'>
			<div
				className={`absolute z-10 w-full h-[85%] bottom-0 rounded-t-3xl text-center bg-white transition-all duration-500 ${
					pokemon && !isLoading ? 'left-0' : 'left-[50vw]'
				}`}
			>
				<PokemonDetail pokemon={pokemon} />
			</div>
			<div
				className={`absolute z-10 w-full h-[85%] bottom-0 rounded-t-3xl text-center bg-white grid place-content-center transition-all duration-500 ${
					pokemon ? 'left-[50vw]' : 'left-0'
				}`}
			>
				<div className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[70%]'>
					<img
						className='disable_blur'
						src='./images/unselected-pokemon.png'
						alt=''
					/>
				</div>
				<span className='text-gray-400 text-lg px-20'>Select a Pokemon</span>
			</div>
			<div className='absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2'>
				<img
					className='animate-spin-slow'
					src='./images/pokeball-loader.png'
					alt=''
				/>
			</div>
		</div>
	)
}
