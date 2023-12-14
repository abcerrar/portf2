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
		else
			newPath = currentPath.endsWith('/') ? currentPath + path_arg : currentPath + '/' + path_arg; 
		const event = new Event('urlChanged');
		window.history.pushState(null, null, newPath);
		window.dispatchEvent(event);
	}
	showLs(args){
		let current_folder = folders.content;
		let aux = undefined;
		const path_arg = args[1] !== undefined ? args[1] : this.path;
		const path_splited = path_arg.split('/').filter((item) => item !== '');

		// console.log(path_splited)
		for (const foldre_name of path_splited){	
			aux = current_folder.find(folder => folder.name === foldre_name);
			if (aux !== undefined && aux.content && aux)
				current_folder = aux.content;
			else
				return (<p>Ese directorio no existe</p>)			
		}		
		return this.print_folder_content(current_folder);
	}
	print_folder_content(folder){
		const files = [];
		for (const file of folder){
			console.log(file)
			files.push(<p>{file.name}</p>);
		}
		return (files);
	}
	search_in_folder(folder = {}, currFolder = ""){
		for (const folder in folders){
			console.log(folder)
		}
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