export default function TerminalPrompt(props){
	return (
		<p id="hola">
			{<span>{props.username}:</span>} /{props.path}$&nbsp;

		</p>
	);
}