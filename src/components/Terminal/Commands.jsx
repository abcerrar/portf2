
class Commands_controller{
	constructor(){
		this.commands = {
			help: this.showHelp,
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
}

export default function Commands(props){

	const c = new Commands_controller();

	return (
		<div>
			{c.executeCommand(props.command)}	
		</div>
	)
}