import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //Every class component needs to have a render method , that returns some JSX.

  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
