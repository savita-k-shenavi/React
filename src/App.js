import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <h1>{this.props.header}</h1>
            <h1>{this.props.footer}</h1>
            <h2>{this.props.type}</h2>
        </div>
     
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}
App.propTypes = {
  header : propTypes.string,
  footer : propTypes.number,
  type : propTypes.boolean
}
App.defaultProps = {
  header : 'INDIA',
  footer : 'KARNATAKA',
  type : true
}

export default App;
