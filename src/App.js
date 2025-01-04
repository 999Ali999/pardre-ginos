import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Classic pepperoni pizza",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Classic Margherita pizza",
    }),
    React.createElement(Pizza, {
      name: "Cool",
      description: "Cool Pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
