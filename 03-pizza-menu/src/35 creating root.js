import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React !</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App></App>);

// Enabling strict mode
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// // React before 18
// React.render(<App></App>);
