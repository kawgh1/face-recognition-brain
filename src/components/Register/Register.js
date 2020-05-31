import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      })
    })
    .then(response => response.json())
	.then(user => {
		if (user.email) {
			//console.log(user)
			// this.props.loadUser(user);
			this.props.onRouteChange('signout');
		}
	})
  }

  render() {


	return (
		// all code from http://tachyons.io/components/forms/sign-in/index.html
		// article tag from http://tachyons.io/components/cards/product-card/index.html
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="center f3 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input 
					        className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="name" 
					        name="name"  
					        id="name"
					        onChange={this.onNameChange}/>
			      </div>
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
					        className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password"
					        onChange={this.onPasswordChange}/>
			      </div>
			  
			    </fieldset>
			    <div className="">
				    {/* this calls the onClick immediately, 
				      		    have to use => arrow function
								onClick={onRouteChange('home')}
							*/}
			      <input 
			      		onClick={this.onSubmitRegister}
			      		style = {{cursor: 'pointer'}}
			      		className="b br3 ma1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      		type="submit" 
			      		value="Register"/>
			    </div>
			    {/*<div className="">
			      {/* this calls the onClick immediately, 
			      		    have to use => arrow function
							onClick={onRouteChange('home')}
						
			      <input 
			      		onClick={() => this.props.onRouteChange('signout')}
			      		style = {{cursor: 'pointer'}}
			      		className="b br3 ma1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      		type="submit" 
			      		value="Sign in"/>
			    </div>*/}
			    
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
}

export default Register;