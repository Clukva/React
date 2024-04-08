import React from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Counter />

      <ClassCounter />
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - язык программиривания</div>
        </div>
        <div className="post__btn">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;

