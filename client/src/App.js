import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: ''
  }

  componentWillMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(result => {
        this.setState({
          name: result.name
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello {this.state.name}!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
