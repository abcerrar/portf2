import React, { useContext, useEffect, useState } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';
import Commands from './Commands';
import { SharedContext } from '../contexts/app.context';
import Contact from '../../pages/contact/Contact';
import AboutMe from '../../pages/aboutMe/AboutMe';
import Projects from '../../pages/projects/Projects';


export default function Terminal(props){

	const navigate = useNavigate();
	const location = useLocation();
	
	const [current_path, setCurrentPath] = useState(location.pathname.replace('/terminal', ''));
	const [current_text, setCurrentext] = useState('');
	const historial = [];
	let historial_index;
	// console.log(current_path)
	
	const [components, setComponents] = useState([]);		
	
	function choose_initial(){
		const launched = localStorage.getItem('launch');
		if (launched !== undefined){
			switch(launched){
				case 'home':
					new_component(<TerminalPrompt username='guest' path='/home' txt='exec home.sh'/>);
					new_component(<Home/>);
					break;				
				case 'aboutme':
					new_component(<TerminalPrompt username='guest' path='/aboutme' txt='exec aboutme.sh'/>);
					new_component(<AboutMe/>);
					break;				
				case 'projects':
					new_component(<TerminalPrompt username='guest' path='/projects' txt='exec projects.sh'/>);
					new_component(<Projects/>);
					break;				
				case 'skills':
					new_component(<TerminalPrompt username='guest' path='/skills' txt='exec skills.sh'/>);
					new_component(<Skills/>);
					break;
				case 'contact':
					new_component(<TerminalPrompt username='guest' path='/contact' txt='exec contact.sh'/>);
					new_component(<Contact/>);
					break;
				default:
					break;
			}
			localStorage.setItem('launch', undefined);
		}
	}

	const new_component = (new_comp) => {
		setComponents(components=> [...components, new_comp]);
	}
	
	const send = (e) => {
		if (document.getElementById('input'))
			document.getElementById('input').focus();
		if (e.key === 'Enter'){
			const input = window.document.getElementById("input");
			const currPath = window.location.pathname.replace('/terminal', '') !== '' ?  window.location.pathname.replace('/terminal', '') : '/';
			const nuevo_nodo = <Commands path={currPath} command={input.value.split(' ')[0]} args = {input.value.split(' ')}/>;
			historial.push(input.value);
			historial_index = historial.length;
			new_component(<TerminalPrompt username="guest" path={currPath} txt={input.value}/>);
			input.value = '';
			setCurrentext('')
			new_component(nuevo_nodo);
			
		}
		if (e.key === 'Escape'){
			try{
				navigate('/');
			}catch(error){}
		}
	}
	
	const navigate_historial = (e) => {
		const input = window.document.getElementById("input");
		if (e.key === 'ArrowUp'){			
			if (historial_index > 0){				
				historial_index = historial_index - 1;	
				setCurrentext(historial[historial_index])
			}
		}
		if (e.key === 'ArrowDown'){
			if (historial_index < historial.length){
				historial_index = historial_index + 1;
				if (historial[historial_index] !== undefined)
					setCurrentext(historial[historial_index])
			}else{
				input.value = '';
				setCurrentext('')
			}		
		}
	}

	useEffect(() => {
		const keep_sroll = (e) => {
			if (e.key === 'Enter'){				
				const terminal = document.getElementById('terminal');
				terminal.scrollTop = terminal.scrollHeight;
			}
		}
		window.document.addEventListener('keydown', navigate_historial);
		window.document.addEventListener('keydown', send);
		window.document.addEventListener('keydown', keep_sroll);
		window.addEventListener('urlChanged', (e) => setCurrentPath(window.location.pathname.replace('/terminal', '')))
		choose_initial(); 
		return () => {
			document.removeEventListener('keydown', send);
			document.removeEventListener('keydown', navigate_historial);
			document.removeEventListener('keydown', keep_sroll);
		};
	}, [])
	
	

	return (
		
		<div className='container'>
			<div className='terminalContainer'>

				<div className="terminal" id='terminal'>
					{components.map((component, index) => (
						<React.Fragment key={index}>{component}</React.Fragment>					
					))}	
					{<TerminalPrompt username="guest" path={current_path === '' ? '/' : current_path} value={current_text} focus = {true}/>}
				</div>
			</div>
		</div>
	)
}