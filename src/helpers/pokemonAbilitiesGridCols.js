export const getAbilitiesGridCols = length => {
	if (length >= 3) return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-1'
	if (length === 2) return 'grid-cols-2'
	return 'grid-cols-1'
}
