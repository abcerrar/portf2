import { Link } from "react-router-dom";

export default function MenuElement(props){
	return (
		<Link className={`menu_element ${props.class}`} to={props.path}>
			{props.txt}
		</Link>
	)
}