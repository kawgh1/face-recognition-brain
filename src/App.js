import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
// npm install tachyons
import 'tachyons';
// npm install react-particles-js
import Particles from 'react-particles-js';
// // npm install clarifai
// import Clarifai from 'clarifai';

// // Clarifai app and API key
// const app = new Clarifai.App({
//   apiKey: '8e15ce38c47448ae986da3ecefedce3c'
// });

const particlesOptions = {
 particles: { 
              number: {
                      value: 150, 
                      density: {
                                  enable: true,
                                  value_area: 800
                                }
                      },
              size: {
                      value: 4,
                      random: true
                      },
              move: {
                    enable: true, 
                    speed: 1, 
                    direction: 'top', 
                    out_mode: 'out',
                  }
            },  
  interactivity: {
                  onhover: { 
                            enable: true,
                            mode: 'repulse'
                          },
                  onclick: { 
                            enable: true,
                            mode: 'push'
                          },
                  detect_on: 'canvas'            
                  } 
    }

// initial state to reset user when a user logs out and clear any nested functions
// ex. last user's image was appearing even after log out on home page
const initialState = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signout',
      // careful - JS reads a string of 'false' for a boolean as true
      isHome: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }


class App extends React.Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})

  }


  // a lifecycle hook that comes with react so we don't have to do arrow functions
  // componentDidMount() {
  //   fetch('http://localhost:3001/')
  //   .then(response => response.json())
  //   .then(console.log);
  // }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  // this was redone to have the API call done from the server and not the client
  // otherwise it exposes our API key to the client
  onButtonSubmit = () => {
    //console.log('click');
    // grab image url from user, assign to imageURL variable and pass
    // to clarifai API
    this.setState({imageURL: this.state.input});
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, 
    //   this.state.input)
        fetch('http://localhost:3001/imageurl', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                input: this.state.input
              })
            })
        .then(response => response.json())
    // calculateFaceLocation returns the coordinates to displayFaceBox
        .then(response => {
            if (response) {
              // if user logged in
              if (this.state.user.id !== ''){

                fetch('http://localhost:3001/image', {
                  method: 'put',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                    id: this.state.user.id
                  })
                })
                .then(response => response.json())
                .then(count => {
                  this.setState(Object.assign(this.state.user, {entries: count}))
                  })
                .catch(console.log)


                } else {
                  // if no user logged in --> 'Guest'
                  fetch('http://localhost:3001/image', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    
                  })
                  .then(response => response.json())
                  
                  .catch(console.log)

                }
                
              
                  this.displayFaceBox(this.calculateFaceLocation(response))
              }
              // .catch(error => console.log(error));
  })

        .catch(error => console.log(error));
    // same as  
    //  .then(
    //   function(response) {
    //     // do something with response
    //     //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    //     this.calculateFaceLocation(response);
    //   },
    //   function(err) {
    //     // there was an error
    //     console.log(err);
    //   }
    // );      
  }
  // we need our route to reflect what the user clicked
  onRouteChange = (route) => {
    if (route === 'signout') {
      // this is wrong, but just for demonstration - should be setState
      // this.setState({user: {name: ''}});
      this.setState(initialState);
      this.setState({isHome: false});
    } else if (route === 'home') {
      this.setState({isHome: true});
    }
    //this.setState({route: 'home'});
    this.setState({route: route});
    }


  render() {
    return (




      <div className='vh App'>
      
   
          <Particles className='particles' params={particlesOptions} />
          <Navigation name={this.state.user.name} onRouteChange={this.onRouteChange}/>
          {/*this is a tertiary if statement below,
             if route==='home' then ...*/}
          {this.state.route === 'home'
              ? <div>
                  <Logo />
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                  <ImageLinkForm 
                      onInputChange={this.onInputChange} 
                      onButtonSubmit={this.onButtonSubmit} />
                  <FaceRecognition 
                      box={this.state.box} 
                      imageURL={this.state.imageURL}/>
                      {/*<a target="_blank" href="https://icons8.com/icons/set/brain-3">Brain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
                </div>
              : (
                    this.state.route === 'signout'
                    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            }
      </div>
    )};
}

export default App;
