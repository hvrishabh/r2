import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetRating={setMovieRating}
//       ></StarRating>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={3}
    /> */}
    {/* <StarRating maxRating={10} size={23} color="red" className={test} /> */}

    {/* <StarRating maxRating={10} />
    <StarRating /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
