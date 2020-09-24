import React, { useState } from "react";
import Chance from "../node_modules/chance";

import { generateTodo, generateUser } from "./utils/functions";
import ApplicationContext from "./utils/ApplicationContext";

import TodoModel from "./components/TodoModel";
import UserModel from "./components/UserModel";

//chance init

const chance = new Chance();

export default function App() {
  //states

  const [user, setUser] = useState([
    {
      name: "",
      interests: "",
      age: "",
    },
  ]);

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    completed: "",
    completedAt: "",
  });

  const [formData, setFormData] = useState({
    dataType: "",
    inputField: "",
  });

  const [todos, setTodos] = useState([]);

  const [users, setUsers] = useState([]);

  const [error, setError] = useState(false);

  // input field handler

  const onChangeInput = (event) => {
    setFormData({
      ...formData,
      inputField: event.target.value,
    });
  };

  // button handler ,handling every input and generating data based on input and errors

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // error handling - missing/invalid input

    if (
      formData.dataType !== "" &&
      formData.inputField > 0 &&
      formData.inputField !== ""
    ) {
      setError(false);
    } else {
      setError(true);
      return;
    }

    // output handling todo/user

    if (formData.dataType === "todo") {
      setTodos((todos) => todos.concat(generateTodo(formData.inputField)));
    }

    //

    if (formData.dataType === "user") {
      setUsers((users) => users.concat(generateUser(formData.inputField)));
    }
  };

  // handler for clearing screen

  const resetScreenHandler = (event) => {
    event.preventDefault();

    setTodos([]);
    setUsers([]);
  };

  //

  return (
    <ApplicationContext.Provider value={{ todos, users }}>
      <div className="app-container">
        <div className="form-container">
          <form>
            <input
              autoFocus
              className="number-input"
              type="number"
              placeholder="...how much data?"
              onChange={onChangeInput}
            ></input>

            <div className="radio-container">
              <div className="radio-switch">
                <label>ToDo</label>

                <input
                  type="radio"
                  checked={formData.dataType === "todo"}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      dataType: "todo",
                    });
                  }}
                ></input>
              </div>

              <div className="radio-switch">
                <label>User</label>

                <input
                  type="radio"
                  checked={formData.dataType === "user"}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      dataType: "user",
                    });
                  }}
                ></input>
              </div>
            </div>

            <button onClick={onSubmitHandler}>Generate</button>
          </form>
        </div>

        {/*Conditional rendering of data and error message */}

        {error && <div style={{ color: "red" }}>Invalid or missing input</div>}

        {users.length > 0 || todos.length > 0 ? (
          <button onClick={resetScreenHandler}>Reset</button>
        ) : (
          <div></div>
        )}

        {todos.length > 0 ? (
          <div className="data-container">
            <TodoModel />
          </div>
        ) : (
          <div></div>
        )}

        {users.length > 0 ? (
          <div className="data-container">
            <UserModel />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </ApplicationContext.Provider>
  );
}
