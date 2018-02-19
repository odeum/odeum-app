import { create } from 'apisauce'

const api = create({
	baseURL: `https://help.odeum.com/help/rest/`,
})


export const GetHelpItem = async (helpID) => {
	// var data = await api.get('/photos/8')
	// 	.then((response) => {
	// 		if (response.ok)
	// 			return response.data
	// 	})
	return obj
}

const obj = {
	app_id: 1,
	help_id: 1234,
	locale_content: {
		'en': {
			help_title: 'This is the title of the help entry',
			help_description: 'This is the description of the help entry',
			help_content:
				[
					{ type: 'text', title: '', description: '' },
					{ type: 'image', title: '', description: '', url: '' },
					{ type: 'image', title: '', description: '', url: '' },
					{ type: 'video', title: '', description: '', url: '' },
					{ type: 'link', title: '', description: '', url: '' },
					{ type: 'svg', title: '', description: '', url: '' },
					{ type: 'pdf', title: '', description: '', url: '' },
					{ type: 'document', title: '', description: '', url: '' },
				]
		}
	}
}
