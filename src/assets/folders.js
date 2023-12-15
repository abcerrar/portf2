/* eslint-disable no-template-curly-in-string */
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";

const folders = {
	name: "root",
	type: "d",
	content: [
		{
			name: "home",
			type: "d",
			content: [
				{
					name: 'home.sh', type: 'e', code: <Home/>, 
					// eslint-disable-next-line no-multi-str
					txt: "\
					clear#\
					declare -a presentation=(#\
						+----------------------------------------+#\
						|        Presentación de Contacto        |#\
						|----------------------------------------|#\
						| Nombre: David Colera                  |#\
						| Teléfono: 666555444                   |#\
						| Email: dcp@gmail.com                  |#\
						+----------------------------------------+#\
					)#\
					for line in ${presentation[@]}; do#\
						echo $line#\
						sleep 1#\
					done"
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
				{
					name: "fichero.txt",
					type: "f",
					txt: "contenido del fichero"
				}
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
					name: 'projects.sh', type: 'e', code: <Projects/>, txt: "undone" 
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
					name: 'skills.sh',	type: 'e', code: <Skills/>, txt: "undone"
				},
				{
					name: 'test2', type: 'e'
				},
				{
					name: 'tetst3', type: 'e'
				}
			]
		},
		{
			name: "contact",
			type: "d",
			content: [
				{
					name: 'contact.sh',	type: 'e', code: <Contact/>, txt: "undone"
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