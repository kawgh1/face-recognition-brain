import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f4  w-90 center'>
			{'Copy and paste an image url address in the box below and this AI will detect if the image contains a face. Give it a try!'}
			</p>
			<div className='center ma4'>
				<div className='center form pa3 br3 shadow-5'>
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