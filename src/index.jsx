import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import "./index.scss";

import hello from "./images/helloworld.gif";

const App = () => {
  return (
    <div className='app'>
      <h1>Hello World</h1>
      <img src={hello} alt='hello world animated' />
    </div>
  );
};

root.render(<App />);