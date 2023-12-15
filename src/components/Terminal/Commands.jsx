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
			cat: {
				desc: "Permite leer el contenido de un fichero",
				function: this.cat.bind(this),
			},
			read: {
				desc: "Permite leer el contenido de un fichero",
				function: this.cat.bind(this),
				repetido: true
			},
			vim: {
				desc: "Permite ver y editar un fichero",
				function: this.vim.bind(this),
			},
			nano: {
				desc: "Permite leer el contenido de un fichero",
				function: this.vim.bind(this),
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
	vim(){
		return(<p>Aún no hay ningún editor de texto disponible, pero puedes consultar el contenido de un fichero usando 'cat'.</p>)
	}
	execute(args){
		if (!args || args === undefined || !args[1] ||args[1] === undefined)
			return (<p>Debes introducir un argumento</p>)
		
		const ejecutable = this.find_folder(this.path + '/' + args[1]);
		if (Array.isArray(ejecutable))
			return (<p>{`${args[1]} es un directorio`}</p>)
		if (ejecutable.type === 'f')
			return (<p>{`${args[1]} es un fichero`}</p>)
		return ejecutable.code;
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
			
			if(return_value[0] === "error")
				return (<p>{`${return_value[1]} no existe`}</p>)
			if (return_value.type === 'e' || return_value.type === 'f')	
				return <p>{`${return_value.name} no es un directorio`}</p>;
			else
				newPath = currentPath.endsWith('/') ? currentPath + path_arg : currentPath + '/' + path_arg; 
		}
		window.history.pushState(null, null, newPath);
		window.dispatchEvent(new Event('urlChanged'));
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
	cat(args){
		if (args[1] === undefined)
			return (<p>Debes introducir el nombre de un fichero</p>)
		const file = this.find_folder(this.path + '/' +args[1]);
		//if is directory
		if (!file || file === undefined)
			return (<p>{`Error al intentar leer el contenido de ${args[1]}`}</p>);
		if(Array.isArray(file)){
			if (file[0] === 'error')
				return (<p>{`${file[1]} no existe`}</p>)
			return (<p>{`${args[1]} es un directorio`}</p>);
		}
		if (file.type === 'f' || file.type === 'e'){
			const content = file.txt.split('#');
			const read = [];
			const countTabs = (content[0].match(/\t/g) || []).length;
			for (let line of content){
				line = line.substring(countTabs, line.length );
				read.push(<pre>{line}</pre>)
			}

			return (<div>{read}</div>)
		}
		return (<p>Error desconocido</p>);
		
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
			if (file.type === 'f')
				files.push(<p className="file">{file.name}</p>);
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
				if (aux.type === 'e' || aux.type === 'f')
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