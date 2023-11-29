import { useEffect } from "react";
import TerminarWrite from "../../components/terminalWrite/TerminalWrite"
import './skills.scss'
import { useNavigate } from "react-router-dom";

export default function Skill(props){

	const color_style = {
		// backgroundColor: props.color,
		color: props.color,
	}
	const perc_level = "▮".repeat(props.value);

	return (
		<div className="single_skill">
			<p>{props.name}</p>
			<TerminarWrite txtSpeed={60}>
				<p id={props.name} style={color_style}>{perc_level}</p>
				
			</TerminarWrite>
		</div>
	)
}