import Home from '../../pages/home/Home'
import TerminarWrite from '../terminalWrite/TerminalWrite'
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'

export default function Terminal(props){

	return (
		<div className='terminalContainer'>
			<div className="terminal">
				<TerminalPrompt username="guest" path={props.path} txt={props.txt}/>
				{props.children}
			</div>
		</div>
	)
}