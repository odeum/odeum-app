export const convertLabelToRoute = (label) => {
	let route = label.replace(/\s+/g, '-').toLowerCase()
	route = '/' + route
	return route
}
