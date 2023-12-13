import { useEffect, useState } from "react";
import TerminarWrite from "../terminalWrite/TerminalWrite";

export default function TerminalPrompt(props){

	let txt;
	
	const delete_listenners = (e) => {
		if (e.key === 'ArrowUp') {
			e.preventDefault();
		}
	}
	
	if (props.focus === true){
		txt = <input type="text" className="input_prompt" id="input" autoComplete="off" onKeyDown={delete_listenners}></input>;
	}
	else
	txt = <p className="white">{props.txt}</p>;

	useEffect(() => {
		window.document.getElementById('input').value=props.value;
		const input = window.document.getElementById("input");
		if (input !== null)
			input.focus();
	})

	return (
		<p className="terminalPrompt">
			{<span>{props.username}:</span>} {props.path}$&nbsp;
			{txt}
		</p>
	);
}