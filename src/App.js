import React, {Component} from 'react';
import YouTube from 'react-youtube';
import jah from './jahcorey.jpg';
import './App.css';

class App extends Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={jah} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Werb Werb's World</h1>
        </header>
        <p className="App-intro">
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
          />
        </p>
      </div>
    );
  }
}

export default App;
