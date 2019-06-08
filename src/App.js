import React from 'react';
import { handleResponse } from './helpers'
import { API_KEY } from './config'
import Titles from './components/Titles'
import Forms from './components/Forms.js'
import Weather from './components/Weather.js'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      weatherDescription: undefined,
      error: undefined
    }
    // this.getWeather=this.getWeather.bind(this)
  }




  //   componentDidMount() {
  //     this.getWeather();
  // }
  getWeather = (city, country) => {
    const city1 = city
    const country1 = country
    if (city1 && country1) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1},${country1}&appid=${API_KEY}&units=metric`)
        .then(handleResponse)
        .then((data) => {
          console.log(data)
          this.setState({
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description
          })
        })
    }
    else {
      this.setState({
        error: "Please enter correct values"
      }, () => {console.log(this.state.error)})
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Forms getWeather={this.getWeather} />
                  <Weather city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;


//`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`













// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
