import { useEffect, useState } from 'react';
import './borderAscii.scss'

export default function BorderAscii(props){

	const [with_container, setWith_container] = useState(0);
	const [height_container, setHeight_container] = useState(0);
	
	const horizontal_border = '-'.repeat(with_container);
	
	const h_divs = []
	function render_divs(class_ = ""){
		for(let i = 0; i < height_container; i++)
			h_divs.push(<div>|</div>);
		// console.log(h_divs)
		return <div className={class_}>{h_divs}</div>;
	}

	useEffect(() => {
		const obtenerDimensiones = () => {
			const container = document.getElementById("borderAscii");
			if (container) {
				setWith_container(container.offsetWidth / 6.6);
				if (container.offsetHeight < 350)
					setHeight_container(Math.floor(container.offsetHeight *0.027));
				else
					setHeight_container(Math.ceil(container.offsetHeight *0.027));
			}
		};
		obtenerDimensiones();
		window.addEventListener('resize', obtenerDimensiones)
		console.log(height_container)
		console.log(with_container)
	})

	return (
		<div className='borderAscii' id='borderAscii'>
			<div className='top'>{horizontal_border}</div>
			{render_divs("left")}
			<div className='center'>
				<div className='content'>
					{props.children}
					
				</div>
			</div>
			{render_divs("right")}
			<div className='bottom'>{horizontal_border}</div>
			{/* <div className='top'>{horizontal_border}</div>
			<div className='content'>
			{render_divs("left")}
			<div className='test'></div>

			{render_divs("right")}
			</div>
			
			<div className='bottom'>{horizontal_border}</div> */}
		</div>
	);
}