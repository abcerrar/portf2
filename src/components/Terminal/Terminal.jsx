import { useEffect, useState } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useNavigate, useParams } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';

export default function Terminal(props){

	const navigate = useNavigate();

	const [current_path, setCurrent_path] = useState('/');
	const orders = [];
	orders[0] = <TerminalPrompt username="guest" path={props.path}/>;

	const url = useParams();
	let component;
	if (url['*'] === 'home')
		component = <Home/>
	if (url['*'] === 'skills')
		component = <Skills/>
	
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
					{url['*'] !== undefined ? <TerminalPrompt username="guest" path={url['*']} txt={'./'+url['*']}/> : undefined}
					{component}
					{orders[0]}
				</div>
			</div>
		</div>
	)
}