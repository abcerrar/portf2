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

		// console.log(folders)

		const event = new Event('urlChanged');
		window.history.pushState(null, null, newPath);
		window.dispatchEvent(event);
	}
	showLs(args){
		const path_splited = this.path.split('/').filter((item) => item !== '');
		const current_folder = path_splited[path_splited.length - 1]
		const path_arg = args[1] !== undefined ? args[1] : this.path;

		for(let key in folders["home"]["content"]){
			// console.log(folders["home"]["content"][key]["name"])
		}
	}
}

export default function Commands(props){
	const c = new Commands_controller(props.path);

	return (
		<div>
			{c.executeCommand(props.command, props.args)}
		</div>
	)
}