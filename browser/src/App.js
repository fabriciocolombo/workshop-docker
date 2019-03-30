import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onSubmit = () => {
    console.log(this.input.current.value);
    axios.get(`/api/greeting/${this.input.current.value}`)
         .then(response => alert(response.data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Type your name</p>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <input type="text" ref={this.input} />
            <div style={{width: '10px'}}/>
            <button type="button" onClick={this.onSubmit}>
              Say hi
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
