import "./styles.css";
import React, { useState } from "react";

class CountingStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "John", age: 18 };
  }
  render() {
    return (
      <div>
        <p>
          Hello! I'm {this.state.name}. I'm {this.state.age} years old.
        </p>
        <button
          onClick={() => {
            this.setState({ ...this.state, age: this.state.age + 1 });
          }}
        >
          Increase age with class components method
        </button>
      </div>
    );
  }
}
export default CountingStudent;
