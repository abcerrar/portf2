const folders = {
	name: "root",
	type: "d",
	content: [
		{
			name: "Home",
			type: "d",
			content: [
				{
					name: 'test1',	
					type: 'd',
					content: [
						{
							name: 'hola',	type: 'e'
						},
						{
							name: 'adios', type: 'e'
						}
					]
				},
				{
					name: 'test2', type: 'e'
				}
			]
		},
		{
			name: "About Me",
			type: "d",
			content: [
				{
					name: 'tetst1',	type: 'e'
				},
				{
					name: 'tetst2', type: 'e'
				}
			]
		},
		{
			name: "Projects",
			type: "d",
			content: [
				{
					name: 'tetst1',	type: 'e'
				},
				{
					name: 'tetst2', type: 'e'
				}
			]
		}
	]
}
export default folders;