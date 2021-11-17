import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
const Home = () => {
  const [todo, setTodo] = useState([]);
  const getTask = async () => {
    const items = await axios.get("http://localhost:5000/todo");
    setTodo(items.data);
    console.log(todo);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      Home
      {/* {todo.map((item) => {
        return (
          <ul>
            <li>
              {" "}
              <h1>{item.task}</h1>
            </li>
          </ul>
        );
      })} */}
    </div>
  );
};

export default Home;
