import React, { useEffect, useState } from "react"

export default function TerminarWrite(props = []){
	const [index, setIndex] = useState(0);
	const [index2, setIndex2] = useState(0);
	const [num, setNum] = useState(0);
	const [txtPrompt, setTxtPrompt] = useState([]);

	function reset_content(content){
		const arr = [];
		content.forEach(element => {
			arr.push({text:element.props.children,id: element.props.id});
			const html_element = window.document.getElementById(element.props.id);
			if (html_element.children.length <= 0)
				html_element.innerHTML = "";
			else{
				element.props.children.forEach((element2) => {
					arr.push({text:element2.props.children,id: element2.props.id});
					const html_element = window.document.getElementById(element2.props.id);
					html_element.innerHTML = "";
				});
			}
		});
		
		return (arr);
	}

	useEffect(()=>{
		let content;
		content = Array.isArray(props.children) ? props.children : [props.children];
		setTxtPrompt(reset_content(content));
	}, [])

	setTimeout(()=>{
		if (index < txtPrompt.length){
			let element = window.document.getElementById(txtPrompt[index].id);
			if (Array.isArray(txtPrompt[index].text)){
				setIndex(index + 1);
			}else{
				element.innerHTML += txtPrompt[index].text.charAt(element.innerHTML.length);
				if (txtPrompt[index].text.length === element.innerHTML.length)
					setIndex(index + 1);
				
			}
			setNum(num + 1);
		}
	}, props.txtSpeed)

	return(
		<>
			{props.children}
		</>
	)
}