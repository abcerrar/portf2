import React, { useContext, useEffect, useState } from 'react';
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'
import Home from '../../pages/home/Home';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Skills from '../../pages/skills/Skills';
import Commands from './Commands';
import { SharedContext } from '../contexts/app.context';


export default function Terminal(props){

	const navigate = useNavigate();
	const location = useLocation();

	// const {sharedData, setSharedData} = useContext(SharedContext);
	// const {sharedData2, setSharedData2} = useContext(SharedContext);
	// setSharedData('hola');
	// setSharedData2('adios');
	// console.log(sharedData)
	// console.log(sharedData2)

	const [current_path, setCurrentPath] = useState(location.pathname.replace('/terminal', ''));
	const [current_text, setCurrentext] = useState('');
	const historial = [];
	let historial_index;
	// console.log(current_path)
	
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
			const currPath = window.location.pathname.replace('/terminal', '') !== '' ?  window.location.pathname.replace('/terminal', '') : '/';
			const nuevo_nodo = <Commands path={currPath} command={input.value.split(' ')[0]} args = {input.value.split(' ')}/>;
			historial.push(input.value.split(' ')[0]);
			historial_index = historial.length;
			new_component(<TerminalPrompt username="guest" path={currPath} txt={input.value}/>);
			input.value = '';
			setCurrentext('')
			new_component(nuevo_nodo);
			
		}
		if (e.key === 'Escape'){
			navigate('/');
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
		window.document.addEventListener('keydown', navigate_historial);
		window.document.addEventListener('keydown', send);		
		window.addEventListener('urlChanged', (e) => setCurrentPath(window.location.pathname.replace('/terminal', '')))
		
		choose_initial(); 
		return () => {
			document.removeEventListener('keydown', send);
			document.removeEventListener('keydown', navigate_historial);
		};
	}, [])
	
	

	return (
		
		<div className='container'>
			<div className='terminalContainer'>

				<div className="terminal" id='terminal'>
					{components.map((component, index) => (
						<React.Fragment key={index}>{component}</React.Fragment>					
					))}	
					{<TerminalPrompt username="guest" path={current_path} value={current_text} focus = {true}/>}
				</div>
			</div>
		</div>
	)
}