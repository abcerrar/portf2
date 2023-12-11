
class Commands_controller{
	constructor(path){
		this.path = path;
		
		this.commands = {
			help: this.showHelp,
			pwd: this.showPath.bind(this),
		}
	}
	executeCommand(command) {
		if (this.commands.hasOwnProperty(command)) {
			return this.commands[command]();
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
}

export default function Commands(props){

	const c = new Commands_controller(props.path);

	return (
		<div>
			{c.executeCommand(props.command)}	
		</div>
	)
}