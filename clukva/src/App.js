import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import PostList from "./components/PostList.jsx";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ]);

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostList posts={posts} title={"Список постов 1"} />
      <PostList posts={posts} title={"Список постов 3"} />
    </div>
  );
}

export default App;

