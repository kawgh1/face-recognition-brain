import React from 'react';


const Rank = ({name, entries}) => {
	if (name){
				return (
					<div className='ma5'>
						<div className='white ma1 f2'>
							{`Hi ${name}!`}
						</div> 
						<div className='white ma1 f2'>
							{'Your current score is...'}
						</div>
						<div className='white ma1 f1'>
							{entries}
						</div>
					</div>
					);
	} else {

				return (
					<div className='ma5'>
						<div className='white ma1 f2'>
							{'Hi Friend! Your current score is'}
						</div>
						<div className='white ma1 f1'>
							{'0'}
						</div>
						<div className='white ma1 f5'>
							{'Sign in or Register to increase your score!'}
						</div>
					</div>
					);

	}

}

export default Rank;