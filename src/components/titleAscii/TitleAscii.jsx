import TerminarWrite from '../terminalWrite/TerminalWrite';
import './titleAscii.scss'
export default function TitleAscii(props){

	const letter_map = {
		' ': [
		  '     ',
		  '     ',
		  '     ',
		  '     ',
		  '     ',
		],
		'A': [
		  '  ##  ',
		  ' #  # ',
		  '#    #',
		  '######',
		  '#    #',
		],
		'B': [
		  '##### ',
		  '#    #',
		  '##### ',
		  '#    #',
		  '##### ',
		],
		'C': [
		  ' ##### ',
		  '#      ',
		  '#      ',
		  '#      ',
		  ' ##### ',
		],
		'D': [
		  '#####  ',
		  '#    # ',
		  '#    # ',
		  '#    # ',
		  '#####  ',
		],
		'E': [
		  '######',
		  '#     ',
		  '##### ',
		  '#     ',
		  '######',
		],
		'F': [
		  '######',
		  '#     ',
		  '##### ',
		  '#     ',
		  '#     ',
		],
		'G': [
		  ' ##### ',
		  '#      ',
		  '#  ### ',
		  '#    # ',
		  ' ####  ',
		],
		'H': [
		  '#    #',
		  '#    #',
		  '######',
		  '#    #',
		  '#    #',
		],
		'I': [
		  '#####',
		  '  #  ',
		  '  #  ',
		  '  #  ',
		  '#####',
		],
		'J': [
		  ' #####',
		  '    # ',
		  '    # ',
		  '#   # ',
		  ' ###  ',
		],
		'K': [
		  '#   # ',
		  '#  #  ',
		  '##    ',
		  '#  #  ',
		  '#   # ',
		],
		'L': [
		  '#     ',
		  '#     ',
		  '#     ',
		  '#     ',
		  '######',
		],
		'M': [
		  '#    #',
		  '##  ##',
		  '# ## #',
		  '#    #',
		  '#    #',
		],
		'N': [
		  '#    #',
		  '##   #',
		  '# #  #',
		  '#  # #',
		  '#    #',
		],
		'O': [
		  ' ### ',
		  '#   #',
		  '#   #',
		  '#   #',
		  ' ### ',
		],
		'P': [
		  '#### ',
		  '#   #',
		  '#### ',
		  '#    ',
		  '#    ',
		],
		'Q': [
		  ' ###   ',
		  '#   #  ',
		  '#   #  ',
		  '#  ##  ',
		  ' ####  ',
		],
		'R': [
		  '##### ',
		  '#    #',
		  '##### ',
		  '#   # ',
		  '#    #',
		],
		'S': [
		  ' ##### ',
		  '#      ',
		  ' ##### ',
		  '      #',
		  ' ##### ',
		],
		'T': [
		  '######',
		  '  ##  ',
		  '  ##  ',
		  '  ##  ',
		  '  ##  ',
		],
		'U': [
		  '#    #',
		  '#    #',
		  '#    #',
		  '#    #',
		  ' #### ',
		],
		'V': [
		  '#     #',
		  '#     #',
		  ' #   # ',
		  '  # #  ',
		  '   #   ',
		],
		'W': [
		  '#       #',
		  '#   #   #',
		  '# #   # #',
		  '##     ##',
		  '#       #',
		],
		'X': [
		  '#     #',
		  ' #   # ',
		  '  # #  ',
		  ' #   # ',
		  '#     #',
		],
		'Y': [
		  '#    #',
		  ' #  # ',
		  '  ##  ',
		  '  ##  ',
		  '  ##  ',
		],
		'Z': [
		  '###### ',
		  '    #  ',
		  '   #   ',
		  '  #    ',
		  '###### ',
		],
	};

	function print_letter(letter){
		const curr_letter = letter_map[letter];
		if (!curr_letter) return null;
		return (
			<div>
				{curr_letter.map((line, index) => (
					<div id={`letra${index}`} key={index}>{line.split('').map((char, charIndex) => (
						<span key={charIndex}>{char === ' ' ? '\u00A0' : char}</span>
					))}</div>
				))}
			</div>
		)
	}

	function print_word(word){
		const curr_word = [];
		word.split('').map((letter) => (
		  curr_word.push(print_letter(letter.toUpperCase()))
		));
		return (curr_word)		
	}

	return (
		<div className="asciiTitleContainer">	
			{print_word(props.children)}		
			{/* {<TerminarWrite txtSpeed={50}>print_word(props.children)</TerminarWrite>}
			{props.children.split('').map((letter) => (
				<TerminarWrite txtSpeed={50}>{print_letter(letter.toUpperCase()).props.children}</TerminarWrite>
				// console.log(print_letter(letter.toUpperCase()).props.children)
			))} */}
		</div>
	)
}