const folders = {
	name: "root",
	type: "d",
	content: [
		{
			name: "home",
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
					name: 'test2.sh', type: 'e'
				}
			]
		},
		{
			name: "aboutme",
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
			name: "projects",
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