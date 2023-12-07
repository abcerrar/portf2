import { useEffect, useState } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useNavigate, useParams } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';

export default function Terminal(props){

	const navigate = useNavigate();

	const [current_path, setCurrent_path] = useState('/');
	const [components, setComponents] = useState([]);		

	const url = useParams();
	// console.log(url)
	let component;
	if (url['*'] === 'home')
		components.push(<Home/>);
	if (url['*'] === 'skills')
		component.unshift(<Skills/>);
	
	useEffect(() => {
		const send = (e) => {
			if (e.key === 'Enter')
				console.log(window.document.getElementById("input").value)
			if (e.key === 'Escape'){
				navigate('/');
			}
		}
		window.document.addEventListener('keydown', send);
		return () => {
			document.removeEventListener('keydown', send);
		};
	}, [])

	return (
		
		<div className='container'>
			<div className='terminalContainer'>

				<div className="terminal">
					{components.push(<TerminalPrompt username="guest" path={props.path}/>)}
					{/* {url['*'] !== undefined ? components.unshift(<TerminalPrompt username="guest" path={url['*']} txt={'./'+url['*']}/>) : undefined} */}
					{/* {component} */}
					{components}
				</div>
			</div>
		</div>
	)
}