import React, {Component} from 'react';
import './App.css';

class LoginForm extends Component {

  handleLogin(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
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
    super(props);
    this.state = {
      loggedin: false,
      overlay: false,
      streams: [



      ]
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
    let players = [];
    this.state.streams.forEach((stream) => {
      players.push(
        <div className="player" key={stream.title}>
          <p>{stream.title}</p>
          <iframe src={stream.videoid} name="frame" scrolling="no" frameBorder="no" height = "450px" width = "800px">
          </iframe>
        </div>
      )
    });
    return players;
  }


  render() {
    return (
      <div className="main-app">
        {(this.state.overlay) ?
        <div className="overlay">Fantasy Ticker (coming soon)</div> : null}
        <header className="main-header">
          <h1 className="main-title">Fat Chuck's Fantasy Football</h1>
        </header>
        {(this.state.loggedin) ?
          <div className="main-body">
            <p>
              Fantasy Ticker (coming soon)
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
