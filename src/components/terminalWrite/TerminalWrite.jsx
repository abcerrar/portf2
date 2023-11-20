import { useEffect, useState } from "react"

export default function TerminarWrite(props = []){
	const [index, setIndex] = useState(0);
	const [num, setNum] = useState(0);
	const [txtPrompt, setTxtPrompt] = useState([]);

	useEffect(()=>{
		props.children.forEach(element => {
			txtPrompt.push({text:element.props.children,id: element.props.id});
			setTxtPrompt(txtPrompt);
			window.document.getElementById(element.props.id).innerHTML = "";
		});
		

		// console.log(txtPrompt)
	}, [])

	
	setTimeout(()=>{
		let element;
		if (index < txtPrompt.length)
		{
			element = window.document.getElementById(txtPrompt[index].id);
			element.innerHTML += txtPrompt[index].text.charAt(element.innerHTML.length);
			if (txtPrompt[index].text.length === element.innerHTML.length)
				setIndex(index + 1);
			setNum(num + 1);
		}
	}, props.txtSpeed)

	// console.log(props.children)
	return(
		<p>
			{props.children}
		</p>
	)
}