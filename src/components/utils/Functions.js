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
