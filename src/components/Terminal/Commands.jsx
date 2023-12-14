import { useEffect } from "react";
import folders from "../../assets/folders";
import { useLocation } from "react-router-dom";

class Commands_controller{
	constructor(path){
		this.path = path;
		
		this.commands = {
			help: this.showHelp,
			pwd: this.showPath.bind(this),
			ls: this.showLs.bind(this),
			cd: this.cd.bind(this),
			clear: this.clear
		}
	}
	executeCommand(command = "", args = []) {
		if (this.commands.hasOwnProperty(command)) {
			return this.commands[command](args);
		} else {			
			return <p>{`Comando '${command}' no encontrado. Escribe 'help' para ver la lista de comandos disponibles.`}</p>;
		}
	}

	showHelp(){
		return <p>Ayuda</p>
	}
	showPath(){
		return <p>{(this.path)}</p>
	}
	clear(){
		window.location.reload();
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
				return (<p>{return_value[1]}</p>)
			else
				newPath = currentPath.endsWith('/') ? currentPath + path_arg : currentPath + '/' + path_arg; 
		}
		const event = new Event('urlChanged');
		window.history.pushState(null, null, newPath);
		window.dispatchEvent(event);
	}
	showLs(args){
		// let current_folder = folders.content;
		// let aux = undefined;
		let path_arg = this.path;
		if (args[1] !== undefined)
			path_arg = this.path + '/' + args[1];
		// const path_splited = path_arg.split('/').filter((item) => item !== '');
		
		// for (const folder_name of path_splited){	
		// 	aux = current_folder.find(folder => folder.name === folder_name);			
		// 	if (aux !== undefined && aux.content && aux)
		// 		current_folder = aux.content;
		// 	else
		// 		return (<p>Ese directorio no existe</p>)			
		// }		
		const current_folder = this.find_folder(path_arg);
		if (current_folder[0] === 'error'){
			return (<p>{current_folder[1]}</p>) 
		}
		return this.print_folder_content(current_folder);
	}
	print_folder_content(folder){
		const files = [];
		for (const file of folder){			
			files.push(<p>{file.name}</p>);
		}
		return (files);
	}
	find_folder(path = ""){
		let aux;
		let current_folder = folders.content;
		const path_splited = path.split('/').filter((item) => item !== '');
		console.log(path_splited)
		//check if exists
		for (const folder_name of path_splited){	
			
			aux = current_folder.find(folder => folder.name === folder_name);				
			if (aux !== undefined && aux.content && aux)
				current_folder = aux.content;
			else{
				console.log(aux)
				if (!aux)
					return (["error", "Ese directorio no existe"]);
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