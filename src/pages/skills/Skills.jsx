import Terminal from "../../components/Terminal/Terminal";
import BorderAscii from "../../components/borderAscii/BorderAscii";
import TitleAscii from "../../components/titleAscii/TitleAscii";
import Skill from "./Skill";

export default function Skills(){

	const skills = [
		{
			name: "Java",
			value: "10",
			color: "#f0931cff"
		},
		{
			name: "C",
			value: "9",
			color: "#3949acff"
		},
		{
			name: "JavaScript",
			value: "7",
			color: "#efd81dff"
		},
		{
			name: "React",
			value: "8",
			color: "#5ed3f3"
		},

	]

	return (
		<div className="skills_container">
			<BorderAscii>
				<TitleAscii>Skills</TitleAscii>
				{
					skills.map((skill, index) => (
						<Skill key={index} name={skill.name} value={skill.value * 2} color={skill.color}/>		
					))
				}
			</BorderAscii>
		</div>
	)
}