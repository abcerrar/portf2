import { useEffect } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useNavigate } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';

export default function Terminal(props){

	const navigate = useNavigate();
	const orders = [];
	orders[0] = <TerminalPrompt username="guest" path={props.path}/>;

	let component;
	if (props.component === 'Home')
		component = <Home/>
	if (props.component === 'Skills')
		component = <Skills/>
	console.log(props.component)
	
	useEffect(() => {
		const send = (e) => {
			if (e.key === 'Enter')
				console.log(window.document.getElementById("input").value)
			if (e.key === 'Escape'){
				localStorage.setItem("path", "/home");
				navigate('/');
			}
		}
		window.document.addEventListener('keydown', send);
		return () => {
			document.removeEventListener('keydown', send);
		};
	}, [])

	return (
		<div className='terminalContainer'>
			<div className="terminal">
				{/* <TerminalPrompt username="guest" path={props.path} txt={props.txt}/>
				{props.children}
				 */}
				{component !== undefined ? component : ''}
				{orders[0]}
			</div>
		</div>
	)
}