import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import '../../style/general.scss'
import './home.scss'
import { useEffect } from "react";
import Terminal from "../../components/Terminal/Terminal";
import TerminarWrite from "../../components/terminalWrite/TerminalWrite";
import BorderAscii from "../../components/borderAscii/BorderAscii";

export default function Home(){

	return (
		<div className="homeContainer">
			<BorderAscii>
				<TerminarWrite txtSpeed={50}>
					<h1 id="1">Home</h1>
					<p id="2">Nombre: David Colera</p>
					<p id="3">Teléfono: 622510998</p>
					<p id="4">Email: dcp@gmail.com</p>
					
					<p id="5" className="line_container">
						<p id="8">a </p>
						<span id="6">Soy David</span>
						<span id="7"> y tu?</span>
					</p>
					
					
				</TerminarWrite>
			</BorderAscii>
		</div>
	)
}