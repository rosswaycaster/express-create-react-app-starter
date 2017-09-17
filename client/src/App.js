import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  componentWillMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(result => {
        this.setState({
          name: result.name
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Hello {this.state.name}!
        </div>
        <h2>Server</h2>
        <p>Edit <code>server/api/index.js</code> to return your name and reload this page.</p>
        <br />
        <h2>Client</h2>
        <p>This page lives at <code>client/src/App.js</code></p>
      </div>
    );
  }
}

export default App;
