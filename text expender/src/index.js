import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./star/App";
import StarRating from "./star/StarRating";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

function Test() {
  // const [tempRating, setTempRating] = useState(0);
  const [movieRating, setMovieRating] = useState(0);
  const [tempRating1, setMovieRating1] = useState(0);

  return (
    <div>
      <StarRating
        color="red"
        maxRating={15}
        onSetRating={setMovieRating}
        onSetRating1={setMovieRating1}
      />
      {console.log(tempRating1)}
      <p>
        {/* This movie was rated {tempRating} stars */}
        This movie was rated {movieRating} is {tempRating1} stars
      </p>
    </div>
  );
}

root.render(
  <StrictMode>
    <App maxRating={5} />
    <App
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "amazing"]}
    />
    <App maxRating={7} color={"red"} size={30} />
    <App
      color={"grey"}
      size={50}
      messages={["terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={2}
    />

    <Test />
  </StrictMode>
);
