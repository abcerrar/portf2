import { Link } from "react-router-dom";

export default function MenuElement(props){
	return (
		<Link className="menu_element" to={props.path}>
			{props.txt}
		</Link>
	)
}