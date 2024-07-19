import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( //it needs a provider in there
  <StrictMode>
    <App />
  </StrictMode>
);



// optimize the hw the foldersturcture, implement middleware, make sure json server working