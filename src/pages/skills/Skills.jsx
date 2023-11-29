import Terminal from "../../components/Terminal/Terminal";
import BorderAscii from "../../components/borderAscii/BorderAscii";
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
		<div className="container skills_container">
			<Terminal txt="./skills" path="skills">
				<BorderAscii>
					<h1>Skills</h1>
					{
						skills.map((skill, index) => (
							<Skill name={skill.name} value={skill.value * 2} color={skill.color}/>		
						))
					}
				</BorderAscii>

			</Terminal>
		</div>
	)
}