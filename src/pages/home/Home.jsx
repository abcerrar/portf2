import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import '../../style/general.scss'
import './home.scss'
import { useEffect } from "react";
import Terminal from "../../components/Terminal/Terminal";
import TerminarWrite from "../../components/terminalWrite/TerminalWrite";
import BorderAscii from "../../components/borderAscii/BorderAscii";

export default function Home(){
	const navigate = useNavigate();


	// const borderAscii = {
	// 	position: "relative",
	// 	fontFamily: 'monospace',
	// 	fontSize: '14px',
	// 	color: 'white',
	// 	// background: "red",
	// 	padding: '30px',
	// 	// '::before': {
	// 	// 	content: '"-----------------------"',
	// 	// 	position: "absolute",
	// 	// 	top: '-1px',
	// 	// 	left: '-1px',
	// 	// 	width: 'calc(100% + 2px)',
	// 	// 	whiteSpace: 'nowrap',
	// 	// },
	// };

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape'){
				localStorage.setItem("path", "/home");
				navigate('/');
			}
		});
	}, []);
	return (
		<div className="homeContainer">

			<BorderAscii height={100} width={100}>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
		
			
		
				
			</BorderAscii>
			
			{/* <TerminarWrite txtSpeed={20}>
				<h1 id='1'>Bienvenido a mi portfolio</h1>
				<p id='2'>Soy</p><span id='3'>David Colera</span>
			</TerminarWrite> */}
		</div>
	)
}