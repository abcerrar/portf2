import MenuElement from './MenuElement'
import './menu.scss'
export default function Menu(){
	return(
		<div className="menuContainer">
			<MenuElement txt="Principal"/>
			<MenuElement txt="Sobre mi"/>
			<MenuElement txt="Poryectos"/>
			<MenuElement txt="Habilidades"/>
			<MenuElement txt="Contacto"/>
		</div>
	)
}