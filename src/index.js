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
        <Hello name={this.state.name} />
        <Hello name={this.state.name} />
      {/*ADD MORE 'HELLO' COMPONENTS TO
      ENABLE SCROLLING OR RESIZE WINDOW*/}
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
