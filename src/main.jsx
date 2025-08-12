import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollController from "./ScrollController.jsx";

import NavHeightProvider from "./contexts/NavHeightProvider";
import HomeLinkProvider from "./contexts/HomeLinkProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HomeLinkProvider>
        <NavHeightProvider>
          <ScrollController />
          <App />
        </NavHeightProvider>
      </HomeLinkProvider>
    </BrowserRouter>
  </StrictMode>
);
