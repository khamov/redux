import {connect} from 'react-redux';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import {loadIssues} from './actions';

class App extends Component {
    handleClick = () => {
        this.props.loadIssues();
    }
  render() {
    return (
        <div>
        <h1>Hello, world {this.props.counter}</h1>
        <button onClick={this.handleClick}>Load issues</button>
            <ul>
                {this.props.issues.map((issue) => <li>{issue.title}</li>)}
            </ul>
        </div>
        /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
    );
  }
}

export default connect(
    (state) => { return {counter : state.counter, issues: state.issues};},
    (dispatch) => bindActionCreators({loadIssues}, dispatch)
)(App);

