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
import ThirdMain from "./pages/ThirdMain";
import Test from "./pages/Test";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ThirdMain />} />
      <Route exact path="/works" element={<Works />} />
      <Route exact path="/en" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
