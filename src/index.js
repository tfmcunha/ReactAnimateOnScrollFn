import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Tiago"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
