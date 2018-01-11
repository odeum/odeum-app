export function spanRowCalc(grid, gridName) {
	var rows = 0
	var grids = grid.split('"')
	grids = grids.filter(c => c.length > 0)
	grids.forEach((child, i) => {
		console.log(child)
		if (child.includes(gridName))
			rows = rows + 1
	})
	console.log('rows', rows)
	return rows
}

export function spanCalc(grid, gridName, pos) {
	var r = 0
	var col = 0
	var grids = grid.split('"')
	grids = grids.filter(c => c.length > 0)
	grids.forEach((child, row) => {
		child.split(' ').forEach((c, column) => {
			if (c.includes(gridName))
			{
				r = r + 1 
				col = col + 1
			}
		})
	})
	if (pos === 'column')
		return col
	else
		return r
}
export function rowColCalc(grid, gridName, pos) {
	var r = 0
	var col = 0
	var grids = grid.split('"')
	grids = grids.filter(c => c.length > 0)
	grids.forEach((child, row) => {
		child.split(' ').forEach((c, column) => {
			if (c.includes(gridName))
			{
				r = r === 0 ? row + 1 : r
				col = col === 0 ? column + 1 : col
			}
		})
	})
	if (pos === 'column')
		return col
	else
		return r
}
export const convertLabelToRoute = (label) => {
	let route = label.replace(/\s+/g, '-').toLowerCase()
	route = '/' + route
	return route
}

export const isExact = (route) => {
	if (route === "" || route === "/")
		return true
	else 
		return false
}