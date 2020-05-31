import React from 'react';

// const Signin = ({ onRouteChange }) => {
// we want this to be a 'smart' component that can handle state to determine
// if user sign in is valid


///////////////////////////////////////////
// LOCAL HOST FUNCTIONS ARE IN APP.JS,
// SIGNIN.JS AND REGISER.JS
///////////////////////////////////////////



class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	// if this is working, onSubmitSignIn will now use the state to
	// fetch 
	onSubmitSignIn = () => {
		// this displays email and password in console
		//console.log(this.state);
		// fetch does a GET request, but we want a POST here
		// local host 
		// fetch('http://localhost:3001/signin', {
		fetch('https://cryptic-refuge-59796.herokuapp.com//signin', {
			method: 'post', 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			})
		})
		.then(response => response.json())
		.then(user => {
        	if(user.email){
        		console.log(user.id)
          		this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})

	}


	render() {
		// const { onRouteChange } = this.props;

		return (
				// all code from http://tachyons.io/components/forms/sign-in/index.html
				// article tag from http://tachyons.io/components/cards/product-card/index.html
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="center f3 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange={this.onEmailChange}/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
						        className="b pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="password" 
						        name="password"  
						        id="password"
						        onChange={this.onPasswordChange}/>
					      </div>
					  
					    </fieldset>
					    {/*<div className="">
						    {/* this calls the onClick immediately, 
						      		    have to use => arrow function
										onClick={onRouteChange('home')}
									
					      <input 
					      		onClick={() => this.props.onRouteChange('register')}
					      		style = {{cursor: 'pointer'}}
					      		className="b br3 ma1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      		type="submit" 
					      		value="Register"/>
					    </div>*/}
					    <div className="">
					        {/* this calls the onClick immediately, 
					      		    have to use => arrow function
									onClick={onRouteChange('home')}
							    	*/}
					      <input 
					      		onClick={this.onSubmitSignIn}
					      		style = {{cursor: 'pointer'}}
					      		className="b br3 ma1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      		type="submit" 
					      		value="Sign in"/>
					    </div>
					    
					    <div className="">
					        {/* this calls the onClick immediately, 
					      		    have to use => arrow function
									onClick={onRouteChange('home')}
					      	    	*/}
					      <input 
						      onClick={() => this.props.onRouteChange('home')}
						      style = {{cursor: 'pointer'}}
						      className="b br3 ma1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						      type="submit" 
						      value="Nah."/>
					    </div>
					    {/*<div className="lh-copy mt3">
					      <a href="#0" className="f5 link dim black db">Register</a>
					    </div>*/}
					  </div>
					</main>
				</article>
			);
	}
};

export default Signin;