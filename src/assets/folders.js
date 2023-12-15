import Home from "../pages/home/Home";

const folders = {
	name: "root",
	type: "d",
	content: [
		{
			name: "home",
			type: "d",
			content: [
				{
					name: 'home.sh', type: 'e', code: <Home/>
				},
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
			]
		},
		{
			name: "aboutme",
			type: "d",
			content: [
				{
					name: 'test1',	type: 'e'
				},
				{
					name: 'test2', type: 'e'
				}
			]
		},
		{
			name: "projects",
			type: "d",
			content: [
				{
					name: 'test1',	type: 'e'
				},
				{
					name: 'test2', type: 'e'
				}
			]
		},
		{
			name: "skills",
			type: "d",
			content: [
				{
					name: 'test1',	type: 'e'
				},
				{
					name: 'test2', type: 'e'
				},
				{
					name: 'tetst3', type: 'e'
				}
			]
		}
	]
}
export default folders;