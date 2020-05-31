import React from 'react';

const Navigation = ({ onRouteChange, name }) => {
	
	if (name !== '') {
		return (
			// have to use camelCase for non-string hypens 
			// like justify-content in JSX
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				{/* tachyons in className */}
				<p onClick={() => onRouteChange('signout')} className = 'f5 b link dim black underline pa3 pointer' style={{color: 'white', cursor: 'pointer'}}>Sign Out</p>
			</nav>
			);
} else {
		return (

			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				{/* tachyons in className */}
				<p onClick={() => onRouteChange('signout')} className = 'f6 link dim black underline pa3 pointer' style={{cursor: 'pointer'}}>Sign In</p>
				<p onClick={() => onRouteChange('register')} className = 'f6 link dim black underline pa3 pointer' style={{cursor: 'pointer'}}>Register</p>
			</nav>
		);

	}
}

export default Navigation;