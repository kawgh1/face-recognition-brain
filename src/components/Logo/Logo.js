import React from 'react';
// npm install --save react-tilt
// https://www.npmjs.com/package/react-tilt
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './icons8-brain-64.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-4" options={{ max : 10000 }} 
				style={{ height: 100, width: 100 }} >
				 <div className="Tilt-inner pa1">
				 <img style={{height: '90px', width: '90px'}} alt='logo' src={brain}/>
				 </div>
			</Tilt>
		</div>
		);

}

export default Logo;