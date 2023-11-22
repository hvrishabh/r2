import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1); // here s , is the current value of the state variable step,
    }
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1); // if we want to do multiple setStep , this will still be exectuted only once .
      // setStep(step + 1);
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
      // // but when we declare current state in function format then it gives us the proper result
    }

    // setTest({ name: "fred" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}> 1</div>
            <div className={`${step >= 2 ? "active" : ""}`}> 2</div>
            <div className={`${step >= 3 ? "active" : ""}`}> 3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
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
      )}
    </>
  );
}