import React, {Component} from 'react';
import YouTube from 'react-youtube';
import jah from './jah.jpg';
import './App.css';

class LoginForm extends Component {

  handleLogin(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleLogin.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedin: false,
      streams: [
        ('test-stream', '2g811Eo7K8U'),
        ('fat chuck falls hard', '8_vOL18I-U8')]
    }
  }

  signIn(username, password) {
    if (username === "djfatchuck" && password === "djfatchuck") {
      this.setState({
        loggedin: true
      })
    }
  }

  players(){
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    let players = [];
    this.state.streams.forEach((stream) => {
      players.push(
        <div className="player" key={stream[0]}>
          <YouTube
            videoId={stream[1]}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      )
    })
    return players;
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={jah} className="App-logo" alt="logo"/>
          <h1 className="App-title">Werb Werb's Bullshit</h1>
        </header>
        {(this.state.loggedin) ?
          <div className="main-body">
            <p className="App-intro">
            Fantasy ticker
            </p>
            {this.players()}
          </div>:
          <LoginForm
            onSignIn={this.signIn.bind(this)}
          />
        }
      </div>
    );
  }
}

export default App;
