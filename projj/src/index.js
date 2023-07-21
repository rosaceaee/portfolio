import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Works from "./pages/Works";
import Main from "./pages/Main";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/works" element={<Works />} />
    </Routes>
  </BrowserRouter>
);
