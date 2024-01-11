import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state);
  console.log(action);
  // return state + action;
  if (action.type === "inc") {
    return state + 1;
    // return state + action.payload;
  }
  if (action.type === "dec") {
    return state - 1;
    // return state - action.payload;
  }
  if (action.type === "setCount") {
    return action.payload;
  }
}
function DateCounter() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  // useReducer hook get access to current state (0) and the reducer function , that has (curState, action)
  // useReducer returns the curState(ie. count) and dispatch function( dispatch function can be used to dispatch the actions )

  // actions contains the {type: '' , payload: ''},
  // with a goal to pass some value to the reducer

  // and then the reducer function takes the curState and all the information that is contained in the action  , in order to compute the next state.
  // and then based on action type , reducer takes some kind of action.

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch({ type: "dec", payload: -1 });
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
