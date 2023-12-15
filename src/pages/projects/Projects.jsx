import BorderAscii from "../../components/borderAscii/BorderAscii";
import TerminarWrite from "../../components/terminalWrite/TerminalWrite";
import TitleAscii from "../../components/titleAscii/TitleAscii";
import './projects.scss'

export default function Projects(){
	return (
		<div className="projects_container">
			<BorderAscii>
				<TitleAscii>Projects</TitleAscii>
				<TerminarWrite txtSpeed={20}>
					<h1 id="pr_h1">Estos son mis proyectos</h1>
					<h2 id="pr_h2">Placeholder</h2>
				</TerminarWrite>
			</BorderAscii>
		</div>
	)
}