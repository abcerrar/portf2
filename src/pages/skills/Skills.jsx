import { useContext, useEffect, useState } from "react";
import Terminal from "../../components/Terminal/Terminal";
import BorderAscii from "../../components/borderAscii/BorderAscii";
import TitleAscii from "../../components/titleAscii/TitleAscii";
import Skill from "./Skill";
import axios from "axios";
import { serverUrl } from "../../config";
import app_context from "../../components/contexts/app.context";

export default function Skills(){

	const [skills, setSkills] = useState([]);
	const {userData} = useContext(app_context);

	useEffect(() => {
		setSkills(userData.SKILLS);
	}, [])

	return (
		<div className="skills_container">
			<BorderAscii>
				<TitleAscii>Skills</TitleAscii>
				{
					skills.map((skill, index) => (
						<Skill key={index} name={skill.NAME} value={skill.LEVEL * 2} color={skill.COLOR}/>		
					))
				}
			</BorderAscii>
		</div>
	)
}