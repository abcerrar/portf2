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
		
		<div className="container">
			<div className="homeContainer">

				<Terminal path="Home" txt="./Home">
					<BorderAscii>
						<TerminarWrite txtSpeed={50}>
							<h1 id="1">123456789</h1>
							<h1 id="2">123456789</h1>
							<h1 id="3">123456789</h1>
							<h1 id="4">123456789</h1>
							<h1 id="5">123456789</h1>
							<h1 id="6">123456789</h1>
							
						</TerminarWrite>
					</BorderAscii>
			
				</Terminal>
			</div>
		</div>
	)
}