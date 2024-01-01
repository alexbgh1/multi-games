// React
import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./index.css";
// Router
import RouterProviderExtension from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProviderExtension />
  </React.StrictMode>
);
