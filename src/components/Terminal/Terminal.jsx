import Home from '../../pages/home/Home'
import TerminarWrite from '../terminalWrite/TerminalWrite'
import './Terminal.scss'
import TerminalPrompt from './TerminalPrompt'

export default function Terminal(){

	return (
		<div className='terminalContainer'>
			<div className="terminal">
				<div className='prompt'>
					<TerminalPrompt username="guest" path="home" id="1"/>
					<TerminarWrite txtSpeed={20}><p id='p1' className='userText'>./Home</p></TerminarWrite>
				</div>
				<Home/>
			</div>
		</div>
	)
}