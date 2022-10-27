import "./styles.css";
import React, { useState } from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.Increase = this.Increase.bind(this);
  }
  Increase() {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({ ...this.state, counter: this.state.counter + 1 });
          }}
        >
          Click me to add 1 from class components
        </button>
      </div>
    );
  }
}

export default Count;
