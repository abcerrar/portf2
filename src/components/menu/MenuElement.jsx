import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MenuElement(props){
	return (
		<div className="menu_row">
			<div className={props.class === 'selected' ? 'selected' : ''}>
				<div className={"row"}>
				</div>
			</div>
			<Link className={`menu_element ${props.class}`} to={props.path} id={props.class}>
				{props.txt}
			</Link>
		</div>
	)
}