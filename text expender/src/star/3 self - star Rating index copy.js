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
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="orange" maxRating={15} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
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
