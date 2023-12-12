import React, { useEffect, useState } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';
import Commands from './Commands';


export default function Terminal(props){

	const navigate = useNavigate();
	const location = useLocation();

	const [current_path, setCurrentPath] = useState(location.pathname.replace('/terminal', ''));
	console.log(current_path)
	
	const [components, setComponents] = useState([]);		

	const url = useParams();
	
	function choose_initial(){
		switch(url['*']){
			case 'home':
				new_component(<TerminalPrompt username='guest' path='Home' txt='./Home'/>);
				new_component(<Home/>);
				break;
			case 'skills':
				new_component(<TerminalPrompt username='guest' path='Skills' txt='./Skills'/>);
				new_component(<Skills/>);
				break;
			default:
		}
	}

	const new_component = (new_comp) => {
		setComponents(components=> [...components, new_comp]);
	}

	const send = (e) => {
		if (e.key === 'Enter'){
			const input = window.document.getElementById("input");
			const nuevo_nodo = <Commands path={current_path} command={input.value.split(' ')[0]} args = {input.value.split(' ')}/>;
			// setCurrentPath(window.location.pathname.replace('/terminal/', ''));
			// console.log(window.location.pathname.replace('/terminal', ''));
			new_component(<TerminalPrompt username="guest" path={window.location.pathname.replace('/terminal', '')} txt={input.value}/>);
			input.value = '';
			new_component(nuevo_nodo);
			
		}
		if (e.key === 'Escape'){
			navigate('/');
		}
	}
	
	useEffect(() => {
		window.addEventListener('urlChanged', (e) => {
			setCurrentPath(window.location.pathname.replace('/terminal', ''));
		})
		choose_initial(); 
		// console.log(folders['home']['content']);
		window.document.addEventListener('keydown', send);
		return () => {
			document.removeEventListener('keydown', send);
		};
	}, [])
	
	

	return (
		
		<div className='container'>
			<div className='terminalContainer'>

				<div className="terminal">
					{/* {url['*'] !== undefined ? components.unshift(<TerminalPrompt username="guest" path={url['*']} txt={'./'+url['*']}/>) : undefined} */}
					{/* {component} */}
					{/* {console.log(components)}		 */}
					{components.map((component, index) => (
						<React.Fragment key={index}>{component}</React.Fragment>					
					))}

					{<TerminalPrompt username="guest" path={current_path}/>}
				</div>
			</div>
		</div>
	)
}