import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
	return (
		<div className='center'>
			<div className='absolute mt2 '>
				<img className='grow br3 shadow-5' id='inputimage' alt='face will show here.' 
				src={imageURL} width='300px' height='auto' />
				<div className='bounding-box'
						style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} >

				</div>
			</div>
			
		</div>
		);

}

export default FaceRecognition;