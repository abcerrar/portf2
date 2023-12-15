import folders from "../../assets/folders";
import Home from "../../pages/home/Home";

class Commands_controller{
	constructor(path){
		this.path = path;
		
		this.commands = {
			help: {
				desc: "Muestra ayuda",
				function: this.showHelp.bind(this)
			},
			man: {
				desc: "Muestra ayuda",
				function: this.showHelp.bind(this),
				repetido: true
			},
			pwd: {
				desc: "Sirve para saber la ruta actual",
				function: this.showPath.bind(this),
			},
			ls: {
				desc: "Muestra el contenido de un directorio",
				function: this.showLs.bind(this),
			},
			dir: {
				desc: "Muestra el contenido de un directorio",
				function: this.showLs.bind(this),
				repetido: true,
			},
			cd: {
				desc: "Te mueves hacia el directorio especificado",
				function : this.cd.bind(this),
			},
			clear: {
				desc: "Limpia la pantalla",
				function: this.clear,
			},
			cls: {
				desc: "Limpia la pantalla",
				function: this.clear,
				repetido: true
			},
			exec: {
				desc: "Ejecuta un script",
				function: this.execute.bind(this),
			},
			sh: {
				desc: "Ejecuta un script",
				function: this.execute.bind(this),
				repetido: true
			},
			bash: {
				desc: "Ejecuta un script",
				function: this.execute.bind(this),
				repetido: true
			},
			
		}
	}
	executeCommand(command = "", args = []) {
		if (this.commands.hasOwnProperty(command)) {
			return this.commands[command].function(args);
		} else {			
			return <p>{`Comando '${command}' no encontrado. Escribe 'help' para ver la lista de comandos disponibles.`}</p>;
		}
	}

	showHelp(args){
		const ayuda = [];
		if (args !== undefined &&  args[1] !== undefined)
			if (this.commands[args[1]] !== undefined)
				return (<p>{this.commands[args[1]].desc}</p>)
			else
				return (this.showHelp());
		else{
			ayuda.push(<p>Lista de comandos disponibles</p>);
			for(const command in this.commands){
				if (this.commands[command].repetido !== true)
					ayuda.push(<p>{command} --&gt; {this.commands[command].desc}</p>);
			}			
			return (<div>{ayuda}</div>);
		}
	}
	showPath(){
		return <p>{(this.path)}</p>
	}
	clear(){
		window.location.reload();
	}
	execute(args){
		console.log(this.find_folder(this.path + '/' + args[1]))
		if (args !== undefined && args[1] !== undefined)
			return (this.find_folder(this.path + '/' + args[1]).code)
			// return (<p>{`Ejecutando ${args[1]}`}</p>)
		else
			return (<p>Debes introducir un argumento</p>)
	}
	cd(args){
		const path_arg = args[1] !== undefined ? args[1] : this.path;
		const currentPath = window.location.pathname;	
		let newPath = window.location.pathname;

		if (args[1] === undefined)
			newPath='/terminal';
		else if (args[1] === '..') {
			const parts = newPath.split('/').filter(Boolean);
			parts.pop();
			newPath = '/' + parts.join('/');
		}
		else{			
			const return_value = this.find_folder(this.path + '/' + path_arg);
			console.log(return_value)
			if(return_value[0] === "error")
				return (<p>{`${return_value[1]}`}</p>)
			if (return_value.type === 'e')
				return <p>{`${return_value.name} no es un directorio`}</p>;
			else
				newPath = currentPath.endsWith('/') ? currentPath + path_arg : currentPath + '/' + path_arg; 
		}
		const event = new Event('urlChanged');
		window.history.pushState(null, null, newPath);
		window.dispatchEvent(event);
	}
	showLs(args){
		let path_arg = this.path;
		if (args[1] !== undefined){
			if (args[1] === '..') {
				const parts = path_arg.split('/').filter(Boolean);
				parts.pop();
				path_arg = '/' + parts.join('/');
			}else
				path_arg = this.path + '/' + args[1];
		}
		const current_folder = this.find_folder(path_arg);
		if (current_folder[0] === 'error')
			return (<p>{`${current_folder[1]} no existe`}</p>) 
		
		return this.print_folder_content(current_folder);
	}
	print_folder_content(folder){
		if (!Array.isArray(folder)) 
			folder = [folder];
		const files = [];
		for (const file of folder){	
			if (file.type === 'd')
				files.push(<p className="dir">{file.name}</p>);
			if (file.type === 'e')
				files.push(<p className="exec">{file.name}</p>);
		}
		return (files);
	}
	find_folder(path = ""){
		let aux;
		let current_folder = folders.content;
		const path_splited = path.split('/').filter((item) => item !== '');
		//check if exists
		for (const folder_name of path_splited){	
			aux = current_folder.find(folder => folder.name === folder_name);				
			if (aux !== undefined && aux.content && aux)
				current_folder = aux.content;
			else{				
				if (!aux)
					return (["error", folder_name]);
				if (aux.type === 'e')
					return (aux);
				if (!aux.content)
					return (["error", `${aux.name} no es un directorio`]);
			}
		}		
		return (current_folder);
	}
}

export default function Commands(props){
	const c = new Commands_controller(props.path);

	return (
		<div className="command_output">
			{c.executeCommand(props.command, props.args)}			
		</div>
	)
}