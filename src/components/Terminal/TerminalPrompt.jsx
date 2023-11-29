import { useEffect } from "react";
import TerminarWrite from "../terminalWrite/TerminalWrite";

export default function TerminalPrompt(props){

	let txt;
	if (props.txt === undefined)
		txt = <input type="text" className="input_prompt" id="input"></input>;
	else
		txt = <p className="white">{props.txt}</p>;

	useEffect(() => {
		window.document.getElementById("input").focus();
	}, [])

	return (
		<p className="terminalPrompt">
			{<span>{props.username}:</span>} /{props.path}$&nbsp;
			{txt}
		</p>
	);
}