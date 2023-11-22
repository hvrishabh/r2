import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;

  const [test, setTest] = useState({ name: "Jonas" });
  const [step, setStep] = useState(1); // use state is an array with first value as default i.e is step here and second value is function i.e setStep() function here.

  // // useState() , this is called hooks in react, in react hooks starts with the use keyword.
  /// // hooks can be called on the top level of the component not, inside loop, or if else statement, or inside a function.

  // console.log(arr);

  // const step = 1;

  function handlePrevious() {
    // alert("Handle Previous");
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    // // if we directly try to update the state of the state variable, ie of step variable here, it will signify we are trying to mutate the variable , which reach does not allow.
    // // so never go for , step = step + 1; , always use the setStep function provided by the state.

    setTest({ name: "fred" });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}> 1</div>
        <div className={`${step >= 2 ? "active" : ""}`}> 2</div>
        <div className={`${step >= 3 ? "active" : ""}`}> 3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
        {test.name}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("previous")}
          onClick={handlePrevious} // Here we are just passing the value and not calling it
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
