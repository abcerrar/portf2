import { useEffect, useState } from 'react'
import MenuElement from './MenuElement'
import './menu.scss'
import { useNavigate } from 'react-router-dom';
export default function Menu(){

	const [selected, setSelected] = useState(0);
	const [selectFinish, setSelectFinish] = useState(0);
	const navigate = useNavigate();

	const menu_elements = [
		<MenuElement txt="Principal" path="/terminal/home" class={`${selected === 0 ? 'selected': ''}`}/>,
		<MenuElement txt="Sobre mi" path="/terminal" class={`${selected === 1 ? 'selected': ''}`}/>,
		<MenuElement txt="Poryectos" path="/terminal" class={`${selected === 2 ? 'selected': ''}`}/>,
		<MenuElement txt="Habilidades" path="/terminal/skills" class={`${selected === 3 ? 'selected': ''}`}/>,
		<MenuElement txt="Contacto" path="/terminal" class={`${selected === 4 ? 'selected': ''}`}/>,
		<MenuElement txt="<Select>" class={`${selectFinish === 0 ? 'waiting': ''}`}/>,
		<MenuElement txt="<Exit>" path="/terminal" class={`${selectFinish === 1 ? 'waiting': ''}`}/>
	]

	const tecla_pulsada = (e) => {
		const num_elements = menu_elements.length;
		if (e.key === 'ArrowDown' && selected < num_elements - 3){
			e.preventDefault();
			setSelected(selected + 1)
		}
		if (e.key === 'ArrowUp' && selected > 0){
			e.preventDefault();
			setSelected(selected - 1)
		}
		if (e.key === ' '){
			e.preventDefault();
			if (selectFinish === 0)
				document.querySelector("#selected").click();
			else
				document.querySelector("#waiting ").click();
				

		}
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
			e.preventDefault();
			if (selectFinish === 0)
				setSelectFinish(1)
			else	
				setSelectFinish(0)
		}
	}
	
	useEffect (() => {
		document.addEventListener('keydown', tecla_pulsada);
		document.addEventListener('mouseover', (e) => {
			for (let i = 0; i < menu_elements.length - 2; i++) {
				if (menu_elements[i].props.txt === e.target.innerHTML)
					setSelected(i);
				
			}
			
		});
		return () => {
			document.removeEventListener('keydown', tecla_pulsada);
		};
	}, [selected, selectFinish]);

	return(
		<div className='container'>
			<div className="menuContainer">
				<p>Select option</p>
				<div className='options'>
					{menu_elements[0]}
					{menu_elements[1]}
					{menu_elements[2]}
					{menu_elements[3]}
					{menu_elements[4]}
				</div>
				<div className='buttons'>
					{menu_elements[5]}
					{menu_elements[6]}
				</div>
			</div>
		</div>
	)
}