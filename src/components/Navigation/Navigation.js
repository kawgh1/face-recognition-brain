import React from 'react';
import Tilt from 'react-tilt';
import '../../components/Logo/Logo.css';
import brain from '../../components/Logo/icons8-brain-64.png';


const Navigation = ({ onRouteChange, name }) => {
	
	if (name !== '') {
		return (
			
			// have to use camelCase for non-string hypens 
			// like justify-content in JSX
			<nav className='items-center mt4 center w-100 w-50-m w-25-l mw6 mb2'>
					<Tilt className="Tilt center  w-20 flex-shrink-1 br2 shadow-4" options={{ max : 10000 }} 
						style={{height: 71, width: 71 }} >
						 <div className="Tilt-inner pa1">
						 <img style={{height: '60px', width: '60px'}} alt='logo' src={brain}/>
						 </div>
					</Tilt>

					
					<div className="flex items-center center w-50 ">
						{/* tachyons in className */}
						{/* tachyons in className */}
						<p onClick={() => onRouteChange('signout')} className = 'f5 b link dim black underline pa3 pointer' style={{color: 'white', cursor: 'pointer'}}>Sign Out</p>
					</div>
			</nav>
			);
} else {
		return (
			
					
			<nav className='items-center mt4 center w-100 w-50-m w-25-l mw6 mb2'>
					<Tilt className="Tilt center  w-20 flex-shrink-1 br2 shadow-4" options={{ max : 10000 }} 
						style={{height: 71, width: 71 }} >
						 <div className="Tilt-inner pa1">
						 <img style={{height: '60px', width: '60px'}} alt='logo' src={brain}/>
						 </div>
					</Tilt>

					
					<div className="flex items-center center w-50 ">
						{/* tachyons in className */}
						<p onClick={() => onRouteChange('signout')} className = ' f6 link dim black underline pa3 pointer' style={{cursor: 'pointer'}}>Sign In</p>
						<p onClick={() => onRouteChange('register')} className = 'f6 link dim black underline pa3 pointer' style={{cursor: 'pointer'}}>Register</p>
					</div>
			</nav>
			
		);

	}
}

export default Navigation;