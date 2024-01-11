function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to the react Quiz!</h2>
      <p>{numQuestions} question to test your React mastery</p>

      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
