import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import '../../style/general.scss'
import { useEffect } from "react";

export default function Home(){
	const navigate = useNavigate();

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
			
			<h1>home</h1>
		</div>
	)
}