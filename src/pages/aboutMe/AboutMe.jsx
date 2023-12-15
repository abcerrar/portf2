import { useNavigate } from "react-router-dom";
import TerminarWrite from "../../components/terminalWrite/TerminalWrite";
import './aboutMe.scss'
import { useEffect } from "react";
import BorderAscii from "../../components/borderAscii/BorderAscii";
import TitleAscii from "../../components/titleAscii/TitleAscii";

export default function AboutMe(){

	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape'){
				localStorage.setItem("path", "/about_me");
				navigate('/');
			}
		});
	});

	return (
		<div className="aboutMeContainer">
		
			<BorderAscii>
				<TitleAscii>About Me</TitleAscii>
				<TerminarWrite txtSpeed={20}>
					<h1 id="h1">Hola mundo </h1>
					<h2 id="h2">Esta es una prueba de lo que podria poner aqui sobre mi</h2>
				</TerminarWrite> 
			</BorderAscii>
		</div>
	)
}