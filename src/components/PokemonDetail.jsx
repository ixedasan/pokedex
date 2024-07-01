import { colorStat, colorType } from '../constants/colors'
import { getAbilitiesGridCols } from '../helpers/pokemonAbilitiesGridCols'
import { Evolutions } from './Evolutions'

export const PokemonDetail = ({ pokemon }) => {
	return (
		<>
			<div className='absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%] '>
				<img
					src={pokemon?.image}
					alt={pokemon?.name}
					className='disable_blur'
				/>
			</div>
			<div className='overflow-y-auto px-4 pt-12 grid gap-2 content-start h-full capitalize disable_scrollbar'>
				<span className='text-sm text-gray-400'>№ {pokemon?.id}</span>
				<h2 className='font-bold text-2xl'>{pokemon?.name}</h2>
				<ul className='flex gap-2 justify-center'>
					{pokemon?.types.map(type => (
						<li
							className={`text-white text-sm p-1 rounded-md px-2 ${colorType[type]}`}
							key={type}
						>
							{type}
						</li>
					))}
				</ul>
				<div>
					<h4 className='font-bold'>Description</h4>
					<p className='text-gray-400 normal-case'>
						{pokemon?.description}
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div className='grid gap-2'>
						<h4 className='font-bold'>Height</h4>
						<span className='block bg-gray-100 p-1 rounded-xl'>
							{pokemon?.height}
						</span>
					</div>
					<div className='grid gap-2'>
						<h4 className='font-bold'>Weight</h4>
						<span className='block bg-gray-100 p-1 rounded-xl'>
							{pokemon?.weight}
						</span>
					</div>
				</div>
				<div className='grid gap-2'>
					<h4 className='font-bold'>Abilities</h4>
					<ul
						className={`grid gap-4 ${getAbilitiesGridCols(
							pokemon?.abilities.length
						)}`}
					>
						{pokemon?.abilities.map((ability, index) => (
							<li key={index}>
								<span className='block bg-gray-100 p-1 rounded-xl'>
									{ability}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className='grid gap-2'>
					<h4 className='font-bold'>Stats</h4>
					<ul className='flex justify-center gap-2 md:gap-3 flex-wrap'>
						{pokemon?.stats.map(stat => (
							<li
								className={`rounded-full p-1 ${colorStat[stat.name]}`}
								key={stat.name}
							>
								<div className='w-[30px] aspect-square rounded-full grid place-content-center'>
									<span className='font-semibold text-white text-sm'>
										{stat.name}
									</span>
								</div>
								<span className='font-semibold'>{stat.base_stat}</span>
							</li>
						))}
					</ul>
				</div>
				<div className='grid gap-2'>
					<h4 className='font-bold'>Evolution</h4>
					<Evolutions evolutions={pokemon?.evolutions ?? []} />
				</div>
			</div>
		</>
	)
}
