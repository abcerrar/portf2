import TerminarWrite from "../terminalWrite/TerminalWrite";

export default function TerminalPrompt(props){
	return (
		<p className="terminalPrompt">
			{<span>{props.username}:</span>} /{props.path}$&nbsp;
			<TerminarWrite txtSpeed={20}><p id='p1' className='userText'>{props.txt}</p></TerminarWrite>

		</p>
	);
}