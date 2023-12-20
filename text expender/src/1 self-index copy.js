import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./star/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

root.render(
  <StrictMode>
    <App maxRating={5} />
    <App maxRating={10} color={"red"} size={30} />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={3}
    /> */}
    {/* <StarRating maxRating={10} size={23} color="red" className={test} /> */}

    {/* <StarRating maxRating={10} />
    <StarRating /> */}

    {/* <Test /> */}
  </StrictMode>
);
