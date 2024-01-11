import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

function App() {
  const inititalState = {
    questions: [],

    //  'loading', 'error', 'ready','active','finished'
    status: "loading",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return {
          ...state,
          status: "error",
        };
      case "start":
        return {
          ...state,
          status: "active",
        };
      default:
        throw new Error("Error in reducer");
    }
  }

  const [{ questions, status }, dispatch] = useReducer(reducer, inititalState);

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}

export default App;
