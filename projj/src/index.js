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
import Header from "./Header";
import Works from "./pages/Works";
import NewMain from "./NewMain";
import Test from "./pages/Test";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NewMain />} />
      <Route exact path="/works" element={<Works />} />
      <Route exact path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
