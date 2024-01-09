import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleDecrement = this.handleDecrement.bind(this); // to give acess to this keyword on eventHandler functions

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //Every class component needs to have a render method , that returns some JSX.
  handleDecrement() {
    console.log(this);
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });

    // this.setState({ count: 10 });// static setState
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
