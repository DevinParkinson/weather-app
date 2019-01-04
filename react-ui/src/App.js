import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    let cachedLat = localStorage.getItem(‘latitude’);
    let cachedLon = localStorage.getItem(‘longitude’);
      cachedLat ?
      this.setCoordsFromLocalStorage(cachedLat, cachedLon) :
      this.getCoords();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { process.env.NODE_ENV === 'production' ?
              <p>
                This is a production build from create-react-app.
              </p>
            : <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
          }
          <p>{'« '}<strong>
            {this.state.fetching
              ? 'Fetching message from API'
              : this.state.message}
          </strong>{' »'}</p>
          <p><a
            className="App-link"
            href="https://github.com/mars/heroku-cra-node"
          >
            React + Node deployment on Heroku
          </a></p>
          <p><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a></p>
        </header>
      </div>
    );
  }
}

export default App;
