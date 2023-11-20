import TerminarWrite from "../../components/terminalWrite/TerminalWrite";
import './aboutMe.scss'

export default function AboutMe(){
	return (
		<div className="container aboutMeContainer">
			
			<TerminarWrite txtSpeed={20}>
				<h1 id="h1">Hola mundo de David y Sina</h1>
				<h2 id="h2">Esta es una prueba de lo que podria poner aqui sobre mi</h2>
			</TerminarWrite> 
		</div>
	)
}