import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f4 center'>
			{'This AI brain will detect faces in picture url addresses like this. Give it a try!'}
			</p>
			<div className='center'>
				<div className='center form pt4 pb4 pl3 pr3 br3 shadow-5'>
					<input className='f5 grow w-70 center' type='text' placeholder='website.com/image.jpeg'
							onChange={onInputChange} />
					<button className='w-30 grow f5 link ph3 pv2 dib white bg-light-purple' 
							onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);

}

export default ImageLinkForm;